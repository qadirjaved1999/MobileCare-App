import NotFound from "@/app/not-found";
import { products } from "@/data/products";
import { categoryTree } from "@/data/categories";
import ProductCard from "@/components/products/ProductCard";
import { resolveCategoryBySegments, productMatchesPath } from "@/lib/routing";

type Props = { params: { segments?: string[] } };

// __________Category Page Component__________
export default function CategoryPage({ params }: Props) {
  // __________Get category path segments__________
  const segments = params.segments ?? [];

  // __________Resolve category node & handle invalid path__________
  const node = resolveCategoryBySegments(categoryTree, segments);
  if (!node) return <NotFound />; // if no valid category, show 404

  // __________Filter products that match current category path__________
  const items = products.filter(p => productMatchesPath(p.categorySlugs, segments));

  return (
    // __________Page layout container__________
    <main className="container mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* __________Category title__________ */}
      <h1 className="text-2xl sm:text-3xl font-semibold">{node.title}</h1>

      {/* __________Product grid or fallback text__________ */}
      {items.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      ) : (
        <p className="text-gray-600">
          Pre túto kategóriu zatiaľ nemáme produkty salman khan.
        </p>
      )}
    </main>
  );
}
