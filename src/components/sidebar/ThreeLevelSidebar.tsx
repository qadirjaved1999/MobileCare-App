"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { X, ChevronRight, Star } from "lucide-react";
import { categoryTree } from "@/data/categories";
import { useSidebar } from "@/context/SidebarContext";
import { buildCategoryHref } from "@/lib/routing";
import { cn } from "@/lib/utils"; // optional; replace with a simple join if you don't have this

/**
 * Expected SidebarContext API (adjust names if yours differ):
 * - isOpen: boolean
 * - closeSidebar(): void
 * - activeParent: string | null
 * - activeChild: string | null
 * - setActiveParent(id: string | null): void
 * - setActiveChild(id: string | null): void
 * - setActiveSubChild(id: string | null): void
 */
export default function ThreeLevelSidebar() {
  const router = useRouter();
  const {
    isOpen,
    closeSidebar,
    activeParent,
    activeChild,
    setActiveParent,
    setActiveChild,
    setActiveSubChild,
  } = useSidebar();

  // current nodes
  const parent = React.useMemo(
    () => categoryTree.find((p) => p.id === activeParent) ?? null,
    [activeParent]
  );
  const child = React.useMemo(
    () => parent?.children?.find((c) => c.id === activeChild) ?? null,
    [parent, activeChild]
  );

  // column refs for keyboard focus travel
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const subRef = React.useRef<HTMLDivElement>(null);

  // lock body scroll while open
  React.useEffect(() => {
    if (isOpen) {
      document.body.dataset.lockScroll = "true";
    } else {
      delete document.body.dataset.lockScroll;
    }
    return () => {
      delete document.body.dataset.lockScroll;
    };
  }, [isOpen]);

  // ESC & Arrow keys navigation across columns
  React.useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSidebar();
      }

      if (e.key === "ArrowRight") {
        const withinParent = parentRef.current?.contains(
          document.activeElement
        );
        const withinChild = childRef.current?.contains(document.activeElement);

        if (withinParent && parent?.children?.length) {
          // move to first focusable in child col
          focusFirst(childRef.current);
        } else if (withinChild && child?.children?.length) {
          // move to first focusable in sub col
          focusFirst(subRef.current);
        }
      }

      if (e.key === "ArrowLeft") {
        const withinSub = subRef.current?.contains(document.activeElement);
        const withinChild = childRef.current?.contains(document.activeElement);

        if (withinSub) {
          // back to active in child
          focusActive(childRef.current);
        } else if (withinChild) {
          // back to active in parent
          focusActive(parentRef.current);
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, parent, child, closeSidebar]);

  // helper: focus first button/link inside a column
  function focusFirst(root?: HTMLElement | null) {
    const el = root?.querySelector<HTMLElement>(
      'button, a, [tabindex="0"], [role="button"]'
    );
    el?.focus();
  }

  // helper: focus element marked as data-active or fallback to first
  function focusActive(root?: HTMLElement | null) {
    const active = root?.querySelector<HTMLElement>("[data-active]");
    if (active) active.focus();
    else focusFirst(root ?? undefined);
  }

  // click handler when a child has no sub-children -> navigate directly
  function goToChildOrOpenSub(childSlug: string, hasSub: boolean) {
    if (parent?.slug) {
      if (hasSub) {
        // just activate child column
        return;
      } else {
        router.push(buildCategoryHref(parent.slug, childSlug));
        closeSidebar();
      }
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeSidebar()}>
      <SheetContent
        side="left"
        className="p-0 w-auto max-w-none bg-primary text-primary-foreground border-none [&>button[data-sheet-close]]:hidden"
      >
        {/* HEADER (sticky) */}
        <div className="sticky top-0 z-10 bg-primary border-b border-primary-foreground/20">
          <div className="flex items-center justify-between p-4">
            <SheetHeader className="space-y-0">
              <SheetTitle className="text-lg">Všetky kategórie</SheetTitle>
            </SheetHeader>
            <SheetClose
              aria-label="Zavrieť"
              className="rounded-md p-2 hover:bg-primary-foreground/10"
            >
              <X className="h-5 w-5" />
            </SheetClose>
          </div>
        </div>

        {/* 3 COLUMNS */}
        <div className="flex h-[calc(100vh-57px)]">
          {/* PARENT */}
          <div
            ref={parentRef}
            className="w-80 flex-shrink-0 border-r border-primary-foreground/20 overflow-y-auto"
            aria-label="Rodičovské kategórie"
          >
            <div className="p-4 space-y-1">
              {/* Najpredávanejšie */}
              <button
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between group",
                  "hover:bg-primary-foreground/10"
                )}
              >
                <span className="flex items-center gap-3">
                  <Star className="h-4 w-4" />
                  Najpredávanejšie
                </span>
                <span className="badge-new">Novinka</span>
              </button>

              {categoryTree.map((p) => {
                const isActive = activeParent === p.id;
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
                    onClick={() => {
                      setActiveParent(p.id);
                      setActiveChild(null);
                      setActiveSubChild(null);
                      // move focus into child column when it appears
                      setTimeout(() => focusFirst(childRef.current), 0);
                    }}
                  >
                    <span>{p.title}</span>
                    {p.children?.length ? (
                      <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CHILD */}
          {!!parent?.children?.length && (
            <div
              ref={childRef}
              className="w-72 flex-shrink-0 border-r border-primary-foreground/20 overflow-y-auto bg-white text-black"
              aria-label={`Podkategórie: ${parent.title}`}
            >
              <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 border-b border-primary-foreground/20">
                <h3 className="font-semibold">{parent.title}</h3>
              </div>
              <div className="p-4 space-y-1">
                {parent.children.map((c) => {
                  const isActive = activeChild === c.id;
                  const hasSub = !!c.children?.length;
                  return (
                    <button
                      key={c.id}
                      data-active={isActive || undefined}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between group",
                        isActive ? "bg-primary/10" : "hover:bg-primary/10"
                      )}
                      onClick={() => {
                        setActiveChild(c.id);
                        setActiveSubChild(null);
                        if (!hasSub && parent.slug) {
                          router.push(buildCategoryHref(parent.slug, c.slug));
                          closeSidebar();
                        } else {
                          // focus into sub-col if it will render
                          setTimeout(() => focusFirst(subRef.current), 0);
                        }
                      }}
                    >
                      <span className="text-sm">{c.title}</span>
                      {hasSub ? (
                        <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
              {/* “Najpredávanejšie” / chips */}
              <div className="p-4 pt-0">
                <span className="text-xs uppercase text-neutral-500">
                  Najpredávanejšie
                </span>
                <div className="mt-2 grid gap-2">
                  <span className="inline-flex items-center gap-2 text-sm">
                    Najnovšie{" "}
                    <span className="px-2 py-0.5 text-xs rounded badge-new">
                      Novinka
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm">
                    Zľavy{" "}
                    <span className="px-2 py-0.5 text-xs rounded badge-sale text-white">
                      Výpredaj
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* SUB-CHILD */}
          {!!child?.children?.length && (
            <div
              ref={subRef}
              className="w-64 flex-shrink-0 overflow-y-auto bg-white text-black"
              aria-label={`Subkategórie: ${child.title}`}
            >
              <div className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 border-b border-primary-foreground/20">
                <h3 className="font-semibold text-sm">{child.title}</h3>
              </div>
              <div className="p-4 space-y-1">
                {child.children.map((s) => (
                  <Link
                    key={s.id}
                    className="block px-4 py-3 rounded-lg transition-colors hover:bg-primary/10 text-sm"
                    href={buildCategoryHref(parent!.slug, child.slug, s.slug)}
                    onClick={() => closeSidebar()}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
