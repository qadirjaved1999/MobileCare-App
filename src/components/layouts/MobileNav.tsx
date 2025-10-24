"use client";
import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import SearchBar from "../custom-ui/SearchBar";
import { buildCategoryHref } from "@/lib/routing";

// __________Navigation items__________
const NAV = [
  { label: "iPhone", slug: "iphone" },
  { label: "iPad", slug: "ipad" },
  { label: "MacBook", slug: "macbook" },
  { label: "Apple Airpods", slug: "apple-airpods" },
  { label: "Smart Speaker", slug: "smartspeaker" },
  { label: "Príslušenstvo", slug: "prislusenstvo" },
];

// __________Props__________
export interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

// __________Mobile Navigation Drawer__________
export default function MobileNav({ open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // __________Close on route change__________
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // __________Lock body scroll while open__________
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // __________ESC key to close__________
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* __________Overlay__________ */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* __________Drawer panel__________ */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Hlavná navigácia"
        className={`fixed left-0 top-0 h-dvh w-[86%] max-w-[320px] bg-white text-black shadow-2xl
                    transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* __________Header__________ */}
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

        {/* __________Search bar__________ */}
        <div className="p-4 border-b">
          <SearchBar className="w-full" />
        </div>

        {/* __________Navigation links__________ */}
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

          {/* __________All categories link__________ */}
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
