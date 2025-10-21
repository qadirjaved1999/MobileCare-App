"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "../ui/button";
export default function MainHeader() {
  const { openCart, items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="bg-black text-white px-10 py-4">
      <div className="container-xl h-16 grid grid-cols-3 items-center">
        {/* Left three nav items with icons */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Quick links"
        >
          <Link
            href="/vypredaj"
            className="inline-flex items-center gap-1 hover:opacity-90"
          >
            <Image
              src="/icons/edit.svg" 
              alt="Výpredaj icon"
              width={20} 
              height={20}
              className="h-7 w-7"
            />
            <span className="font-medium">Výpredaj</span>
          </Link>

          <Link
            href="/novinky"
            className="inline-flex items-center gap-1 hover:opacity-90"
          >
             <Image
              src="/icons/brand.svg" 
              alt="Výpredaj icon"
              width={20} 
              height={20}
              className="h-7 w-7"
            />
            <span className="font-medium">Novinky</span>
          </Link>

          <Link
            href="/mc-servis"
            className="inline-flex items-center gap-1 hover:opacity-90"
          >
            <Image
              src="/icons/setting.svg" 
              alt="Výpredaj icon"
              width={20} 
              height={20}
              className="h-7 w-7"
            />
            <span className="font-medium">MC Servis</span>
          </Link>
        </nav>

        {/* logo + premium partner badge */}
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 select-none"
            aria-label="Mobilecare domov"
          >
            <Image
              src="/logos/logo.svg"
              alt="mobilecare logo"
              width={250}
              height={142}
              priority
            />
          </Link>
          <Button className="border border-gray-400 rounded-sm bg-transparent px-1.5 py-4">
            <Image
              src="/logos/apple.svg"
              alt="Apple logo"
              width={65}
              height={65}
            />
          </Button>
        </div>

        {/* Right account / wishlist / cart */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="/ucet"
            aria-label="Účet"
            className="grid place-items-center w-9 h-9 rounded-full hover:bg-white/10"
          >
            <Image
              src="/icons/user.svg" 
              alt="Výpredaj icon"
              width={20} 
              height={20}
              className="h-7 w-7"
            />
          </Link>

          <Link
            href="/oblubene"
            aria-label="Obľúbené"
            className="grid place-items-center w-9 h-9 rounded-full hover:bg-white/10"
          >
            <Image
              src="/icons/like.svg" 
              alt="Výpredaj icon"
              width={20} 
              height={20}
              className="h-7 w-7"
            />
          </Link>

          <button
            aria-label="Košík"
            onClick={openCart}
            className="relative grid place-items-center w-9 h-9 rounded-full hover:bg-white/10"
          >
            <Image
              src="/icons/shopping-cart.svg" 
              alt="Výpredaj icon"
              width={20} 
              height={20}
              className="h-6 w-6"
            />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-white text-[10px] leading-[18px] text-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
