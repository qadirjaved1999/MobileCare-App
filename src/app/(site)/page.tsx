// src/app/(site)/page.tsx
import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryCard from "@/components/categories/CategoryCard";
import { buildCategoryHref } from "@/lib/routing";
import { categoryTree } from "@/data/categories";

function getTopCategories() {
  const root = categoryTree.find(n => n.slug === "všetky-kategórie");
  return root?.children ?? [];
}

export default function HomePage() {
  const categories = getTopCategories();

  return (
    <main className="container mx-auto px-4 sm:px-6 py-6 space-y-10">
      <HeroCarousel />
      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">Hlavné kategórie</h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map(c => (
          <CategoryCard
            key={c.slug}
            title={c.title}
            href={buildCategoryHref(c.slug)}  // → products page
            image={c.icon}
          />
        ))}
      </section>
    </main>
  );
}
