import { notFound } from "next/navigation";
import { categoryTree } from "@/data/categories";
import { resolveCategoryBySegments } from "@/lib/routing";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function CategoryPage({ params }: { params: { segments?: string[] } }) {
  const segments = params.segments ?? [];
  const node = resolveCategoryBySegments(categoryTree, segments);
  if (!node) return notFound();

  // In real app, fetch products by node.slug
  const visible = products; // stub

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">{node.title}</h1>
        {/* your SortDropdown, filter trigger, etc. */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {visible.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
