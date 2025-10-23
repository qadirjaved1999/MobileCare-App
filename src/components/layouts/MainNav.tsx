"use client";

import Link from "next/link";
import CategoryTrigger from "./CategoryTrigger";
import Image from "next/image";
import SearchBar from "../custom-ui/SearchBar";
import { buildCategoryHref } from "@/lib/routing";

// Map display labels to data slugs
const NAV = [
  { label: "iPhone", slug: "iphone" },
  { label: "iPad", slug: "ipad" },
  { label: "MacBook", slug: "macbook" },
  { label: "Apple Airpods", slug: "apple-airpods" },
  { label: "Smart Speaker", slug: "smartspeaker" },
  { label: "Príslušenstvo", slug: "prislusenstvo" },
];

console.log("href check:", buildCategoryHref("iphone"));

export default function MainNav() {
  return (
    <nav className="bg-ink text-white px-10 pb-4">
      <div className="container-xl h-12 flex items-center justify-between gap-4">
        <div className="mr-2">
          <CategoryTrigger>
            <div className="inline-flex items-center gap-2 bg-white text-black font-bold px-3 py-2">
              <span>Všetky kategórie</span>
              <Image
                src="/icons/menu.svg"
                alt="Výpredaj icon"
                width={20}
                height={20}
                className="h-7 w-7"
              />
            </div>
          </CategoryTrigger>
        </div>

        {/* section links */}
        <div className="flex items-center gap-10 overflow-x-auto lg:mr-28">
          {NAV.map((item) => (
            <Link key={item.slug} href={buildCategoryHref(item.slug)}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* mobile search (optional) */}
        <div className="">
          <SearchBar className="hidden md:block w-[290px]" />
        </div>
      </div>
    </nav>
  );
}
