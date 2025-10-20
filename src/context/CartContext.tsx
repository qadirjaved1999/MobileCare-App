"use client"; // ✅ required: we use React state/hooks in App Router

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import type { CartItem } from "@/lib/types";
import { toast } from "sonner";

/* ---------------------------------------------
   🛒 CartContext
   Manages the cart drawer + items + voucher + totals.
   Persists to localStorage (SSR-safe).
----------------------------------------------*/
interface CartContextType {
  isOpen: boolean;                         // drawer open/close
  openCart: () => void;
  closeCart: () => void;

  items: CartItem[];                       // current cart items
  addItem: (item: CartItem) => void;       // add/merge item
  removeItem: (productId: string) => void; // remove by product id
  updateQuantity: (productId: string, quantity: number) => void;

  subtotal: number;                        // derived: sum(product * qty)
  shipping: number;                        // derived: shipping rule
  total: number;                           // derived: subtotal + shipping

  voucher: string;                         // promo code text
  setVoucher: (code: string) => void;

  savedForLater: CartItem[];               // “save for later” bin
  saveForLater: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Storage keys (so we don’t typo them later)
const CART_KEY = "mobilecare-cart";
const SAVED_KEY = "mobilecare-saved";
const VOUCHER_KEY = "mobilecare-voucher";

// Simple SSR-safe getters
function loadJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Drawer UI state
  const [isOpen, setIsOpen] = useState(false);

  // Core state (SSR-safe hydration)
  const [items, setItems] = useState<CartItem[]>(() => loadJSON(CART_KEY, []));
  const [savedForLater, setSavedForLater] = useState<CartItem[]>(() =>
    loadJSON(SAVED_KEY, [])
  );
  const [voucher, setVoucherState] = useState<string>(() =>
    loadJSON(VOUCHER_KEY, "")
  );

  // Persist on change (client only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(SAVED_KEY, JSON.stringify(savedForLater));
    }
  }, [savedForLater]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(VOUCHER_KEY, JSON.stringify(voucher));
    }
  }, [voucher]);

  /* ---------------- Actions ---------------- */

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  // Add item; if same product exists, increase quantity
  const addItem = useCallback((incoming: CartItem) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.productId === incoming.productId);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + incoming.quantity,
        };
        return next;
      }
      return [...prev, incoming];
    });
    toast.success("Produkt pridaný do košíka");
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      // quantity <= 0 removes
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.productId === productId ? { ...i, quantity } : i
        )
      );
    },
    [removeItem]
  );

  // Move an item to "saved for later"
  const saveForLater = useCallback(
    (productId: string) => {
      setItems((prev) => {
        const item = prev.find((i) => i.productId === productId);
        if (!item) return prev;
        // add to saved, remove from cart
        setSavedForLater((s) => [...s, item]);
        toast("Produkt odložený na neskôr");
        return prev.filter((i) => i.productId !== productId);
      });
    },
    []
  );

  const setVoucher = useCallback((code: string) => {
    setVoucherState(code);
  }, []);

  /* --------------- Derived totals --------------- */

  // Subtotal = Σ (price * qty)
  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      ),
    [items]
  );

  // Example shipping rule: free over 50€
  const shipping = useMemo(() => (subtotal > 50 ? 0 : 4.99), [subtotal]);

  // For now: total is subtotal + shipping (no voucher math here)
  const total = useMemo(() => subtotal + shipping, [subtotal, shipping]);

  /* --------------- Context value --------------- */

  const value: CartContextType = {
    isOpen,
    openCart,
    closeCart,
    items,
    addItem,
    removeItem,
    updateQuantity,
    subtotal,
    shipping,
    total,
    voucher,
    setVoucher,
    savedForLater,
    saveForLater,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* ---------------------------------------------
   ⚡ Hook
   Use inside components to access cart state/actions.
----------------------------------------------*/
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
