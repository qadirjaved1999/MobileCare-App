"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { buildCategoryHref } from "@/lib/routing";
import SearchBar from "../custom-ui/SearchBar";

const NAV = [
  { label: "iPhone", slug: "iphone" },
  { label: "iPad", slug: "ipad" },
  { label: "MacBook", slug: "macbook" },
  { label: "Apple Airpods", slug: "apple-airpods" },
  { label: "Smart Speaker", slug: "smartspeaker" },
  { label: "Príslušenstvo", slug: "prislusenstvo" },
];

export interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // close drawer on route change
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Hlavná navigácia"
        className={`fixed left-0 top-0 h-dvh w-[86%] max-w-[320px] bg-white text-black shadow-2xl
                    transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button
            className="p-2 rounded-full hover:bg-black/5"
            aria-label="Zatvoriť menu"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <SearchBar className="w-full" />
        </div>

        {/* Sections */}
        <nav className="py-2">
          <ul className="px-2">
            {NAV.map((item) => (
              <li key={item.slug}>
                <Link
                  href={buildCategoryHref(item.slug)}
                  className="block px-3 py-3 text-[15px] font-medium hover:bg-black/5 rounded-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-2 mt-1">
            <Link
              href="/category/v%C5%A1etky-kateg%C3%B3rie"
              className="block px-3 py-3 text-[15px] hover:bg-black/5 rounded-md"
            >
              Všetky kategórie
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}
