import { notFound } from "next/navigation";
import { categoryTree } from "@/data/categories";
import { products } from "@/data/products";
import { resolveCategoryBySegments, productMatchesPath, buildCategoryHref } from "@/lib/routing";
import CategoryCard from "@/components/categories/CategoryCard";
import ProductCard from "@/components/products/ProductCard";

type Props = { params: { slug?: string[] } };

function childHrefFromSegments(current: string[], childSlug: string) {
  if (current.length === 0) return buildCategoryHref(childSlug);
  if (current.length === 1) return buildCategoryHref(current[0], childSlug);
  if (current.length === 2) return buildCategoryHref(current[0], current[1], childSlug);
  return buildCategoryHref(childSlug);
}

export default function  CategoryPage({ params }: { params: { segments?: string[] } })  {
   const segments = params.segments ?? [];

  // ✅ Put your debug logs here
  console.log("SEGMENTS------------->>>>>>>>>>>:", segments);
  console.log("TOP-LEVEL SLUGS=================>>>>>>>>>>>>>:", categoryTree.map((n) => n.slug));

  const node = resolveCategoryBySegments(categoryTree, segments);
  console.log("node here or not =========>>>>>>>>>", node)
  if (!node) return notFound();

  const children = node.children ?? [];
  // Leaf-only items (products show only when there are NO children)
  const items = children.length ? [] : products.filter((p) => productMatchesPath(p.categorySlugs, segments));

  return (
    <main className="container mx-auto px-4 sm:px-6 py-6 space-y-6">
      <h1 className="text-2xl sm:text-3xl font-semibold">{node.title}</h1>

      {children.length > 0 ? (
        // ✅ Show child categories
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {children.map((child) => (
            <CategoryCard
              key={child.slug}
              title={child.title}
              href={childHrefFromSegments(segments, child.slug)}
              image={child.icon}
            />
          ))}
        </section>
      ) : items.length > 0 ? (
        // ✅ Show products with ProductCard at leaf nodes
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      ) : (
        <p className="text-gray-600">Žiadne produkty.</p>
      )}
    </main>
  );
}
