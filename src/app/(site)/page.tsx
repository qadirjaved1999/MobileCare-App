import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">
              Nové iPhone 14 PRO s 20% zľavou
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Objavte najnovšie produkty Apple a prémiové príslušenstvo
            </p>
            <div className="flex gap-4">
              <Button size="lg">Zistiť viac</Button>
              <Button size="lg" variant="outline">
                Všetky produkty
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">Vypredaj</h3>
            <p className="text-muted-foreground mb-4">Zľavy až do 40%</p>
            <Button variant="outline">Zobraziť všetko</Button>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">Novinky</h3>
            <p className="text-muted-foreground mb-4">Najnovšie produkty</p>
            <Button variant="outline">Zobraziť všetko</Button>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-2">MC Servis</h3>
            <p className="text-muted-foreground mb-4">Profesionálny servis</p>
            <Button variant="outline">Zobraziť všetko</Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Odporúčané produkty</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
