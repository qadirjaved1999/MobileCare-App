"use client";
import {
  useMemo,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";
import { toast } from "sonner";
import type { CartItem } from "@/lib/types";

// __________Types__________
interface CartContextType {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;

  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;

  subtotal: number;
  shipping: number;
  total: number;

  voucher: string;
  setVoucher: (code: string) => void;

  savedForLater: CartItem[];
  saveForLater: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// __________Storage keys__________
const CART_KEY = "mobilecare-cart";
const SAVED_KEY = "mobilecare-saved";
const VOUCHER_KEY = "mobilecare-voucher";

// __________Safe localStorage read__________
function loadJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

// __________Provider__________
export function CartProvider({ children }: { children: React.ReactNode }) {
  // UI state
  const [isOpen, setIsOpen] = useState(false);

  // Core state (hydrated from storage)
  const [items, setItems] = useState<CartItem[]>(() => loadJSON(CART_KEY, []));
  const [savedForLater, setSavedForLater] = useState<CartItem[]>(() =>
    loadJSON(SAVED_KEY, [])
  );
  const [voucher, setVoucherState] = useState<string>(() =>
    loadJSON(VOUCHER_KEY, "")
  );

  // __________Persist changes__________
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

  // __________Actions__________
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  // Add or merge item
  const addItem = useCallback((incoming: CartItem) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.productId === incoming.productId);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + incoming.quantity };
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
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }
      setItems((prev) =>
        prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
      );
    },
    [removeItem]
  );

  // Move item to "saved for later"
  const saveForLater = useCallback((productId: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.productId === productId);
      if (!item) return prev;
      setSavedForLater((s) => [...s, item]);
      toast("Produkt odložený na neskôr");
      return prev.filter((i) => i.productId !== productId);
    });
  }, []);

  const setVoucher = useCallback((code: string) => {
    setVoucherState(code);
  }, []);

  // __________Derived totals__________
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    [items]
  );
  const shipping = useMemo(() => (subtotal > 50 ? 0 : 4.99), [subtotal]);
  const total = useMemo(() => subtotal + shipping, [subtotal, shipping]);

  // __________Context value__________
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

// __________Hook__________
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
