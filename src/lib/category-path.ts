import type { Category } from "@/lib/types";
// __________Helpers & constants__________
const CONTAINER_SLUGS = new Set(["všetky-kategórie", "najpredávanejšie"]);
const norm = (s: string) => s.toLowerCase();

// __________Find all matching paths by slug__________
function findAllPathsBySlug(
  tree: Category[],
  targetSlug: string,
  path: string[] = []
): string[][] {
  const out: string[][] = [];
  for (const node of tree) {
    const next = [...path, node.slug];
    if (norm(node.slug) === norm(targetSlug)) out.push(next);
    if (node.children?.length)
      out.push(...findAllPathsBySlug(node.children, targetSlug, next));
  }
  return out;
}

// __________Return best path (skip container roots)__________
export function findPreferredPathBySlug(
  tree: Category[],
  slug: string
): string[] | null {
  const paths = findAllPathsBySlug(tree, slug);
  if (paths.length === 0) return null;
  const nonContainer = paths.find((p) => !CONTAINER_SLUGS.has(p[0]));
  return nonContainer ?? paths[0];
}

// __________Build category href from path__________
export function hrefFromPath(
  path: string[],
  build: (a: string, b?: string, c?: string) => string
) {
  if (path.length === 1) return build(path[0]);
  if (path.length === 2) return build(path[0], path[1]);
  return build(path[0], path[1], path[2]); // extend if deeper hierarchy added
}
