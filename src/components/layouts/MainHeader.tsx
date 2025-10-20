"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Search } from "lucide-react";

export default function MainHeader() {
  const { openCart, items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="bg-ink text-white">
      <div className="container-xl h-16 flex items-center gap-4">
        {/* logo + partner badge */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold">mobilecare</span>
          <span className="text-[10px] px-2 py-1 rounded bg-white text-black">
            Premium Partner
          </span>
        </Link>

        {/* search */}
        <div className="ml-auto relative hidden md:block">
          <input
            placeholder="Zadajte názov produktu"
            className="w-[360px] rounded-md border border-border/30 bg-white text-black px-9 py-2"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/60" />
        </div>

        {/* header icons (stub) */}
        <div className="flex items-center gap-3">
          <button aria-label="Wishlist" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15" />
          <button aria-label="Account" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/15" />
          <button
            aria-label="Cart"
            onClick={openCart}
            className="relative w-9 h-9 rounded-full bg-white/10 hover:bg-white/15"
          >
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
