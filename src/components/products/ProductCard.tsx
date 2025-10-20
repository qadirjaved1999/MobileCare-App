"use client"; // required for interactive components (hooks)

import Image from "next/image";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/price";
import type { Product } from "@/lib/types";

/* ---------------------------------------------
   🛍️ ProductCard
   Displays product image, name, price, badges, and Add-to-Cart button
----------------------------------------------*/
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  // ✅ Adds product to cart with default quantity = 1
  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      product,
      quantity: 1,
    });
  };

  return (
    <article
      className={cn(
        "relative border rounded-xl bg-card overflow-hidden transition-shadow",
        "hover:shadow-lg focus-within:ring-2 focus-within:ring-primary"
      )}
      aria-labelledby={`product-${product.id}`}
    >
      {/* 🏷️ Badges — “Novinka” or “Výpredaj” */}
      {product.badges && product.badges.length > 0 && (
        <div className="absolute top-2 left-2 z-10 flex gap-1">
          {product.badges.map((badge) => (
            <Badge
              key={badge}
              className={cn(
                badge === "novinka" && "badge-new",
                badge === "vypredaj" && "badge-sale"
              )}
            >
              {badge === "novinka" ? "Novinka" : "Výpredaj"}
            </Badge>
          ))}
        </div>
      )}

      {/* 💜 Wishlist icon */}
      <button
        aria-label="Pridať do zoznamu želaní"
        className="absolute top-2 right-2 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Heart className="h-4 w-4" />
      </button>

      {/* 🖼️ Product image (Next.js Image component) */}
      <div className="aspect-square bg-muted relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* 📦 Product info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <h3 id={`product-${product.id}`} className="font-semibold mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* 🎨 Variants (e.g. color dots) */}
        {product.variants && product.variants.length > 0 && (
          <div className="flex gap-1 mb-3">
            {product.variants.slice(0, 4).map((variant) => (
              <div
                key={variant.id}
                title={variant.value}
                style={{ backgroundColor: variant.color }}
                className="w-5 h-5 rounded-full border border-border hover:border-foreground transition-colors cursor-pointer"
              />
            ))}
            {product.variants.length > 4 && (
              <div className="w-5 h-5 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground">
                +{product.variants.length - 4}
              </div>
            )}
          </div>
        )}

        {/* 💶 Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* 🛒 Add to Cart button */}
        <Button
          className="w-full"
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? "Pridať do košíka" : "Vypredané"}
        </Button>
      </div>
    </article>
  );
}
