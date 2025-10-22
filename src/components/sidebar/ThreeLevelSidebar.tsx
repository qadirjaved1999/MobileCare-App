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
import Image from "next/image";

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
        className="p-0 pt-5 w-auto max-w-none bg-[#6A4EF5] text-primary-foreground border-none [&>button]:hidden"
      >
        {/* HEADER */}
        <div className="sticky top-0 z-10">
          <div className="flex items-center justify-between gap-0">
            <SheetHeader className="space-y-0">
              <SheetTitle className="text-lg">
                <Image
                  src="/logos/logo.svg"
                  alt="logo"
                  priority
                  width={20}
                  height={12}
                  className="h-auto w-60"
                />
              </SheetTitle>
            </SheetHeader>
            <SheetClose
              aria-label="Zavrieť"
              className="p-0.5 mr-4 text-black border-2 !border-black cursor-pointer"
            >
              <X className="h-5 w-5" />
            </SheetClose>
          </div>
        </div>

        {/* 3 COLUMNS */}
        <div className="flex h-[calc(100vh-57px)] relative">
          {/* PARENT */}
          <div
            ref={parentRef}
            className="w-80 flex-shrink-0 overflow-y-auto"
            aria-label="Rodičovské kategórie"
          >
            <div className="p-4 space-y-1">
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
                      <ChevronRight className="h-6 w-6 opacity-50 group-hover:opacity-100 transition-opacity" />
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
              className="w-80 h-[100vh] flex-shrink-0 overflow-y-auto bg-white text-black border-r-1 border-r-gray-600 absolute -top-16.5 left-[20rem]"
              aria-label={`Podkategórie: ${parent.title}`}
            >
              <div className="sticky top-0 z-10 px-12 pt-8 pb-3">
                <h3 className="font-semibold text-md text-[#6A4EF5]">
                  {parent.title}
                </h3>
              </div>
              <div className="px-8 py-4 space-y-2.5">
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
                      {/* <span className="text-sm">{c.title}</span> */}
                      <span className="text-sm inline-flex items-center gap-3">
                        {/* icon (fallback to default if missing) */}
                        <span className="inline-flex items-center justify-center">
                          <Image
                            src={c.icon || "/icons/categories/default.svg"}
                            alt=""
                            width={16}
                            height={16}
                            className="h-auto w-5 object-contain"
                          />
                        </span>
                        {c.title}
                      </span>
                      {hasSub ? (
                        <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
              {/* Nav Bottom Image */}
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
          )}

          {/* SUB-CHILD */}
          {!!child?.children?.length && (
            <div
              ref={subRef}
              className="w-80 h-[100vh] flex-shrink-0 overflow-y-auto bg-white text-black absolute -top-16.5 left-[40rem]"
              aria-label={`Subkategórie: ${child.title}`}
            >
              <div className="sticky top-0 z-10 px-12 pt-8 pb-3">
                <h3 className="font-semibold text-md text-[#6A4EF5]">
                  {child.title}
                </h3>
              </div>
              <div className="px-8 py-4 space-y-2.5">
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
