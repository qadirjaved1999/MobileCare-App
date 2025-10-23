// lib/category-path.ts
import type { Category } from "@/lib/types";

// Slugs we don't want to start URLs with
const CONTAINER_SLUGS = new Set(["všetky-kategórie", "najpredávanejšie"]);

// DFS to collect all paths to a slug
function findAllPathsBySlug(tree: Category[], targetSlug: string, path: string[] = []): string[][] {
  const out: string[][] = [];
  for (const node of tree) {
    const next = [...path, node.slug];
    if (node.slug === targetSlug) out.push(next);
    if (node.children?.length) out.push(...findAllPathsBySlug(node.children, targetSlug, next));
  }
  return out;
}

/** Prefer a path that does NOT start with a container. */
export function findPreferredPathBySlug(tree: Category[], slug: string): string[] | null {
  const paths = findAllPathsBySlug(tree, slug);
  if (paths.length === 0) return null;
  const nonContainer = paths.find(p => !CONTAINER_SLUGS.has(p[0]));
  return nonContainer ?? paths[0];
}
