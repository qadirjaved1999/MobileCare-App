"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

/**
 * Footer (Next.js version)
 * - Replaces react-router-dom Link with next/link
 * - Keeps your sections structure + newsletter card
 * - Uses design tokens (bg-secondary, border, etc.)
 */
export default function Footer() {
  const sections = [
    {
      title: "Zákaznícky servis",
      links: [
        { label: "Kontakt", href: "/kontakt" },
        { label: "FAQ", href: "/faq" },
        { label: "Vrátenie tovaru", href: "/vratenie" },
        { label: "Reklamácie", href: "/reklamacie" },
      ],
    },
    {
      title: "Iné",
      links: [
        { label: "O nás", href: "/o-nas" },
        { label: "Blog", href: "/blog" },
        { label: "Kariéra", href: "/kariera" },
      ],
    },
    {
      title: "Mobilecare",
      links: [
        { label: "Predajne", href: "/predajne" },
        { label: "MC Servis", href: "/servis" },
        { label: "Obchodné podmienky", href: "/podmienky" },
      ],
    },
  ] as const;

  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand / Newsletter */}
          <div className="lg:col-span-2">
            <div className="font-bold text-2xl text-primary mb-4">mobilecare</div>
            <p className="text-sm text-muted-foreground mb-6">Postaráme sa o vás</p>

            <div className="bg-primary text-primary-foreground rounded-lg p-6">
              <h3 className="font-semibold mb-2">Získaj 10% zľavu</h3>
              <p className="text-sm opacity-90 mb-4">
                Prihláste sa k odberu newslettera a získajte zľavový kupón
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Váš email"
                  className="bg-white text-foreground border-none"
                  aria-label="Váš email"
                />
                <Button variant="secondary" size="icon" aria-label="Odoslať email">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Link sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mobilecare. Všetky práva vyhradené.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Platobné metódy:</span>
            <div className="flex gap-2">
              {["Visa", "MC", "PayPal", "Apple Pay"].map((method) => (
                <div
                  key={method}
                  className="bg-background border border-border rounded px-3 py-1 text-xs font-medium"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
