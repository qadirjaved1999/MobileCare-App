"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

// __________Search Bar Component__________
export default function SearchBar({
  placeholder = "Zadajte názov produktu",
  value,
  onChange,
  className,
}: Props) {
  return (
    // __________Wrapper container__________
    <div className={cn("relative", className)}>
      {/* __________Search icon__________ */}
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-black"
      />

      {/* __________Input field__________ */}
      <Input
        type="search"
        inputMode="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "h-12 pl-10 pr-3",
          "bg-white text-black !text-[16px] font-medium border border-black/15 rounded-none",
          "focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-black/30"
        )}
        aria-label="Zadajte názov produktu"
      />
    </div>
  );
}
