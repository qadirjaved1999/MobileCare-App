"use client";
import * as React from "react";
import ChildSidebar from "./ChildSidebar";
import { useRouter } from "next/navigation";
import ParentSidebar from "./ParentSidebar";
import SidebarHeader from "./SidebarHeader";
import SubChildSidebar from "./SubChildSidebar";
import { categoryTree } from "@/data/categories";
import { buildCategoryHref } from "@/lib/routing";
import { useSidebar } from "@/context/SidebarContext";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { findPreferredPathBySlug, hrefFromPath } from "@/lib/category-path";

// __________Category Sidebar__________
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

  // __________Canonical href by slug__________
  const getHrefForSlug = React.useCallback((slug: string) => {
    const path = findPreferredPathBySlug(categoryTree, slug);
    if (!path) return buildCategoryHref(slug);
    return hrefFromPath(path, buildCategoryHref);
  }, []);

  // __________Active nodes__________
  const parent = React.useMemo(
    () => categoryTree.find(p => p.id === activeParent) ?? null,
    [activeParent]
  );
  const child = React.useMemo(
    () => parent?.children?.find(c => c.id === activeChild) ?? null,
    [parent, activeChild]
  );

  return (
    // __________Sidebar sheet (left)__________
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeSidebar()}>
      <SheetContent
        side="left"
        className="p-0 pt-5 w-auto max-w-none bg-[#6A4EF5] text-primary-foreground border-none [&>button]:hidden"
      >
        {/* __________Header__________ */}
        <SidebarHeader />

        {/* __________Three-column layout__________ */}
        <div className="flex h-[calc(100vh-57px)] relative">
          {/* __________Parent column__________ */}
          <ParentSidebar
            items={categoryTree}
            activeParentId={activeParent}
            onPick={(id: string) => {
              const picked = categoryTree.find(p => p.id === id);
              setActiveParent(id);
              setActiveChild(null);
              setActiveSubChild(null);

              // leaf parent => go to products
              if (picked?.slug && (!picked.children || picked.children.length === 0)) {
                router.push(getHrefForSlug(picked.slug));
                closeSidebar();
                return;
              }
              // else: show child column
            }}
          />

          {/* __________Child column__________ */}
          {parent?.children?.length ? (
            <ChildSidebar
              parent={parent}
              activeChildId={activeChild}
              onPick={(c, hasSub) => {
                setActiveChild(c.id);
                setActiveSubChild(null);
                // no sub => leaf => route
                if (!hasSub) {
                  router.push(getHrefForSlug(c.slug));
                  closeSidebar();
                }
              }}
            />
          ) : null}

          {/* __________Sub-child column__________ */}
          {child?.children?.length ? (
            <SubChildSidebar
              parent={parent!}
              child={child}
              onPick={(slug) => {
                // sub leaf route
                router.push(getHrefForSlug(slug));
                closeSidebar();
              }}
            />
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
