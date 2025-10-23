"use client";

import Image from "next/image";
import { SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { X } from "lucide-react";

export default function SidebarHeader() {
  return (
    <div className="sticky top-0 z-10 px-4">
      <div className="flex items-center justify-between gap-0">
        <SheetHeader className="space-y-0">
          <SheetTitle className="text-lg">
            <Image
              src="/logos/logo.svg"
              alt="logo"
              priority
              width={20}
              height={12}
              className="h-auto w-56"
            />
          </SheetTitle>
        </SheetHeader>

        <SheetClose
          data-sheet-close
          aria-label="Zavrieť"
          className="p-0.5 mr-4 text-black border-2 !border-black cursor-pointer"
        >
          <X className="h-5 w-5" />
        </SheetClose>
      </div>
    </div>
  );
}
