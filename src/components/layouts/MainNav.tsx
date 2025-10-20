"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import CategoryTrigger from "./CategoryTrigger";

const nav = ["iPhone", "iPad", "MacBook", "Apple Airpods", "Smarthome", "Príslušenstvo"];

export default function MainNav() {
  return (
    <nav className="bg-ink text-white border-t border-white/10">
      <div className="container-xl h-12 flex items-center gap-4">
        {/* “Všetky kategórie” trigger */}
        <div className="mr-2">
          <CategoryTrigger>
            <div className="inline-flex items-center gap-2 bg-white text-black rounded-md px-3 py-2">
              <span>Všetky kategórie</span>
              <Menu className="h-4 w-4" />
            </div>
          </CategoryTrigger>
        </div>

        {/* section links */}
        <div className="flex items-center gap-6 overflow-x-auto">
          {nav.map((label) => (
            <Link
              key={label}
              href={`/category/${label.toLowerCase().replaceAll(" ", "-")}`}
              className="whitespace-nowrap hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* mobile search (optional) */}
        <div className="ml-auto block md:hidden" />
      </div>
    </nav>
  );
}
