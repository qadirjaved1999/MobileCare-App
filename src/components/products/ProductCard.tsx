"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/price";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

// __________Product Card Component__________
export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  // __________Add product to cart (qty 1)__________
  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      product,
      quantity: 1,
    });
  };

  return (
    // __________Wrapper__________
    <article
      className={cn("relative group bg-card overflow-hidden border rounded-lg")}
      aria-labelledby={`product-${product.id}`}
    >
      {/* __________Badges (Novinka / Výpredaj)__________ */}
      {product.badges && product.badges.length > 0 && (
        <div className="absolute top-2 left-2 z-10 flex gap-1">
          {product.badges.map((badge) => (
            <Badge
              key={badge}
              className={cn(
                badge === "novinka" && "badge-new",
                badge === "vypredaj" && "badge-sale"
              )}
              style={{ borderRadius: 0 }}
            >
              {badge === "novinka" ? "Novinka" : "Výpredaj"}
            </Badge>
          ))}
        </div>
      )}

      {/* __________Wishlist button__________ */}
      <button
        aria-label="Pridať do zoznamu želaní"
        className="absolute top-2 right-2 z-50 p-2 opacity-100 cursor-pointer"
      >
        <Image
          src="/icons/wishlist.svg"
          alt="wishlist"
          width={20}
          height={20}
          className="object-contain"
        />
      </button>

      {/* __________Product image__________ */}
      <div className="aspect-square relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>

      {/* __________Product info__________ */}
      <div className="p-4">
        <h3 id={`product-${product.id}`} className="font-semibold mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">{product.category}</p>

        {/* __________Variants (color dots)__________ */}
        {product.variants && product.variants.length > 0 ? (
          <div className="flex gap-1 mb-3">
            {product.variants.slice(0, 4).map((variant) => (
              <div
                key={variant.id}
                title={variant.value}
                style={{ backgroundColor: variant.color }}
                className="w-4 h-4 rounded-full border border-border hover:border-foreground transition-colors cursor-pointer"
              />
            ))}
            {product.variants.length > 4 && (
              <div className="w-4 h-4 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground">
                +{product.variants.length - 4}
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground mb-3">Single variant</p>
        )}

        {/* __________Price section__________ */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* __________Add to Cart button__________ */}
        <Button className="w-full" onClick={handleAddToCart} disabled={!product.inStock}>
          {product.inStock ? "Pridať do košíka" : "Vypredané"}
        </Button>
      </div>
    </article>
  );
}
