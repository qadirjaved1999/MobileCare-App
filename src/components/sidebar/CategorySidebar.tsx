// components/sidebar/CategorySidebar.tsx
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebar } from "@/context/SidebarContext";
import { categoryTree } from "@/data/categories";
import { buildCategoryHref } from "@/lib/routing";
import { findPreferredPathBySlug } from "@/lib/category-path"; // ✅ NEW
import SidebarHeader from "./SidebarHeader";
import ParentSidebar from "./ParentSidebar";
import ChildSidebar from "./ChildSidebar";
import SubChildSidebar from "./SubChildSidebar";

export default function CategorySidebar() {
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

  // ✅ Helper: turn ANY slug into its canonical /category/... href
  const getHrefForSlug = React.useCallback((slug: string) => {
    const path = findPreferredPathBySlug(categoryTree, slug);
    if (!path) return buildCategoryHref(slug); // fallback
    if (path.length === 1) return buildCategoryHref(path[0]);
    if (path.length === 2) return buildCategoryHref(path[0], path[1]);
    return buildCategoryHref(path[0], path[1], path[2]); // extend if you go deeper than 3
  }, []);

  // Resolved nodes (by id) for UI state only
  const parent = React.useMemo(
    () => categoryTree.find((p) => p.id === activeParent) ?? null,
    [activeParent]
  );
  const child = React.useMemo(
    () => parent?.children?.find((c) => c.id === activeChild) ?? null,
    [parent, activeChild]
  );

  // Column refs for keyboard focus jumping
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);
  const subRef = React.useRef<HTMLDivElement>(null);

  // Scroll lock
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

  // Helpers
  const focusFirst = (root?: HTMLElement | null) => {
    const el = root?.querySelector<HTMLElement>(
      'button, a, [tabindex="0"], [role="button"]'
    );
    el?.focus();
  };
  const focusActive = (root?: HTMLElement | null) => {
    const active = root?.querySelector<HTMLElement>("[data-active]");
    if (active) active.focus();
    else focusFirst(root ?? undefined);
  };

  // Keyboard navigation across columns
  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();

      if (e.key === "ArrowRight") {
        const withinParent = parentRef.current?.contains(
          document.activeElement
        );
        const withinChild = childRef.current?.contains(document.activeElement);
        if (withinParent && parent?.children?.length)
          focusFirst(childRef.current);
        else if (withinChild && child?.children?.length)
          focusFirst(subRef.current);
      }

      if (e.key === "ArrowLeft") {
        const withinSub = subRef.current?.contains(document.activeElement);
        const withinChild = childRef.current?.contains(document.activeElement);
        if (withinSub) focusActive(childRef.current);
        else if (withinChild) focusActive(parentRef.current);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, parent, child, closeSidebar]);

  // ✅ Click handler when child has no sub-children (ROUTING FIX HERE)
  const goToChildOrOpenSub = (childSlug: string, hasSub: boolean) => {
    if (hasSub) return; // keep opening the sub column
    router.push(getHrefForSlug(childSlug)); // ✅ canonical path
    closeSidebar();
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeSidebar()}>
      <SheetContent
        side="left"
        className="p-0 pt-5 w-auto max-w-none bg-[#6A4EF5] text-primary-foreground border-none [&>button]:hidden"
      >
        <SidebarHeader />

        <div className="flex h-[calc(100vh-57px)] relative">
          {/* Parent column */}
          <ParentSidebar
            ref={parentRef}
            items={categoryTree}
            activeParentId={activeParent}
            onPick={(id: string) => {
              setActiveParent(id);
              setActiveChild(null);
              setActiveSubChild(null);

              // Find the picked parent by id
              const picked = categoryTree.find((p) => p.id === id);

              // If a parent has NO children, navigate directly to its canonical /category/... page
              if (
                picked?.slug &&
                (!picked.children || picked.children.length === 0)
              ) {
                router.push(getHrefForSlug(picked.slug)); // ← uses the canonical path helper
                closeSidebar();
                return;
              }

              // Otherwise move focus to the Child column
              setTimeout(() => focusFirst(childRef.current), 0);
            }}
          />

          {/* Child column */}
          {parent?.children?.length ? (
            <ChildSidebar
              ref={childRef}
              parent={parent}
              activeChildId={activeChild}
              onPick={(c, hasSub) => {
                setActiveChild(c.id);
                setActiveSubChild(null);
                if (!hasSub)
                  goToChildOrOpenSub(c.slug, false); // ✅ uses canonical href
                else setTimeout(() => focusFirst(subRef.current), 0);
              }}
            />
          ) : null}

          {/* Sub-child column */}
          {child?.children?.length ? (
            <SubChildSidebar
              ref={subRef}
              parent={parent!}
              child={child}
              onPick={(slug) => {
                router.push(getHrefForSlug(slug)); // ✅ canonical href
                closeSidebar();
              }}
            />
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
