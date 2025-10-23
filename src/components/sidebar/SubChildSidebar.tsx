"use client";

import * as React from "react";
import Link from "next/link";
import type { Category } from "@/lib/types";
import { buildCategoryHref } from "@/lib/routing";

type Props = {
  parent: Category;
  child: Category;
  onPick: (slug: string) => void;
};

const SubChildSidebar = React.forwardRef<HTMLDivElement, Props>(
  ({ parent, child, onPick }, ref) => {
    return (
      <div
        ref={ref}
        className="w-80 h-[100vh] flex-shrink-0 overflow-y-auto bg-white text-black absolute -top-16.5 left-[40rem]"
        aria-label={`Subkategórie: ${child.title}`}
      >
        <div className="sticky top-0 z-10 px-12 pt-8 pb-3">
          <h3 className="font-semibold text-md text-[#6A4EF5]">{child.title}</h3>
        </div>

        <div className="px-8 py-4 space-y-2.5">
          {child.children?.map((s) => (
            <Link
              key={s.id}
              className="block px-4 py-3 rounded-lg transition-colors hover:bg-primary/10 text-sm"
              href={buildCategoryHref(parent.slug, child.slug, s.slug)}
              onClick={() => onPick(s.slug)}
            >
              {s.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }
);

SubChildSidebar.displayName = "SubChildSidebar";
export default SubChildSidebar;
