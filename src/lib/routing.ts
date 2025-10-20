// src/lib/routing.ts
import type { Category } from "@/lib/types";

/**
 * 🧭 BASE_CATEGORY_PATH
 * Single source of truth for the base URL segment of your categories.
 * If you rename the folder to Slovak later (e.g. "/kategoria"),
 * change only this constant and the whole app keeps working.
 */
export const BASE_CATEGORY_PATH = "/category";

/**
 * 🔗 buildCategoryHref(...slugs)
 * Builds a clean category URL from 0..N slug segments.
 *
 * Examples:
 *  buildCategoryHref()                      -> "/category"
 *  buildCategoryHref("iphone")              -> "/category/iphone"
 *  buildCategoryHref("iphone","modely")     -> "/category/iphone/modely"
 *  buildCategoryHref("iphone","modely","17")-> "/category/iphone/modely/17"
 *
 * Why:
 * - Centralizes URL building (no hardcoded strings scattered across components).
 * - Automatically ignores undefined/null segments.
 */
export function buildCategoryHref(
  ...slugs: Array<string | undefined | null>
): string {
  // 1) filter(Boolean) removes null/undefined/"" segments
  // 2) map(String) just ensures the type is string
  // 3) join("/") creates "iphone/modely/17"
  const cleaned = slugs.filter(Boolean).map(String).join("/");

  // If at least one slug remains, prepend "/category/".
  // Otherwise return just "/category".
  return cleaned ? `${BASE_CATEGORY_PATH}/${cleaned}` : BASE_CATEGORY_PATH;
}

/**
 * 🧭 resolveCategoryBySegments(tree, segments)
 * Walks the in-memory category tree using the slug segments from the URL
 * and returns the matching Category node (or null if path is invalid).
 *
 * Examples with segments:
 *  []                        -> null (you're at "/category" root, not a specific node)
 *  ["iphone"]                -> the "iphone" node (if it exists)
 *  ["iphone","modely"]       -> the "modely" child
 *  ["iphone","modely","17"]  -> the sub-child "17" (if it exists)
 *
 * Why:
 * - Your catch-all route /category/[[...segments]] gives you string[] segments.
 * - This function converts those segments into the actual node from your tree,
 *   so the page can render the correct products/content.
 */
export function resolveCategoryBySegments(
  tree: Category[],
  segments: string[]
): Category | null {
  // If there are no segments ("/category"), we are not on a specific node.
  if (!segments || segments.length === 0) return null;

  // We traverse down level-by-level as we match each segment.
  let level: Category[] = tree;       // the array of nodes to search in at the current depth
  let current: Category | undefined;  // the node we just matched

  for (const slug of segments) {
    // Find a node in the current level whose slug matches this URL segment.
    current = level.find((n) => n.slug === slug);

    // If we cannot find it, the URL is invalid (e.g. typo).
    if (!current) return null;

    // If the found node has children, that becomes the next "level" to search in.
    level = current.children ?? [];
  }

  // After consuming all segments, current is the deepest matching node.
  return current ?? null;
}

/**
 * 🔎 findBySlugPath(tree, "iphone/modely/iphone-17")
 * Convenience wrapper that lets you pass a single string path instead of string[]
 * (Sometimes handy in tests, or when building from stored paths).
 */
export function findBySlugPath(
  tree: Category[],
  path: string
): Category | null {
  // Split the path into segments, trimming double slashes or leading/trailing slashes.
  const segments = path.split("/").filter(Boolean);
  return resolveCategoryBySegments(tree, segments);
}

/**
 * 🍞 toBreadcrumbs(tree, segments)
 * Builds a breadcrumb list from the root down to the current node.
 * Returns an array of { title, href } objects you can render as links.
 *
 * Example:
 *  segments = ["iphone","modely","iphone-17"]
 *  -> [
 *       { title: "iPhone",       href: "/category/iphone" },
 *       { title: "Modely",       href: "/category/iphone/modely" },
 *       { title: "iPhone 17",    href: "/category/iphone/modely/iphone-17" }
 *     ]
 *
 * Why:
 * - Breadcrumbs are great for navigation and SEO.
 * - Centralized here so any component/page can quickly generate them.
 */
export function toBreadcrumbs(
  tree: Category[],
  segments: string[]
): Array<{ title: string; href: string }> {
  const crumbs: Array<{ title: string; href: string }> = [];

  // If there are no segments ("/category"), you can return a single root crumb
  // or an empty list. Here we add a root "Kategórie" crumb for convenience.
  if (!segments || segments.length === 0) {
    crumbs.push({ title: "Kategórie", href: BASE_CATEGORY_PATH });
    return crumbs;
  }

  // Traverse similarly to resolveCategoryBySegments, but "acc" will accumulate the path.
  let level: Category[] = tree;
  const acc: string[] = [];

  for (const slug of segments) {
    const node = level.find((n) => n.slug === slug);
    if (!node) break; // invalid path: stop creating crumbs

    // Add the current segment to the accumulated path parts
    acc.push(slug);

    // Push a breadcrumb pointing to the path up to this node
    crumbs.push({
      title: node.title,
      href: buildCategoryHref(...acc),
    });

    // Descend into children for the next loop iteration
    level = node.children ?? [];
  }

  return crumbs;
}
