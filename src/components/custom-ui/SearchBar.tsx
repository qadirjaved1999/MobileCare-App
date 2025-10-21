"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils"; // optional helper

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export default function SearchBar({
  placeholder = "Zadajte názov produktu",
  value,
  onChange,
  className,
}: Props) {
  return (
    <div className={cn("relative", className)}>
      {/* 🔍 Left icon */}
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-black"
      />

      {/* Input field */}
      <Input
        type="search"
        inputMode="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          // Size & padding
          "h-12 pl-10 pr-3",
          // Look: pure white background, no rounding, subtle border
          "bg-white text-black !text-[16px] font-medium border border-black/15 rounded-none",
          // Focus style: no ring, light border emphasis
          "focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-black/30"
        )}
        aria-label="Zadajte názov produktu"
      />
    </div>
  );
}
