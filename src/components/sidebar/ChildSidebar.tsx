"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

type Props = {
  parent: Category;
  activeChildId: string | null;
  onPick: (child: Category, hasSub: boolean) => void;
};

const ChildSidebar = React.forwardRef<HTMLDivElement, Props>(
  ({ parent, activeChildId, onPick }, ref) => {
    return (
      <div
        ref={ref}
        className="w-80 h-[100vh] flex-shrink-0 overflow-y-auto bg-white text-black border-r-1 border-r-gray-600 absolute -top-16.5 left-[20rem]"
        aria-label={`Podkategórie: ${parent.title}`}
      >
        <div className="sticky top-0 z-10 px-12 pt-8 pb-3">
          <h3 className="font-semibold text-md text-[#6A4EF5]">{parent.title}</h3>
        </div>

        <div className="px-8 py-4 space-y-2.5">
          {parent.children?.map((c) => {
            const isActive = activeChildId === c.id;
            const hasSub = !!c.children?.length;
            return (
              <button
                key={c.id}
                data-active={isActive || undefined}
                className={cn(
                  "w-full text-left font-bold px-4 py-3 rounded-lg transition-colors flex items-center justify-between group",
                  isActive ? "bg-primary/10" : "hover:bg-primary/10"
                )}
                onClick={() => onPick(c, hasSub)}
              >
                <span className="text-sm inline-flex items-center gap-3">
                  <span className="inline-flex items-center justify-center">
                    <Image
                      src={c.icon || "/icons/categories/default.svg"}
                      alt=""
                      width={16}
                      height={10}
                      className="h-auto w-5 object-contain"
                    />
                  </span>
                  {c.title}
                </span>
                {hasSub ? (
                  <ChevronRight className="h-6 w-6 group-hover:opacity-100 transition-opacity" />
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Optional banner below list */}
        <div className="px-8 pt-0">
          <Image
            src="/images/banners/child-nav-image.jpg"
            alt="Second Nav Banner"
            width={1200}
            height={600}
            priority
          />
        </div>
      </div>
    );
  }
);

ChildSidebar.displayName = "ChildSidebar";
export default ChildSidebar;
