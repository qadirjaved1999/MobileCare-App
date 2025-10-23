// lib/routing.ts
import type { Category } from "@/lib/types";

/** Build URLs like /category/iphone, /category/iphone/iphone-15, ... */
export function buildCategoryHref(parent: string, child?: string, sub?: string) {
  const segments = [parent, child, sub].filter(Boolean) as string[];
  return `/category/${segments.map(encodeURIComponent).join("/")}`;
}

/** Walk the category tree using `segments` (e.g. ["iphone","iphone-15"]) */
export function resolveCategoryBySegments(tree: Category[], segments: string[]): Category | null {
  let node: Category | null = null;
  let list: Category[] | undefined = tree;

  for (const slug of segments) {
    node = (list ?? []).find(n => n.slug === slug) ?? null;
    if (!node) return null;
    list = node.children;
  }
  return node;
}

/** Product filtering helper: does product.categorySlugs start with segments? */
export function productMatchesPath(productPath: string[] | undefined, segments: string[]) {
  if (!productPath) return false;
  if (productPath.length < segments.length) return false;
  return segments.every((seg, i) => productPath[i] === seg);
}
