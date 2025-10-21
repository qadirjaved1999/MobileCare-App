"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import CategoryTrigger from "./CategoryTrigger";
import Image from "next/image";
import SearchBar from "../custom-ui/SearchBar";

const nav = [
  "iPhone",
  "iPad",
  "MacBook",
  "Apple Airpods",
  "Smarthome",
  "Príslušenstvo",
];

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
          {nav.map((label) => (
            <Link
              key={label}
              href={`/category/${label.toLowerCase().replaceAll(" ", "-")}`}
              className="whitespace-nowrap"
            >
              {label}
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
