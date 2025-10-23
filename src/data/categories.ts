import type { Category } from "@/lib/types";
export const categoryTree: Category[] = [
  {
    id: "všetky-kategórie",
    title: "Všetky kategórie",
    slug: "všetky-kategórie",
    children: [
      {
        id: "iphone-15",
        title: "iPhone 15",
        slug: "iphone-15",
        icon: "/icons/categories/iphone/iphone12.jpg",
        children: [
          { id: "iphone-15-pro-max", title: "iPhone 15 Pro Max", slug: "iphone-15-pro-max", children: [] },
          { id: "iphone-15-pro", title: "iPhone 15 Pro", slug: "iphone-15-pro", children: [] },
          { id: "iphone-15-plus", title: "iPhone 15 Plus", slug: "iphone-15-plus", children: [] },
          { id: "iphone-15-standard", title: "iPhone 15", slug: "iphone-15-standard", children: [] },
        ],
      },
      {
        id: "apple-airPods",
        title: "Apple AirPods",
        slug: "apple-airPods",
        icon: "/icons/categories/apple-airpods.jpg",
        children: [
          { id: "airpods", title: "AirPods", slug: "airpods", children: [] },
          { id: "airpods-pro", title: "AirPods Pro", slug: "airpods-pro", children: [] },
          { id: "airpods-max", title: "AirPods Max", slug: "airpods-max", children: [] },
          { id: "airpods-plus", title: "AirPods Plus", slug: "airpods-plus", children: [] },
        ],
      },
      {
        id: "macbook",
        title: "Macbook",
        slug: "macbook",
        icon: "/icons/categories/mackbook.png",
        children: [
          { id: "m1", title: "MacBook Pro 13 (M1)", slug: "m1", children: [] },
          { id: "m1-pro", title: "MacBook Pro 14 (M1 Pro)", slug: "m1-pro", children: [] },
          { id: "m1-max", title: "M1 Max", slug: "m1-max", children: [] },
          { id: "m2", title: "M2", slug: "m2", children: [] },
          { id: "m2-pro", title: "M2 Pro", slug: "m2-pro", children: [] },
          { id: "m2-max", title: "M2 Max", slug: "m2-max", children: [] },
          { id: "m3", title: "M3", slug: "m3", children: [] },
          { id: "m3-pro", title: "M3 Pro", slug: "m3-pro", children: [] },
          { id: "m3-max", title: "M3 Max", slug: "m3-max", children: [] },
          { id: "m4", title: "M4", slug: "m4", children: [] },
          { id: "m4-pro", title: "M4 Pro", slug: "m4-pro", children: [] },
          { id: "m4-max", title: "M4 Max", slug: "m4-max", children: [] },
        ],
      },
      {
        id: "ipad",
        title: "iPad",
        slug: "ipad",
        icon: "/icons/categories/ipad.svg",
        children: [
          { id: "ipad-air", title: "iPad Air", slug: "ipad-air", children: [] },
          { id: "ipad-pro", title: "iPad Pro", slug: "ipad-pro", children: [] },
          { id: "ipad-mini", title: "iPad mini", slug: "ipad-mini", children: [] },
        ],
      },
      {
        id: "smartwatches",
        title: "Smart Watches",
        slug: "smartwatches",
        icon: "/icons/categories/watches.png",
        children: [
          { id: "apple-watch10", title: "Apple Watch Series 10", slug: "apple-watch10", children: [] },
          { id: "apple-watch-ultra2", title: "Apple Watch Ultra 2", slug: "apple-watch-ultra2", children: [] },
          { id: "samsung-galaxy-watch6", title: "Samsung Galaxy Watch 6", slug: "samsung-galaxy-watch6", children: [] },
          { id: "google-pixel-watch-3", title: "Google Pixel Watch 3", slug: "google-pixel-watch-3", children: [] },
          { id: "huawei-watch-gt-4", title: "Huawei Watch GT 4", slug: "huawei-watch-gt-4", children: [] },

        ],
      },
      {
        id: "príslušenstvo",
        title: "Príslušenstvo",
        slug: "príslušenstvo",
        icon: "/icons/categories/pris.svg",
        children: [
          { id: "mcdodo-charger", title: "Mcdodo Charger", slug: "mcdodo-charger", children: [] },
          { id: "mcdodo-typec-cable", title: "Mcdodo Type-C Cable", slug: "mcdodo-typec-cable", children: [] },
          { id: "joyroom-cable", title: "Joyroom Cable", slug: "joyroom-cable", children: [] },
          { id: "usb-charger", title: "USB Charger", slug: "usb-charger", children: [] },
          { id: "charging-stand", title: "Charging Stand", slug: "charging-stand", children: [] },
          { id: "airpods-case", title: "AirPods Case", slug: "airpods-case", children: [] },
          { id: "fast-charger", title: "Fast Charger", slug: "fast-charger", children: [] },

        ],
      },
      {
        id: "herná-zóna",
        title: "Herná zóna",
        slug: "herná-zóna",
        icon: "/icons/categories/herna.svg",
        children: [
          { id: "powerplay-zone", title: "PowerPlay Zone", slug: "powerplay-zone", children: [] },
          { id: "gameverse-arena", title: "GameVerse Arena", slug: "gameverse-arena", children: [] },
          { id: "pixel-battle-hub", title: "Pixel Battle Hub", slug: "pixel-battle-hub", children: [] },
        ],
      },
      {
        id: "smartspeaker",
        title: "Smart Speaker",
        slug: "smartspeaker",
        icon: "/icons/categories/speaker.png",
        children: [
          { id: "soundmax-pro", title: "SoundMax Pro", slug: "soundmax-pro", children: [] },
          { id: "bassboom-mini", title: "BassBoom Mini", slug: "bassboom-mini", children: [] },
          { id: "echowave-360", title: "EchoWave 360", slug: "echowave-360", children: [] },
        ],
      },
      {
        id: "pc",
        title: "PC",
        slug: "pc",
        icon: "/icons/categories/pc.png",
        children: [
          { id: "ultracore-x1", title: "UltraCore X1", slug: "ultracore-x1", children: [] },
          { id: "nitrotech-g5", title: "NitroTech G5", slug: "nitrotech-g5", children: [] },
          { id: "visionpro-z3", title: "VisionPro Z3", slug: "visionpro-z3", children: [] },
        ],
      },
      {
        id: "elektronika",
        title: "Elektronika",
        slug: "elektronika",
        icon: "/icons/categories/elektronika.svg",
        children: [
          { id: "electrohub", title: "ElectroHub", slug: "electrohub", children: [] },
          { id: "technova", title: "TechNova", slug: "technova", children: [] },
          { id: "powerlink", title: "PowerLink", slug: "powerlink", children: [] },
        ],
      },
    ],
  },
  {
    "id": "iphone",
    "title": "iPhone",
    "slug": "iphone",
    "children": [
      {
        "id": "iphone-11",
        "title": "iPhone 11",
        "slug": "iphone-11",
        "icon": "/icons/categories/iphone/iphone.jpg",
        "children": [
          { "id": "iphone-11", "title": "iPhone 11", "slug": "iphone-11", "children": [] },
          { "id": "iphone-11-pro", "title": "iPhone 11 Pro", "slug": "iphone-11-pro", "children": [] },
          { "id": "iphone-11-pro-max", "title": "iPhone 11 Pro Max", "slug": "iphone-11-pro-max", "children": [] }
        ]
      },
      {
        "id": "iphone-12",
        "title": "iPhone 12",
        "slug": "iphone-12",
        "icon": "/icons/categories/iphone/iphone12.jpg",
        "children": [
          { "id": "iphone-12", "title": "iPhone 12", "slug": "iphone-12", "children": [] },
          { "id": "iphone-12-pro", "title": "iPhone 12 Pro", "slug": "iphone-12-pro", "children": [] },
          { "id": "iphone-12-pro-max", "title": "iPhone 12 Pro Max", "slug": "iphone-12-pro-max", "children": [] }
        ]
      },
      {
        "id": "iphone-13",
        "title": "iPhone 13",
        "slug": "iphone-13",
        "icon": "/icons/categories/iphone/iphone.jpg",
        "children": [
          { "id": "iphone-13", "title": "iPhone 13", "slug": "iphone-13", "children": [] },
          { "id": "iphone-13-pro", "title": "iPhone 13 Pro", "slug": "iphone-13-pro", "children": [] },
          { "id": "iphone-13-pro-max", "title": "iPhone 13 Pro Max", "slug": "iphone-13-pro-max", "children": [] }
        ]
      },
      {
        "id": "iphone-14",
        "title": "iPhone 14",
        "slug": "iphone-14",
        "icon": "/icons/categories/iphone/iphone12.jpg",
        "children": [
          { "id": "iphone-14", "title": "iPhone 14", "slug": "iphone-14", "children": [] },
          { "id": "iphone-14-pro", "title": "iPhone 14 Pro", "slug": "iphone-14-pro", "children": [] },
          { "id": "iphone-14-pro-max", "title": "iPhone 14 Pro Max", "slug": "iphone-14-pro-max", "children": [] }
        ]
      },
      {
        "id": "iphone-15",
        "title": "iPhone 15",
        "slug": "iphone-15",
        "icon": "/icons/categories/iphone/iphone12.jpg",
        "children": [
          { "id": "iphone-15", "title": "iPhone 15", "slug": "iphone-15", "children": [] },
          { "id": "iphone-15-pro", "title": "iPhone 15 Pro", "slug": "iphone-15-pro", "children": [] },
          { "id": "iphone-15-pro-max", "title": "iPhone 15 Pro Max", "slug": "iphone-15-pro-max", "children": [] }
        ]
      }
    ]
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
        icon: "/icons/categories/airpods/airpods1.jpg",
        children: [
          { id: "airpods-pro-2", title: "AirPods Pro 2. generácia", slug: "airpods-pro-2", children: [] },
          { id: "airpods-pro-1", title: "AirPods Pro 1. generácia", slug: "airpods-pro-1", children: [] },
        ],
      },
      {
        id: "airpods-standard",
        title: "AirPods",
        slug: "airpods-standard",
        icon: "/icons/categories/airpods/airpods2.png",
        children: [
          { id: "airpods-3", title: "AirPods 3. generácia", slug: "airpods-3", children: [] },
          { id: "airpods-2", title: "AirPods 2. generácia", slug: "airpods-2", children: [] },
        ],
      },
      {
        id: "airpods-max",
        title: "AirPods Max",
        slug: "airpods-max",
        icon: "/icons/categories/airpods/airpods3.jpg",
        children: [{ id: "airpods-max-all", title: "Všetky farby", slug: "airpods-max-all", children: [] }],
      },
      {
        id: "airpods-max",
        title: "AirPods",
        slug: "airpods-max",
        icon: "/icons/categories/airpods/airpods.jpg",
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
        icon: "/icons/categories/mackbook/mackbook1.jpg",
        children: [
          { id: "macbook-air-15", title: 'MacBook Air 15"', slug: "macbook-air-15", children: [] },
          { id: "macbook-air-13", title: 'MacBook Air 13"', slug: "macbook-air-13", children: [] },
        ],
      },
      {
        id: "macbook-pro",
        title: "MacBook Pro",
        slug: "macbook-pro",
        icon: "/icons/categories/mackbook/mackbook2.jpg",
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
        icon: "/icons/categories/mackbook/mackbook3.jpg",
        children: [
          { id: "imac-24", title: 'iMac 24"', slug: "imac-24", children: [] },
          { id: "mac-mini", title: "Mac Mini", slug: "mac-mini", children: [] },
          { id: "mac-studio", title: "Mac Studio", slug: "mac-studio", children: [] },
          { id: "mac-pro", title: "Mac Pro", slug: "mac-pro", children: [] },
        ],
      },
      {
        id: "mac",
        title: "Mac",
        slug: "mac-desktop",
        icon: "/icons/categories/mackbook/mackbook4.jpg",
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
        icon: "/icons/categories/ipad/ipad1.jpg",
        children: [
          { id: "ipad-pro-12", title: 'iPad Pro 12.9"', slug: "ipad-pro-12", children: [] },
          { id: "ipad-pro-11", title: 'iPad Pro 11"', slug: "ipad-pro-11", children: [] },
        ],
      },
      {
        id: "ipad-air",
        title: "iPad Air",
        slug: "ipad-air",
        icon: "/icons/categories/ipad/ipad2.jpg",
        children: [{ id: "ipad-air-5", title: "iPad Air 5. generácia", slug: "ipad-air-5", children: [] }],
      },
      {
        id: "ipad-standard",
        title: "iPad",
        slug: "ipad-standard",
        icon: "/icons/categories/ipad/ipad3.jpg",
        children: [
          { id: "ipad-10", title: "iPad 10. generácia", slug: "ipad-10", children: [] },
          { id: "ipad-9", title: "iPad 9. generácia", slug: "ipad-9", children: [] },
        ],
      },
      {
        id: "ipad-mini",
        title: "iPad Mini",
        slug: "ipad-mini",
        icon: "/icons/categories/ipad/ipad4.jpg",
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
        icon: "/icons/categories/watches/watch1.jpg",
        children: [
          { id: "watch-series-9", title: "Apple Watch Series 9", slug: "watch-series-9", children: [] },
          { id: "watch-series-8", title: "Apple Watch Series 8", slug: "watch-series-8", children: [] },
        ],
      },
      {
        id: "apple-watch-ultra",
        title: "Apple Watch Ultra",
        slug: "apple-watch-ultra",
        icon: "/icons/categories/watches/watch2.jpg",
        children: [{ id: "watch-ultra-2", title: "Apple Watch Ultra 2", slug: "watch-ultra-2", children: [] }],
      },
      {
        id: "apple-watch-se",
        title: "Apple Watch SE",
        slug: "apple-watch-se",
        icon: "/icons/categories/watches/watch3.jpg",
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
        icon: "/icons/categories/accessories/ass1.jpg",
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
        icon: "/icons/categories/accessories/ass2.jpg",
        children: [
          { id: "lightning-cables", title: "Lightning káble", slug: "lightning-cables", children: [] },
          { id: "usb-c-cables", title: "USB-C káble", slug: "usb-c-cables", children: [] },
        ],
      },
      {
        id: "ochrana",
        title: "Ochranné prvky",
        slug: "ochrana",
        icon: "/icons/categories/accessories/ass3.jpg",
        children: [
          { id: "screen-protectors", title: "Ochranné sklá", slug: "screen-protectors", children: [] },
          { id: "cases", title: "Obaly", slug: "cases", children: [] },
        ],
      },
      {
        id: "charging-cable",
        title: "Charging Cable",
        slug: "charging-cable",
        icon: "/icons/categories/accessories/ass4.jpg",
        children: [
          { id: "screen-protectors", title: "Ochranné sklá", slug: "screen-protectors", children: [] },
          { id: "cases", title: "Obaly", slug: "cases", children: [] },
        ],
      },
      {
        id: "wireless-charger",
        title: "Wireless Charger",
        slug: "wireless-charger",
        icon: "/icons/categories/accessories/ass5.jpg",
        children: [
          { id: "screen-protectors", title: "Ochranné sklá", slug: "screen-protectors", children: [] },
          { id: "cases", title: "Obaly", slug: "cases", children: [] },
        ],
      },
      {
        id: "earphones",
        title: "Earphones",
        slug: "earphones",
        icon: "/icons/categories/accessories/ass6.jpg",
        children: [
          { id: "screen-protectors", title: "Ochranné sklá", slug: "screen-protectors", children: [] },
          { id: "cases", title: "Obaly", slug: "cases", children: [] },
        ],
      },
      {
        id: "power-adapter",
        title: "Power Adapter",
        slug: "power-adapter",
        icon: "/icons/categories/accessories/ass7.jpg",
        children: [
          { id: "screen-protectors", title: "Ochranné sklá", slug: "screen-protectors", children: [] },
          { id: "cases", title: "Obaly", slug: "cases", children: [] },
        ],
      },
      {
        id: "phone-holder",
        title: "Phone Holder",
        slug: "phone-holder",
        icon: "/icons/categories/accessories/ass8.jpg",
        children: [
          { id: "screen-protectors", title: "Ochranné sklá", slug: "screen-protectors", children: [] },
          { id: "cases", title: "Obaly", slug: "cases", children: [] },
        ],
      },
    ],
  },
  {
    id: "najpredávanejšie",
    title: "Najpredávanejšie",
    slug: "najpredávanejšie",
    children: [
      {
        id: "iphone-15",
        title: "iPhone 15",
        slug: "iphone-15",
        icon: "/icons/categories/iphone.svg",
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
        icon: "/icons/categories/iphone.svg",
        children: [
          { id: "iphone-14-pro-max", title: "iPhone 14 Pro Max", slug: "iphone-14-pro-max", children: [] },
          { id: "iphone-14-pro", title: "iPhone 14 Pro", slug: "iphone-14-pro", children: [] },
          { id: "iphone-14-plus", title: "iPhone 14 Plus", slug: "iphone-14-plus", children: [] },
          { id: "iphone-14-standard", title: "iPhone 14", slug: "iphone-14-standard", children: [] },
        ],
      },
      {
        id: "pro-0",
        title: "Pro 0",
        slug: "Pro-0",
        icon: "/icons/categories/iphone.svg",
        children: [
          { id: "iphone-cases", title: "Obaly a kryty", slug: "iphone-cases", children: [] },
          { id: "iphone-chargers", title: "Nabíjačky", slug: "iphone-chargers", children: [] },
          { id: "iphone-cables", title: "Káble", slug: "iphone-cables", children: [] },
        ],
      },
      {
        id: "pro-1",
        title: "Pro 1",
        slug: "pro-1",
        icon: "/icons/categories/iphone.svg",
        children: [
          { id: "iphone-cases", title: "Obaly a kryty", slug: "iphone-cases", children: [] },
          { id: "iphone-chargers", title: "Nabíjačky", slug: "iphone-chargers", children: [] },
          { id: "iphone-cables", title: "Káble", slug: "iphone-cables", children: [] },
        ],
      },
      {
        id: "pro-2",
        title: "Pro 2",
        slug: "pro-2",
        icon: "/icons/categories/iphone.svg",
        children: [
          { id: "iphone-cases", title: "Obaly a kryty", slug: "iphone-cases", children: [] },
          { id: "iphone-chargers", title: "Nabíjačky", slug: "iphone-chargers", children: [] },
          { id: "iphone-cables", title: "Káble", slug: "iphone-cables", children: [] },
        ],
      },
    ],
  },
];
