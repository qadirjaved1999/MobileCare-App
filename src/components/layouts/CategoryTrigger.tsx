"use client";

import { ReactNode } from "react";
import { useSidebar } from "@/context/SidebarContext";

/**
 * Wrapper trigger that opens the left sheet in "categories" mode.
 * Usage:
 * <CategoryTrigger>
 *   <div className="inline-flex ...">Všetky kategórie ...</div>
 * </CategoryTrigger>
 */
export default function CategoryTrigger({ children }: { children: ReactNode }) {
  const { setOpen, setCategoryMode } = useSidebar();

  return (
    <button
      type="button"
      // `contents` avoids adding extra box around your custom child UI
      className="contents"
      onClick={() => {
        setCategoryMode(true); // ensure the sheet shows categories
        setOpen(true);         // open the sheet
      }}
      aria-label="Všetky kategórie"
    >
      {children}
    </button>
  );
}
