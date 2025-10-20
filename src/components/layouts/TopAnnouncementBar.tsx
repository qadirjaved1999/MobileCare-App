import Link from "next/link";

const links = [
  { label: "Sledovanie zásielky", href: "/sledovanie" },
  { label: "Vrátenie tovaru", href: "/vratenie" },
  { label: "O nás", href: "/o-nas" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export default function TopAnnouncementBar() {
  return (
    <div className="bg-announcement text-white text-xs">
      <div className="container-xl flex items-center justify-between py-1">
        {/* right-aligned links */}
        <nav className="hidden md:flex items-center gap-5 opacity-95">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* center message */}
        <div className="mx-auto md:absolute md:left-1/2 md:-translate-x-1/2 font-semibold">
          Nové iPhone 14 PRO s 20% zľavou ✨
        </div>
      </div>
    </div>
  );
}
