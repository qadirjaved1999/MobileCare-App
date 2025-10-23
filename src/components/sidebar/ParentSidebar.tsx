"use client";

import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import type { Category } from "@/lib/types";

type Props = {
  items: Category[];
  activeParentId: string | null;
  onPick: (id: string) => void;
};

type PromoItem = {
  id: string;
  label: string;
  icon: string;
  badge?: { text: string; className: string };
};

const ParentSidebar = React.forwardRef<HTMLDivElement, Props>(
  ({ items, activeParentId, onPick }, ref) => {
    
    //Best sellers data
    const promoItems: PromoItem[] = [
      {
        id: "new",
        label: "Najnovšie",
        icon: "/icons/brand.svg",
        badge: {
          text: "Novinka",
          className:
            "inline-block px-2 py-0.5 text-[11px] font-semibold bg-[#D9FF00] text-black",
        },
      },
      {
        id: "discount",
        label: "Zľavy",
        icon: "/icons/edit.svg",
        badge: {
          text: "Výpredaj",
          className:
            "inline-block px-2 py-0.5 text-[11px] font-semibold bg-[#FF4D97] text-white",
        },
      },
    ];
    return (
      <div
        ref={ref}
        className="w-80 px-4 py-4 flex-shrink-0 overflow-y-auto"
        aria-label="Rodičovské kategórie"
      >
        {/* Parent Categories */}
        <div className="space-y-1">
          {items.map((p) => {
            const isActive = activeParentId === p.id;
            return (
              <button
                key={p.id}
                data-active={isActive || undefined}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between group",
                  isActive
                    ? "bg-primary-foreground/20 font-medium"
                    : "hover:bg-primary-foreground/10"
                )}
                onClick={() => onPick(p.id)}
              >
                <span>{p.title}</span>
                {p.children?.length ? (
                  <ChevronRight className="h-6 w-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                ) : null}
              </button>
            );
          })}
        </div>
        {/* Best Seller Categories */}
        <div className="mt-2 text-white">
          <div className="mt-2 mb-5 mr-3 h-px bg-white/20" />
          <div className="best-seller px-4 flex justify-between mb-3 rounded-lg py-3 hover:bg-white/10 transition-colors">
            <span>Najpredávanejšie</span>
            <ChevronRight className="h-6 w-6 opacity-60" />
          </div>
          <ul className="space-y-1">
            {promoItems.map(({ id, label, icon: Icon, badge }) => (
              <li key={id}>
                <button
                  onClick={() => onPick(id)}
                  className="flex items-center justify-between gap-3 w-full rounded-lg px-3 py-2.5 hover:bg-white/10 transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <Image
                      src={Icon}
                      alt={label}
                      width={18}
                      height={18}
                      className="w-6 h-6 object-contain opacity-90"
                    />
                    <span className="text-[15px]">{label}</span>
                    {badge && (
                      <span className={badge.className}>{badge.text}</span>
                    )}
                  </span>
                  <ChevronRight className="h-6 w-6 opacity-60 mr-1" />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-5 mr-3 h-px bg-white/20" />
        </div>

        {/* Links: Blog and Frequently questions */}
        <div className="px-2 flex flex-col justify-start items-start mt-3 text-sm font-normal">
          <div className="cursor-pointer w-full rounded-lg px-3 py-3 hover:bg-white/10 transition-colors">
            Kontakt
          </div>
          <div className="cursor-pointer w-full rounded-lg px-3 py-3 hover:bg-white/10 transition-colors">
            Často kladené otázky
          </div>
          <div className="cursor-pointer w-full rounded-lg px-3 py-3 hover:bg-white/10 transition-colors">
            Blog
          </div>
        </div>
        <div className="mt-3 mr-3 h-px bg-white/20" />
        {/* Popular products */}
        <div className="popular-product flex gap-3 mt-2 w-full max-w-[17.4rem] cursor-pointer rounded-lg px-3 py-3 hover:bg-white/10 transition-colors">
          <Image
            src="/icons/like.svg"
            alt={"Popular Product"}
            width={18}
            height={18}
            className="w-6 h-6 object-contain opacity-90"
          />
          <span className="text-[15px]">{"Obľúbené produkty"}</span>
        </div>
        <div className="mt-2 mr-3 h-px bg-white/20" />
        {/* Social links */}
        <div className="flex flex-col gap-6 mt-5 px-4">
          <span>Sledujte nás</span>
          <div className="flex justify-start items-center gap-5">
            <Image
              src="/icons/facebook.svg"
              alt={"Popular Product"}
              width={18}
              height={18}
              className="w-5 h-5 object-contain opacity-90"
            />
             <Image
              src="/icons/instagram.svg"
              alt={"Popular Product"}
              width={18}
              height={18}
              className="w-5 h-5 object-contain opacity-90"
            />
             <Image
              src="/icons/youtube.svg"
              alt={"Popular Product"}
              width={18}
              height={18}
              className="w-5 h-5 object-contain opacity-90"
            />
             <Image
              src="/icons/whatsapp.svg"
              alt={"Popular Product"}
              width={18}
              height={18}
              className="w-5 h-5 object-contain opacity-90"
            />
             <Image
              src="/icons/tiktok.svg"
              alt={"Popular Product"}
              width={18}
              height={18}
              className="w-5 h-5 object-contain opacity-90"
            />
          </div>
        </div>
      </div>
    );
  }
);

ParentSidebar.displayName = "ParentSidebar";
export default ParentSidebar;
