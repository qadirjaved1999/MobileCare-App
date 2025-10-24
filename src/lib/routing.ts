// src/lib/routing.ts
import type { Category } from "@/lib/types";

// const norm = (s: string) => decodeURIComponent(s).toLowerCase();

function norm(s: string) {
  return s
    .normalize("NFKD")                    // split accents
    .replace(/\p{Diacritic}/gu, "")       // remove diacritics
    .toLowerCase()
    .trim();
}


/** Build /category/<a>/<b>/<c> */
export function buildCategoryHref(parent: string, child?: string, sub?: string) {
  const segments = [parent, child, sub].filter(Boolean) as string[];
  return `/category/${segments.map(encodeURIComponent).join("/")}`;
}

/** Walk the category tree using segments (e.g. ["iphone","iphone-15"]) */
export function resolveCategoryBySegments(tree: Category[], segments: string[]): Category | null {
  let node: Category | null = null;
  let list: Category[] | undefined = tree;

  for (const raw of segments) {
    const target = norm(raw);
    node = (list ?? []).find(n => norm(n.slug) === target) ?? null;
    if (!node) return null;
    list = node.children;
  }
  return node;
}

/** Product appears if product.categorySlugs starts with current segments */
// export function productMatchesPath(productPath: string[] | undefined, segments: string[]) {
//   if (!productPath) return false;
//   if (productPath.length < segments.length) return false;
//   return segments.every((seg, i) => norm(productPath[i]) === norm(seg));
// }

export function productMatchesPath(
  productPath: string[] | undefined,
  segments: string[]
): boolean {
  if (!productPath) return false;
  if (productPath.length < segments.length) return false; // product must be at or below this node
  return segments.every((seg, i) => norm(productPath[i]) === norm(seg));
}