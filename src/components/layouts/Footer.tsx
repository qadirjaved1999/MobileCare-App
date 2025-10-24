"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SearchBar from "../custom-ui/SearchBar";

export default function Footer() {
  // inside Footer component
const sections = [
  {
    title: "Customer service",
    links: [
      { id: "contact", label: "Kontaktujte nás", href: "/kontakt" },
      { id: "faqs", label: "FAQs", href: "/faqs" },
      { id: "returns", label: "Vrátenie zásielky", href: "/vratenie" },
      { id: "delivery", label: "Doručenie", href: "/doprava" },
      { id: "tracking", label: "Sledovanie zásielky", href: "/sledovanie" },
      { id: "pricing", label: "Platby a cenotvorba", href: "/platby" },
    ],
  },
  {
    title: "Iné",
    links: [
      { id: "other-1", label: "Iné iné a niečo iné", href: "/ine-1" },
      { id: "other-2", label: "Iné iné a niečo iné", href: "/ine-2" }, // same label, different id
      { id: "other-3", label: "Iné iné iné", href: "/ine-3" },
      { id: "other-4", label: "Iné iné a iné", href: "/ine-4" },
    ],
  },
  // ...
] as const;

  // const columns: { title: string; links: { label: string; href: string }[] }[] =
  //   [
  //     {
  //       title: "Customer service",
  //       links: [
  //         { label: "Kontaktujte nás", href: "/kontakt" },
  //         { label: "FAQs", href: "/faq" },
  //         { label: "Vrátenie zásielky", href: "/vratenie" },
  //         { label: "Doručenie", href: "/doručenie" },
  //         { label: "Sledovanie zásielky", href: "/sledovanie" },
  //         { label: "Platby a cenotvorba", href: "/platby" },
  //       ],
  //     },
  //     {
  //       title: "Iné",
  //       links: [
  //         { label: "Iné iné a niečo iné", href: "#" },
  //         { label: "Iné iné a niečo iné", href: "#" },
  //         { label: "Iné iné iné", href: "#" },
  //         { label: "Iné iné a iné", href: "#" },
  //       ],
  //     },
  //     {
  //       title: "Mobilecare",
  //       links: [
  //         { label: "O nás", href: "/o-nas" },
  //         { label: "Blog", href: "/blog" },
  //         { label: "Kariéra", href: "/kariera" },
  //       ],
  //     },
  //     {
  //       title: "Členstvo, zľavy a akcie",
  //       links: [
  //         { label: "Odporuč nás a dostaň zľavu 10%", href: "#" },
  //         { label: "Vernostný program", href: "#" },
  //       ],
  //     },
  //   ];

  const paymentIcons = [
    { src: "/icons/visa.svg", alt: "Visa" },
    { src: "/icons/mastercard.svg", alt: "Mastercard" },
    { src: "icons/amex.svg", alt: "American Express" },
    { src: "/icons/gpay.svg", alt: "Google Pay" },
    { src: "/icons/applepay.svg", alt: "Apple Pay" },
    { src: "/icons/paypal.svg", alt: "PayPal" },
  ];

  return (
    <footer className="bg-black text-white mt-16 pl-2 pr-2 sm:pr-10">
      {/* Top Grid */}
      <div className="container-xl py-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left block */}
        <div className="space-y-8">
          <Image
            src="/logos/logo.svg"
            alt="mobilecare"
            width={100}
            height={56}
            priority
            className="h-auto w-96"
          />

          <div className="pl-8">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Postaráme sa o vás
            </h3>
            <p className="mt-4 max-w-md text-white/80">
              Odomknite nekonečné možnosti s naším prémiovým výberom Apple
              produktov.
            </p>
          </div>
        </div>

        {/* Right block */}
        <aside className="w-full h-fit flex flex-col justify-center gap-4 p-8 bg-[#6A4EF5] text-white relative">
          {/* Discount badge (top-right) */}
          <div className="absolute right-6 top-6 select-none">
            <Image
              src="/icons/percentage-star.svg"
              alt="Výpredaj icon"
              width={16}
              height={16}
              className="h-14 w-14"
            />
          </div>

          <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold">
            Získaj 10% zľavu
          </h3>
          <p className="mt-3 max-w-xl text-white/80 lg:mb-3">
            Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes
            pripojíte k našej komunite odberateľov noviniek!
          </p>

          {/* Newsletter input + tiny search button + submit */}
          <div className="hidden xl:block mt-6 flex gap-3 items-center">
            <div className="relative flex-1">
              <SearchBar placeholder="Vaša e-mailová adresa" />
            </div>
            <Button
              className="h-12 px-10 bg-black text-white rounded-none hover:bg-black/80"
              aria-label="Odoslať"
            >
              Odoslať
            </Button>
          </div>
        </aside>
      </div>

      {/* Link columns */}
      <div className="hidden xl:block grid grid-cols-[1fr_1fr_2fr]">
        <div className="flex flex-col gap-28 pl-8">
          <div className="flex flex-col space-y-3">
            <h5 className="font-semibold mb-3">Kontaktné údaje</h5>
            <Link href="#" className="text-sm text-white/80 hover:underline">
              +421 919 215 491
            </Link>
            <Link href="#" className="text-sm text-white/80 hover:underline">
              Rastislavova 68, Košice
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {/* Socials */}
            <section className="space-y-3">
              <h5 className="font-semibold mb-3">Sledujte nás</h5>
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/facebook.svg"
                  alt="Výpredaj icon"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <Image
                  src="/icons/instagram.svg"
                  alt="Výpredaj icon"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <Image
                  src="/icons/youtube.svg"
                  alt="Výpredaj icon"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <Image
                  src="/icons/whatsapp.svg"
                  alt="Výpredaj icon"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <Image
                  src="/icons/tiktok.svg"
                  alt="Výpredaj icon"
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </div>
            </section>
          </div>
        </div>
        <div className="second-column"></div>
        <div className="grid grid-cols-4 pb-10 ml-4.5">
          {sections.map((section) => (
            <div key={section.title}>
              <h5 className="font-semibold mb-3">{section.title}</h5>
              <ul className="space-y-5 text-sm text-white/80">
                {section.links.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Countries + payment icons row */}
      <div className="container-xl pb-6">
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr] md:gap-20 sm:text-2xl md:text-3xl font-extrabold text-white/10 sm:pl-8 px-2 sm:px-0">
          <div className="text-start">Slovensko</div>
          <div className="text-center">Česká republika</div>
          <div className="sm:text-center">România</div>
          <div className="text-center sm:text-end">Polska</div>
        </div>

        <div className="mt-8 flex items-center justify-end">
          <div className="flex items-center gap-2">
            {paymentIcons.map((p) => (
              <div
                key={p.alt}
                className="bg-white rounded py-1 px-2 grid place-items-center"
              >
                <Image src={p.src} alt={p.alt} width={36} height={22} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-xs text-white/30 pl-8 pb-14">
        Podmienky používania  GDPR  Ochrana osobných údajov
      </div>
    </footer>
  );
}
