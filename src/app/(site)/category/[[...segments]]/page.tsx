
import NotFound from "@/app/not-found";
import { categoryTree } from "@/data/categories";
import { products } from "@/data/products";
import { resolveCategoryBySegments, productMatchesPath } from "@/lib/routing";
import ProductCard from "@/components/products/ProductCard";

type Props = { params: { segments?: string[] } };

export default function CategoryPage({ params }: Props) {
  const segments = params.segments ?? [];

  // Resolve for page title & 404 if bad path
  const node = resolveCategoryBySegments(categoryTree, segments);
  if (!node) return <NotFound />;


  // Always aggregate products for current path (parent or leaf)
  const items = products.filter(p => productMatchesPath(p.categorySlugs, segments));

  return (
    <main className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-semibold">{node.title}</h1>

      {items.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      ) : (
        <p className="text-gray-600">Pre túto kategóriu zatiaľ nemáme produkty salman khan.</p>
      )}
    </main>
  );
}
