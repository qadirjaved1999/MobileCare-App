"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { TextAlignJustify } from "lucide-react";
import MobileNav from "./MobileNav";
export default function MainHeader() {
  const { openCart, items } = useCart();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="bg-black text-white px-2 sm:px-8 sm:py-4">
      <div className="container-xl h-16 grid grid-cols-2 lg:grid-cols-3 items-center">
        {/* Left three nav items with icons */}
        <nav
          className="hidden lg:flex items-center gap-8"
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
            <span className="font-medium text-xs xl:text-lg">Výpredaj</span>
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
            <span className="font-medium text-xs xl:text-lg">Novinky</span>
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
            <span className="text-xs xl:text-lg font-medium">MC Servis</span>
          </Link>
        </nav>

        {/* logo + premium partner badge */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center select-none"
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
          <Image
            src="/icons/apple.jpg"
            alt="Apple logo"
            width={65}
            height={65}
            className="hidden sm:block"
          />
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
            className="hidden md:grid place-items-center w-9 h-9 rounded-full hover:bg-white/10"
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
            {mounted && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-primary text-white text-[10px] leading-[18px] text-center">
                {cartCount}
              </span>
            )}
          </button>
          <div className="flex lg:hidden">
            <button
              aria-label="Open mobile menu"
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(true)}
            >
              <TextAlignJustify />
            </button>

            <MobileNav open={open} onClose={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </div>
  );
}
