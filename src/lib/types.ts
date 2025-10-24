// __________Category: single node in the tree__________
export interface Category {
  id: string;
  title: string;           
  slug: string;           
  children?: Category[];  
  parentId?: string;
  icon?: string;
  level?: number;          
}

// __________Product: main product model__________
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  variants?: ProductVariant[];
  badges?: ProductBadge[];
  inStock: boolean;
  categorySlugs?: string[]; 
}

// __________Variant: e.g. color or model__________
export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  color?: string;
}

// __________Badge labels shown on cards__________
export type ProductBadge = "novinka" | "vypredaj";

// __________Filter state used in FilterContext__________
export interface FilterState {
  priceMin: number;
  priceMax: number;
  brands: string[];
  devices: string[];
  models: string[];
}

// __________Cart item stored in CartContext__________
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedVariants?: { [key: string]: string };
}

// __________Navigation node for menus__________
export interface NavNode {
  id: string;
  name: string;
  href?: string;
  children?: NavNode[];
}
