// src/lib/types.ts
// 🧩 Centralized type definitions for the Mobilecare Next.js app
// These interfaces are shared across contexts, data files, and UI components.

/* ---------------------------------------------
   🗂️ Category
   Represents one node in the category tree.
   Used in: categoryTree, ThreeLevelSidebar, and dynamic routing.
----------------------------------------------*/
export interface Category {
  id: string;
  title: string;           // 👈 matches your data
  slug: string;
  children?: Category[];   // nested nodes
  parentId?: string;
  icon?: string;
  level?: number;          // 👈 optional; compute if you need it
}

/* ---------------------------------------------
   🛍️ Product
   Represents a product displayed in grid and cart.
----------------------------------------------*/
export interface Product {
  id: string;                       // unique product ID
  name: string;                     // product title
  slug: string;                     // product URL slug
  price: number;                    // current price
  originalPrice?: number;           // crossed-out price if discounted
  image: string;                    // product image path (/public)
  category: string;                 // category name (for filtering)
  brand: string;                    // brand name (e.g. "Apple")
  variants?: ProductVariant[];      // available options (color, size, etc.)
  badges?: ProductBadge[];          // tags like "novinka" or "vypredaj"
  inStock: boolean;                 // true if available for purchase
}

/* ---------------------------------------------
   🎨 ProductVariant
   Describes a single selectable variant (e.g. color or model).
----------------------------------------------*/
export interface ProductVariant {
  id: string;           // variant ID
  name: string;         // e.g. "Farba"
  value: string;        // e.g. "Titan modrá"
  color?: string;       // optional HEX color (used for swatches)
}

/* ---------------------------------------------
   🏷️ ProductBadge
   Standardized labels shown on product cards.
----------------------------------------------*/
export type ProductBadge = "novinka" | "vypredaj";

/* ---------------------------------------------
   🔍 FilterState
   Defines all active filters in FilterContext.
----------------------------------------------*/
export interface FilterState {
  priceMin: number;     // minimum selected price
  priceMax: number;     // maximum selected price
  brands: string[];     // selected brands (e.g. ["Apple","Samsung"])
  devices: string[];    // selected device categories
  models: string[];     // selected product models
}

/* ---------------------------------------------
   🛒 CartItem
   Represents a single product stored in CartContext.
----------------------------------------------*/
export interface CartItem {
  productId: string;                    // unique product reference
  product: Product;                     // full product object
  quantity: number;                     // number of units in cart
  selectedVariants?: { [key: string]: string }; // chosen variant values (e.g. { Farba: "Titan modrá" })
}

/* ---------------------------------------------
   🧭 NavNode
   Used for building navigation menus and hierarchical routes.
----------------------------------------------*/
export interface NavNode {
  id: string;              // unique node ID
  name: string;            // display label
  href?: string;           // optional link path
  children?: NavNode[];    // nested menu items
}
