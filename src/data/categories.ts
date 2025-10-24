import type { Category } from "@/lib/types";
export const categoryTree: Category[] = [
  // ____________comments iPhone______________
  {
    id: "iphone",
    title: "iPhone",
    slug: "iphone",
    children: [
      {
        id: "iphone-11",
        title: "iPhone 11",
        slug: "iphone-11",
        icon: "/icons/categories/iphone/iphone.jpg",
        children: [
          { id: "iphone-11-pro", title: "iPhone 11 Pro", slug: "iphone-11-pro", children: [] },
          { id: "iphone-11-pro-max", title: "iPhone 11 Pro Max", slug: "iphone-11-pro-max", children: [] },
        ],
      },
      {
        id: "iphone-12",
        title: "iPhone 12",
        slug: "iphone-12",
        icon: "/icons/categories/iphone/iphone12.jpg",
        children: [
          { id: "iphone-12-pro", title: "iPhone 12 Pro", slug: "iphone-12-pro", children: [] },
          { id: "iphone-12-pro-max", title: "iPhone 12 Pro Max", slug: "iphone-12-pro-max", children: [] },
        ],
      },
      {
        id: "iphone-13",
        title: "iPhone 13",
        slug: "iphone-13",
        icon: "/icons/categories/iphone/iphone.jpg",
        children: [
          { id: "iphone-13-pro", title: "iPhone 13 Pro", slug: "iphone-13-pro", children: [] },
          { id: "iphone-13-pro-max", title: "iPhone 13 Pro Max", slug: "iphone-13-pro-max", children: [] },
        ],
      },
      {
        id: "iphone-14",
        title: "iPhone 14",
        slug: "iphone-14",
        icon: "/icons/categories/iphone/iphone12.jpg",
        children: [
          { id: "iphone-14-pro", title: "iPhone 14 Pro", slug: "iphone-14-pro", children: [] },
          { id: "iphone-14-pro-max", title: "iPhone 14 Pro Max", slug: "iphone-14-pro-max", children: [] },
        ],
      },
      {
        id: "iphone-15",
        title: "iPhone 15",
        slug: "iphone-15",
        icon: "/icons/categories/iphone/iphone12.jpg",
        children: [
          { id: "iphone-15-pro", title: "iPhone 15 Pro", slug: "iphone-15-pro", children: [] },
          { id: "iphone-15-pro-max", title: "iPhone 15 Pro Max", slug: "iphone-15-pro-max", children: [] },
        ],
      },
    ],
  },
  // ____________comments Apple AirPods______________
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
        children: [
          { id: "airpods-max-all", title: "Všetky farby", slug: "airpods-max-all", children: [] },
        ],
      },
    ],
  },
  // ____________comments MacBook______________
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
          { id: "macbook-air-15", title: 'MacBook Air 15', slug: "macbook-air-15", children: [] },
          { id: "macbook-air-13", title: 'MacBook Air 13', slug: "macbook-air-13", children: [] },
        ],
      },
      {
        id: "macbook-pro",
        title: "MacBook Pro",
        slug: "macbook-pro",
        icon: "/icons/categories/mackbook/mackbook2.jpg",
        children: [
          { id: "macbook-pro-16", title: 'MacBook Pro 16', slug: "macbook-pro-16", children: [] },
          { id: "macbook-pro-14", title: 'MacBook Pro 14', slug: "macbook-pro-14", children: [] },
          { id: "macbook-pro-13", title: 'MacBook Pro 13', slug: "macbook-pro-13", children: [] },
        ],
      },
      {
        id: "mac-desktop",
        title: "iMac a Mac",
        slug: "mac-desktop",
        icon: "/icons/categories/mackbook/mackbook3.jpg",
        children: [
          { id: "imac-24", title: 'iMac 24', slug: "imac-24", children: [] },
          { id: "mac-mini", title: "Mac Mini", slug: "mac-mini", children: [] },
          { id: "mac-studio", title: "Mac Studio", slug: "mac-studio", children: [] },
          { id: "mac-pro", title: "Mac Pro", slug: "mac-pro", children: [] },
        ],
      },
    ],
  },
  // ____________comments iPad______________
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
          { id: "ipad-pro-12", title: 'iPad Pro 12', slug: "ipad-pro-12", children: [] },
          { id: "ipad-pro-11", title: 'iPad Pro 11', slug: "ipad-pro-11", children: [] },
        ],
      },
      {
        id: "ipad-air",
        title: "iPad Air",
        slug: "ipad-air",
        icon: "/icons/categories/ipad/ipad2.jpg",
        children: [
          { id: "ipad-air-5", title: "iPad Air 5. generácia", slug: "ipad-air-5", children: [] },
        ],
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
        children: [
          { id: "ipad-mini-6", title: "iPad Mini 6. generácia", slug: "ipad-mini-6", children: [] },
        ],
      },
    ],
  },
  // ____________comments Apple Watch______________
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
        icon: "/icons/categories/watches/watch1.jpg",
        children: [
          { id: "watch-ultra-2", title: "Apple Watch Ultra 2", slug: "watch-ultra-2", children: [] },
        ],
      },
      {
        id: "apple-watch-se",
        title: "Apple Watch SE",
        slug: "apple-watch-se",
        icon: "/icons/categories/watches/watch3.jpg",
        children: [
          { id: "watch-se-2", title: "Apple Watch SE 2. generácia", slug: "watch-se-2", children: [] },
        ],
      },
    ],
  },
  // ____________comments Príslušenstvo______________
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
    ],
  },
  // ____________comments Všetky kategórie______________
  {
    id: "všetky-kategórie",
    title: "Všetky kategórie",
    slug: "všetky-kategórie",
    children: [
      {
        id: "iphone",
        title: "iPhone",
        slug: "iphone",
        icon: "/icons/categories/iphone/iphone.jpg",
        children: [
          {
            id: "iphone-11",
            title: "iPhone 11",
            slug: "iphone-11",
            icon: "/icons/categories/iphone/iphone11.jpg",
            children: [
              { id: "iphone-11-base", title: "iPhone 11", slug: "iphone-11", children: [] },
              { id: "iphone-11-pro", title: "iPhone 11 Pro", slug: "iphone-11-pro", children: [] },
              { id: "iphone-11-pro-max", title: "iPhone 11 Pro Max", slug: "iphone-11-pro-max", children: [] },
            ],
          },
          {
            id: "iphone-12",
            title: "iPhone 12",
            slug: "iphone-12",
            icon: "/icons/categories/iphone/iphone12.jpg",
            children: [
              { id: "iphone-12-base", title: "iPhone 12", slug: "iphone-12", children: [] },
              { id: "iphone-12-pro", title: "iPhone 12 Pro", slug: "iphone-12-pro", children: [] },
              { id: "iphone-12-pro-max", title: "iPhone 12 Pro Max", slug: "iphone-12-pro-max", children: [] },
            ],
          },
          {
            id: "iphone-13",
            title: "iPhone 13",
            slug: "iphone-13",
            icon: "/icons/categories/iphone/iphone13.jpg",
            children: [
              { id: "iphone-13-base", title: "iPhone 13", slug: "iphone-13", children: [] },
              { id: "iphone-13-pro", title: "iPhone 13 Pro", slug: "iphone-13-pro", children: [] },
              { id: "iphone-13-pro-max", title: "iPhone 13 Pro Max", slug: "iphone-13-pro-max", children: [] },
            ],
          },
          {
            id: "iphone-14",
            title: "iPhone 14",
            slug: "iphone-14",
            icon: "/icons/categories/iphone/iphone14.jpg",
            children: [
              { id: "iphone-14-base", title: "iPhone 14", slug: "iphone-14", children: [] },
              { id: "iphone-14-pro", title: "iPhone 14 Pro", slug: "iphone-14-pro", children: [] },
              { id: "iphone-14-pro-max", title: "iPhone 14 Pro Max", slug: "iphone-14-pro-max", children: [] },
            ],
          },
          {
            id: "iphone-15",
            title: "iPhone 15",
            slug: "iphone-15",
            icon: "/icons/categories/iphone/iphone15.jpg",
            children: [
              { id: "iphone-15-base", title: "iPhone 15", slug: "iphone-15", children: [] },
              { id: "iphone-15-plus", title: "iPhone 15 Plus", slug: "iphone-15-plus", children: [] },
              { id: "iphone-15-pro", title: "iPhone 15 Pro", slug: "iphone-15-pro", children: [] },
              { id: "iphone-15-pro-max", title: "iPhone 15 Pro Max", slug: "iphone-15-pro-max", children: [] },
            ],
          },
        ],
      },
      {
        id: "apple-airpods-curated",
        title: "Apple AirPods",
        slug: "apple-airpods",
        icon: "/icons/categories/apple-airpods.jpg",
        children: [
          { id: "airpods", title: "AirPods", slug: "airpods", children: [] },
          { id: "airpods-pro", title: "AirPods Pro", slug: "airpods-pro", children: [] },
          { id: "airpods-max", title: "AirPods Max", slug: "airpods-max", children: [] },
        ],
      },
      {
        id: "macbook-curated",
        title: "MacBook",
        slug: "macbook",
        icon: "/icons/categories/mackbook.png",
        children: [
          { id: "m1", title: "M1", slug: "m1", children: [] },
          { id: "m2", title: "M2", slug: "m2", children: [] },
          { id: "m3", title: "M3", slug: "m3", children: [] },
          { id: "m4", title: "M4", slug: "m4", children: [] },
        ],
      },
      {
        id: "ipad-curated",
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
        id: "apple-watch",
        title: "Apple Watch",
        slug: "apple-watch",
        icon: "/images/categories/watches/watch1.jpg",
        children: [
          {
            id: "apple-watch-series-9",
            title: "Apple Watch Series 9",
            slug: "apple-watch-series-9",
            icon: "/images/categories/watches/watch2.jpg",
          },
          {
            id: "apple-watch-series-8",
            title: "Apple Watch Series 8",
            slug: "apple-watch-series-8",
            icon: "/images/categories/watches/watch3.jpg",
          },
          {
            id: "apple-watch-ultra-2",
            title: "Apple Watch Ultra 2",
            slug: "apple-watch-ultra-2",
            icon: "/images/categories/watches/watch4.jpg",
          },
          {
            id: "apple-watch-se-2",
            title: "Apple Watch SE (2. generácia)",
            slug: "apple-watch-se-2",
            icon: "/images/categories/watches/watch6.jpg",
          },
        ],
      },
      {
        id: "prislusenstvo-curated",
        title: "Príslušenstvo",
        slug: "prislusenstvo",
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
        id: "herna-zona-curated",
        title: "Herná zóna",
        slug: "herna-zona",
        icon: "/icons/categories/herna.svg",
        children: [
          { id: "powerplay-zone", title: "PowerPlay Zone", slug: "powerplay-zone", children: [] },
          { id: "gameverse-arena", title: "GameVerse Arena", slug: "gameverse-arena", children: [] },
          { id: "pixel-battle-hub", title: "Pixel Battle Hub", slug: "pixel-battle-hub", children: [] },
        ],
      },
      {
        id: "smartspeaker-curated",
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
        id: "pc-curated",
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
        id: "elektronika-curated",
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
  // ____________comments Smart Speaker______________
  {
    id: "smartspeaker",
    title: "Smart Speaker",
    slug: "smartspeaker",
    children: [
      { id: "soundmax-pro", title: "SoundMax Pro", slug: "soundmax-pro", children: [] },
      { id: "bassboom-mini", title: "BassBoom Mini", slug: "bassboom-mini", children: [] },
      { id: "echowave-360", title: "EchoWave 360", slug: "echowave-360", children: [] },
    ],
  },
  // ____________comments PC______________
  {
    id: "pc",
    title: "PC",
    slug: "pc",
    children: [
      { id: "ultracore-x1", title: "UltraCore X1", slug: "ultracore-x1", children: [] },
      { id: "nitrotech-g5", title: "NitroTech G5", slug: "nitrotech-g5", children: [] },
      { id: "visionpro-z3", title: "VisionPro Z3", slug: "visionpro-z3", children: [] },
    ],
  },
  // ____________comments Elektronika______________
  {
    id: "elektronika",
    title: "Elektronika",
    slug: "elektronika",
    children: [
      { id: "electrohub", title: "ElectroHub", slug: "electrohub", children: [] },
      { id: "technova", title: "TechNova", slug: "technova", children: [] },
      { id: "powerlink", title: "PowerLink", slug: "powerlink", children: [] },
    ],
  },
  // ____________comments Najpredávanejšie______________
  {
    id: "najpredavanejsie",
    title: "Najpredávanejšie",
    slug: "najpredavanejsie",
    children: [
      { id: "best-iphone", title: "Najpredávanejšie iPhone", slug: "best-iphone", children: [] },
      { id: "best-airpods", title: "Najpredávanejšie AirPods", slug: "best-airpods", children: [] },
      { id: "best-apple-watch", title: "Najpredávanejšie Apple Watch", slug: "best-apple-watch", children: [] },
    ],
  },
];
