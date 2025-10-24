import type { Category } from "@/lib/types";

// __________Normalize slug (remove accents, lowercase)__________
function norm(s: string) {
  return s
    .normalize("NFKD")            // split accents
    .replace(/\p{Diacritic}/gu, "") // remove diacritics
    .toLowerCase()
    .trim();
}

// __________Build /category/<a>/<b>/<c> URL__________
export function buildCategoryHref(parent: string, child?: string, sub?: string) {
  const segments = [parent, child, sub].filter(Boolean) as string[];
  return `/category/${segments.map(encodeURIComponent).join("/")}`;
}

// __________Find category by path segments__________
export function resolveCategoryBySegments(tree: Category[], segments: string[]): Category | null {
  let node: Category | null = null;
  let list: Category[] | undefined = tree;

  for (const raw of segments) {
    const target = norm(raw);
    node = (list ?? []).find((n) => norm(n.slug) === target) ?? null;
    if (!node) return null;
    list = node.children;
  }
  return node;
}

// __________Check if product belongs to current path__________
export function productMatchesPath(
  productPath: string[] | undefined,
  segments: string[]
): boolean {
  if (!productPath) return false;
  if (productPath.length < segments.length) return false;
  return segments.every((seg, i) => norm(productPath[i]) === norm(seg));
}
