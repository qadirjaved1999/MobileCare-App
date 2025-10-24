import { categoryTree } from "@/data/categories";
import { buildCategoryHref } from "@/lib/routing";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryCard from "@/components/categories/CategoryCard";

// __________Get top-level categories__________
function getTopCategories() {
  const root = categoryTree.find(n => n.slug === "všetky-kategórie");
  return root?.children ?? [];
}

// __________Home Page__________
export default function HomePage() {
  // __________Load categories__________
  const categories = getTopCategories();

  return (
    // __________Main container__________
    <main className="container mx-auto px-4 sm:px-6 py-6 space-y-10">
      
      {/* __________Hero carousel__________ */}
      <HeroCarousel />

      {/* __________Page header__________ */}
      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">Hlavné kategórie</h1>
      </header>

      {/* __________Category grid__________ */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map(c => (
          <CategoryCard
            key={c.slug}
            title={c.title}
            href={buildCategoryHref(c.slug)}
            image={c.icon}
          />
        ))}
      </section>
    </main>
  );
}
