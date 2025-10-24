"use client";

import { ReactNode } from "react";
import { useSidebar } from "@/context/SidebarContext";

// __________Category Trigger Button__________
export default function CategoryTrigger({ children }: { children: ReactNode }) {
  const { setOpen, setCategoryMode } = useSidebar();

  return (
    // __________Opens sidebar in category mode__________
    <button
      type="button"
      className="contents cursor-pointer"
      onClick={() => {
        setCategoryMode(true); // show category mode
        setOpen(true);         // open sidebar
      }}
      aria-label="Všetky kategórie"
    >
      {children}
    </button>
  );
}
