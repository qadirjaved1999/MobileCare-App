// app/page.tsx
import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryCard from "@/components/categories/CategoryCard";
import { buildCategoryHref } from "@/lib/routing";
import { categoryTree } from "@/data/categories"; // <-- your data file

function getHomepageCategories() {
  // Use children under "všetky-kategórie"
  const root = categoryTree.find((n) => n.slug === "všetky-kategórie");
  return root?.children ?? [];

  // OR: show all top-level categories except the “všetky-kategórie” container
  // return categoryTree.filter((n) => n.slug !== "všetky-kategórie");
}

export default function HomePage() {
  const categories = getHomepageCategories();

  return (
    <main className="container mx-auto px-4 sm:px-6 py-6 space-y-10">
      <HeroCarousel />

      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">Hlavné kategórie</h1>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((c) => (
          <CategoryCard
            key={c.slug}
            title={c.title}
            href={buildCategoryHref(c.slug)} // parent level: /kategoria/<parent>
            image={c.icon}
          />
        ))}
      </section>
    </main>
  );
}
