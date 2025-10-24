"use client";
import Link from "next/link";

// __________Top Info Bar__________
export default function StoreInfoBar() {
  // __________Quick info links__________
  const links = [
    { label: "Sledovanie zásielky", href: "/sledovanie" },
    { label: "Vrátenie tovaru", href: "/vratenie" },
    { label: "O nás", href: "/o-nas" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    // __________Wrapper bar__________
    <div className="bg-white text-[13px] py-1 px-10 hidden sm:block">
      <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* __________Left column (placeholder)__________ */}
        <div className="flex items-center gap-3 text-white/70">
          <span></span>
        </div>

        {/* __________Right column (links)__________ */}
        <nav className="flex flex-wrap justify-center sm:justify-end gap-4 text-gray-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
