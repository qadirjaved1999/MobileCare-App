"use client";
import Image from "next/image";
import { X } from "lucide-react";
import { SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";

// __________Sidebar Header__________
export default function SidebarHeader() {
  return (
    // __________Sticky top section__________
    <div className="sticky top-0 z-10 px-4">
      <div className="flex items-center justify-between gap-0">
        {/* __________Logo__________ */}
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

        {/* __________Close button__________ */}
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
