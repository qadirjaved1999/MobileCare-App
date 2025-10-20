import type { Category } from "@/lib/types";
export const categoryTree: Category[] = [
  {
    id: "iphone",
    title: "iPhone",
    slug: "iphone",
    children: [
      {
        id: "iphone-15",
        title: "iPhone 15",
        slug: "iphone-15",
        children: [
          { id: "iphone-15-pro-max", title: "iPhone 15 Pro Max", slug: "iphone-15-pro-max", children: [] },
          { id: "iphone-15-pro", title: "iPhone 15 Pro", slug: "iphone-15-pro", children: [] },
          { id: "iphone-15-plus", title: "iPhone 15 Plus", slug: "iphone-15-plus", children: [] },
          { id: "iphone-15-standard", title: "iPhone 15", slug: "iphone-15-standard", children: [] },
        ],
      },
      {
        id: "iphone-14",
        title: "iPhone 14",
        slug: "iphone-14",
        children: [
          { id: "iphone-14-pro-max", title: "iPhone 14 Pro Max", slug: "iphone-14-pro-max", children: [] },
          { id: "iphone-14-pro", title: "iPhone 14 Pro", slug: "iphone-14-pro", children: [] },
          { id: "iphone-14-plus", title: "iPhone 14 Plus", slug: "iphone-14-plus", children: [] },
          { id: "iphone-14-standard", title: "iPhone 14", slug: "iphone-14-standard", children: [] },
        ],
      },
      {
        id: "iphone-accessories",
        title: "Príslušenstvo",
        slug: "iphone-accessories",
        children: [
          { id: "iphone-cases", title: "Obaly a kryty", slug: "iphone-cases", children: [] },
          { id: "iphone-chargers", title: "Nabíjačky", slug: "iphone-chargers", children: [] },
          { id: "iphone-cables", title: "Káble", slug: "iphone-cables", children: [] },
        ],
      },
    ],
  },
  {
    id: "apple-airpods",
    title: "Apple AirPods",
    slug: "apple-airpods",
    children: [
      {
        id: "airpods-pro",
        title: "AirPods Pro",
        slug: "airpods-pro",
        children: [
          { id: "airpods-pro-2", title: "AirPods Pro 2. generácia", slug: "airpods-pro-2", children: [] },
          { id: "airpods-pro-1", title: "AirPods Pro 1. generácia", slug: "airpods-pro-1", children: [] },
        ],
      },
      {
        id: "airpods-standard",
        title: "AirPods",
        slug: "airpods-standard",
        children: [
          { id: "airpods-3", title: "AirPods 3. generácia", slug: "airpods-3", children: [] },
          { id: "airpods-2", title: "AirPods 2. generácia", slug: "airpods-2", children: [] },
        ],
      },
      {
        id: "airpods-max",
        title: "AirPods Max",
        slug: "airpods-max",
        children: [{ id: "airpods-max-all", title: "Všetky farby", slug: "airpods-max-all", children: [] }],
      },
    ],
  },
  {
    id: "macbook",
    title: "MacBook",
    slug: "macbook",
    children: [
      {
        id: "macbook-air",
        title: "MacBook Air",
        slug: "macbook-air",
        children: [
          { id: "macbook-air-15", title: 'MacBook Air 15"', slug: "macbook-air-15", children: [] },
          { id: "macbook-air-13", title: 'MacBook Air 13"', slug: "macbook-air-13", children: [] },
        ],
      },
      {
        id: "macbook-pro",
        title: "MacBook Pro",
        slug: "macbook-pro",
        children: [
          { id: "macbook-pro-16", title: 'MacBook Pro 16"', slug: "macbook-pro-16", children: [] },
          { id: "macbook-pro-14", title: 'MacBook Pro 14"', slug: "macbook-pro-14", children: [] },
          { id: "macbook-pro-13", title: 'MacBook Pro 13"', slug: "macbook-pro-13", children: [] },
        ],
      },
      {
        id: "mac-desktop",
        title: "iMac a Mac",
        slug: "mac-desktop",
        children: [
          { id: "imac-24", title: 'iMac 24"', slug: "imac-24", children: [] },
          { id: "mac-mini", title: "Mac Mini", slug: "mac-mini", children: [] },
          { id: "mac-studio", title: "Mac Studio", slug: "mac-studio", children: [] },
          { id: "mac-pro", title: "Mac Pro", slug: "mac-pro", children: [] },
        ],
      },
    ],
  },
  {
    id: "ipad",
    title: "iPad",
    slug: "ipad",
    children: [
      {
        id: "ipad-pro",
        title: "iPad Pro",
        slug: "ipad-pro",
        children: [
          { id: "ipad-pro-12", title: 'iPad Pro 12.9"', slug: "ipad-pro-12", children: [] },
          { id: "ipad-pro-11", title: 'iPad Pro 11"', slug: "ipad-pro-11", children: [] },
        ],
      },
      {
        id: "ipad-air",
        title: "iPad Air",
        slug: "ipad-air",
        children: [{ id: "ipad-air-5", title: "iPad Air 5. generácia", slug: "ipad-air-5", children: [] }],
      },
      {
        id: "ipad-standard",
        title: "iPad",
        slug: "ipad-standard",
        children: [
          { id: "ipad-10", title: "iPad 10. generácia", slug: "ipad-10", children: [] },
          { id: "ipad-9", title: "iPad 9. generácia", slug: "ipad-9", children: [] },
        ],
      },
      {
        id: "ipad-mini",
        title: "iPad Mini",
        slug: "ipad-mini",
        children: [{ id: "ipad-mini-6", title: "iPad Mini 6. generácia", slug: "ipad-mini-6", children: [] }],
      },
    ],
  },
  {
    id: "apple-watch",
    title: "Apple Watch",
    slug: "apple-watch",
    children: [
      {
        id: "apple-watch-series",
        title: "Apple Watch Series",
        slug: "apple-watch-series",
        children: [
          { id: "watch-series-9", title: "Apple Watch Series 9", slug: "watch-series-9", children: [] },
          { id: "watch-series-8", title: "Apple Watch Series 8", slug: "watch-series-8", children: [] },
        ],
      },
      {
        id: "apple-watch-ultra",
        title: "Apple Watch Ultra",
        slug: "apple-watch-ultra",
        children: [{ id: "watch-ultra-2", title: "Apple Watch Ultra 2", slug: "watch-ultra-2", children: [] }],
      },
      {
        id: "apple-watch-se",
        title: "Apple Watch SE",
        slug: "apple-watch-se",
        children: [{ id: "watch-se-2", title: "Apple Watch SE 2. generácia", slug: "watch-se-2", children: [] }],
      },
    ],
  },
  {
    id: "prislusenstvo",
    title: "Príslušenstvo",
    slug: "prislusenstvo",
    children: [
      {
        id: "nabijacky",
        title: "Nabíjačky",
        slug: "nabijacky",
        children: [
          { id: "wireless-chargers", title: "Bezdrôtové nabíjačky", slug: "wireless-chargers", children: [] },
          { id: "wall-chargers", title: "Sieťové nabíjačky", slug: "wall-chargers", children: [] },
          { id: "car-chargers", title: "Automobilové nabíjačky", slug: "car-chargers", children: [] },
        ],
      },
      {
        id: "cables",
        title: "Káble",
        slug: "cables",
        children: [
          { id: "lightning-cables", title: "Lightning káble", slug: "lightning-cables", children: [] },
          { id: "usb-c-cables", title: "USB-C káble", slug: "usb-c-cables", children: [] },
        ],
      },
      {
        id: "ochrana",
        title: "Ochranné prvky",
        slug: "ochrana",
        children: [
          { id: "screen-protectors", title: "Ochranné sklá", slug: "screen-protectors", children: [] },
          { id: "cases", title: "Obaly", slug: "cases", children: [] },
        ],
      },
    ],
  },
];
