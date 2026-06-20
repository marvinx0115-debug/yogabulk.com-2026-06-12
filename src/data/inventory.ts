// Inventory data for all product categories

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  stock: number;
  colors: string[];
  sizes: string[];
  moq: number;
  priceRange: { min: number; max: number };
  shippingDays: number;
  image: string;
  tags: string[];
}

export interface CategoryInventory {
  category: string;
  title: string;
  description: string;
  totalStock: number;
  items: InventoryItem[];
}

// Seamless Leggings Inventory
export const seamlessLeggingsInventory: CategoryInventory = {
  category: "seamless-leggings",
  title: "Seamless Leggings Inventory",
  description: "High-waist seamless leggings with 4-way stretch. Ready to ship from our warehouse.",
  totalStock: 15847,
  items: [
    {
      id: "sl-001",
      name: "Seamless Ribbed Leggings",
      sku: "SL-RB-001",
      stock: 3245,
      colors: ["Black", "Mocha", "Olive", "Wine", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 4.50, max: 6.80 },
      shippingDays: 3,
      image: "/images/products/seamless-ribbed-leggings.webp",
      tags: ["bestseller", "viral", "tiktok"]
    },
    {
      id: "sl-002",
      name: "Scrunch Butt Lifting Leggings",
      sku: "SL-SC-002",
      stock: 2890,
      colors: ["Black", "Grey", "Pink", "Purple", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      moq: 30,
      priceRange: { min: 5.20, max: 7.50 },
      shippingDays: 3,
      image: "/images/products/scrunch-butt-leggings.webp",
      tags: ["bestseller", "viral", "amazon"]
    },
    {
      id: "sl-003",
      name: "Honeycomb Textured Leggings",
      sku: "SL-HC-003",
      stock: 2156,
      colors: ["Black", "Beige", "Brown", "Green"],
      sizes: ["S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 4.80, max: 7.20 },
      shippingDays: 5,
      image: "/images/products/honeycomb-leggings.webp",
      tags: ["trending"]
    },
    {
      id: "sl-004",
      name: "High-Waist V-Cross Leggings",
      sku: "SL-VC-004",
      stock: 1876,
      colors: ["Black", "Grey", "Navy", "Burgundy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 5.50, max: 8.00 },
      shippingDays: 5,
      image: "/images/products/vcross-leggings.webp",
      tags: ["new"]
    },
    {
      id: "sl-005",
      name: "Flare Yoga Pants",
      sku: "SL-FL-005",
      stock: 1567,
      colors: ["Black", "Grey", "Brown", "Olive"],
      sizes: ["S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 6.50, max: 9.50 },
      shippingDays: 5,
      image: "/images/products/flare-pants.webp",
      tags: ["trending", "viral"]
    },
    {
      id: "sl-006",
      name: "Seamless Contour Leggings",
      sku: "SL-CT-006",
      stock: 1234,
      colors: ["Black", "Mocha", "Caramel", "Chocolate"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      moq: 30,
      priceRange: { min: 5.80, max: 8.50 },
      shippingDays: 7,
      image: "/images/products/contour-leggings.webp",
      tags: ["new"]
    },
    {
      id: "sl-007",
      name: "Ribbed Flare Leggings",
      sku: "SL-RF-007",
      stock: 987,
      colors: ["Black", "Grey", "Taupe"],
      sizes: ["S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 6.80, max: 9.80 },
      shippingDays: 7,
      image: "/images/products/ribbed-flare.webp",
      tags: ["trending"]
    },
    {
      id: "sl-008",
      name: "Butter Soft Lounge Leggings",
      sku: "SL-BS-008",
      stock: 1892,
      colors: ["Black", "Grey", "Pink", "Lavender", "Mint"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 4.20, max: 6.50 },
      shippingDays: 3,
      image: "/images/products/butter-soft.webp",
      tags: ["bestseller"]
    }
  ]
};

// Sports Bras Inventory
export const sportsBrasInventory: CategoryInventory = {
  category: "sports-bras",
  title: "Sports Bras Inventory",
  description: "High-support sports bras for all activities. Seamless and padded options available.",
  totalStock: 12456,
  items: [
    {
      id: "sb-001",
      name: "Seamless Sports Bra",
      sku: "SB-SS-001",
      stock: 2856,
      colors: ["Black", "White", "Grey", "Pink", "Purple"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 3.80, max: 5.50 },
      shippingDays: 3,
      image: "/images/products/seamless-sports-bra.webp",
      tags: ["bestseller"]
    },
    {
      id: "sb-002",
      name: "Ribbed High-Neck Sports Bra",
      sku: "SB-RH-002",
      stock: 2134,
      colors: ["Black", "Mocha", "Olive", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 4.20, max: 6.20 },
      shippingDays: 3,
      image: "/images/products/ribbed-high-neck.webp",
      tags: ["trending", "viral"]
    },
    {
      id: "sb-003",
      name: "Padded Cross-Back Bra",
      sku: "SB-CB-003",
      stock: 1876,
      colors: ["Black", "Grey", "Blue", "Red"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      moq: 30,
      priceRange: { min: 4.50, max: 6.80 },
      shippingDays: 5,
      image: "/images/products/cross-back-bra.webp",
      tags: ["high-support"]
    },
    {
      id: "sb-004",
      name: "Longline Sports Bra",
      sku: "SB-LL-004",
      stock: 1654,
      colors: ["Black", "White", "Beige", "Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 4.80, max: 7.20 },
      shippingDays: 5,
      image: "/images/products/longline-bra.webp",
      tags: ["trending"]
    },
    {
      id: "sb-005",
      name: "Strappy Back Sports Bra",
      sku: "SB-SB-005",
      stock: 1432,
      colors: ["Black", "Grey", "Purple", "Teal"],
      sizes: ["XS", "S", "M", "L"],
      moq: 30,
      priceRange: { min: 4.20, max: 6.50 },
      shippingDays: 5,
      image: "/images/products/strappy-bra.webp",
      tags: ["yoga", "pilates"]
    },
    {
      id: "sb-006",
      name: "Zip-Front High-Support Bra",
      sku: "SB-ZF-006",
      stock: 1234,
      colors: ["Black", "Grey", "Navy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      moq: 30,
      priceRange: { min: 5.50, max: 8.00 },
      shippingDays: 7,
      image: "/images/products/zip-front-bra.webp",
      tags: ["high-support", "running"]
    },
    {
      id: "sb-007",
      name: "Racerback Sports Bra",
      sku: "SB-RB-007",
      stock: 1270,
      colors: ["Black", "White", "Grey", "Pink", "Blue", "Green"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 3.50, max: 5.20 },
      shippingDays: 3,
      image: "/images/products/racerback-bra.webp",
      tags: ["bestseller", "basic"]
    }
  ]
};

// Matching Sets Inventory
export const matchingSetsInventory: CategoryInventory = {
  category: "matching-sets",
  title: "Matching Sets Inventory",
  description: "Coordinated leggings and sports bra sets. Perfect for boutiques and online stores.",
  totalStock: 8934,
  items: [
    {
      id: "ms-001",
      name: "Seamless Ribbed Set",
      sku: "MS-RB-001",
      stock: 2134,
      colors: ["Black", "Mocha", "Olive", "Wine", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 20,
      priceRange: { min: 8.50, max: 12.00 },
      shippingDays: 3,
      image: "/images/products/seamless-set.webp",
      tags: ["bestseller", "viral"]
    },
    {
      id: "ms-002",
      name: "Scrunch Butt Set",
      sku: "MS-SC-002",
      stock: 1876,
      colors: ["Black", "Grey", "Pink", "Purple"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 20,
      priceRange: { min: 9.50, max: 13.50 },
      shippingDays: 3,
      image: "/images/products/scrunch-set.webp",
      tags: ["bestseller", "tiktok"]
    },
    {
      id: "ms-003",
      name: "Contour Seamless Set",
      sku: "MS-CT-003",
      stock: 1432,
      colors: ["Black", "Mocha", "Caramel", "Chocolate"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      moq: 20,
      priceRange: { min: 10.50, max: 14.50 },
      shippingDays: 5,
      image: "/images/products/contour-set.webp",
      tags: ["trending"]
    },
    {
      id: "ms-004",
      name: "Flare Pants Set",
      sku: "MS-FL-004",
      stock: 1234,
      colors: ["Black", "Grey", "Brown", "Olive"],
      sizes: ["S", "M", "L", "XL"],
      moq: 20,
      priceRange: { min: 11.50, max: 16.00 },
      shippingDays: 5,
      image: "/images/products/flare-set.webp",
      tags: ["trending", "viral"]
    },
    {
      id: "ms-005",
      name: "Shorts & Bra Set",
      sku: "MS-SH-005",
      stock: 1123,
      colors: ["Black", "Grey", "Pink", "Blue", "Green"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 20,
      priceRange: { min: 7.50, max: 10.50 },
      shippingDays: 3,
      image: "/images/products/shorts-set.webp",
      tags: ["summer", "gym"]
    },
    {
      id: "ms-006",
      name: "Longline Bra & Leggings Set",
      sku: "MS-LL-006",
      stock: 1135,
      colors: ["Black", "White", "Beige", "Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 20,
      priceRange: { min: 9.80, max: 13.80 },
      shippingDays: 5,
      image: "/images/products/longline-set.webp",
      tags: ["yoga", "pilates"]
    }
  ]
};

// Jumpsuits Inventory
export const jumpsuitsInventory: CategoryInventory = {
  category: "jumpsuits",
  title: "Jumpsuits & Rompers Inventory",
  description: "One-piece activewear jumpsuits and rompers. Trending styles for 2024-2025.",
  totalStock: 5623,
  items: [
    {
      id: "js-001",
      name: "Seamless Yoga Jumpsuit",
      sku: "JS-SY-001",
      stock: 1456,
      colors: ["Black", "Mocha", "Olive", "Navy"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 9.50, max: 13.50 },
      shippingDays: 5,
      image: "/images/products/yoga-jumpsuit.webp",
      tags: ["bestseller", "viral"]
    },
    {
      id: "js-002",
      name: "Ribbed Flare Jumpsuit",
      sku: "JS-RF-002",
      stock: 1234,
      colors: ["Black", "Grey", "Brown", "Taupe"],
      sizes: ["S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 11.50, max: 16.00 },
      shippingDays: 5,
      image: "/images/products/flare-jumpsuit.webp",
      tags: ["trending"]
    },
    {
      id: "js-003",
      name: "Short Romper",
      sku: "JS-SR-003",
      stock: 987,
      colors: ["Black", "Grey", "Pink", "Blue"],
      sizes: ["XS", "S", "M", "L"],
      moq: 30,
      priceRange: { min: 8.50, max: 12.00 },
      shippingDays: 5,
      image: "/images/products/short-romper.webp",
      tags: ["summer", "gym"]
    },
    {
      id: "js-004",
      name: "Contour Jumpsuit",
      sku: "JS-CJ-004",
      stock: 876,
      colors: ["Black", "Mocha", "Caramel"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 10.50, max: 14.50 },
      shippingDays: 7,
      image: "/images/products/contour-jumpsuit.webp",
      tags: ["new"]
    },
    {
      id: "js-005",
      name: "Zip-Front Jumpsuit",
      sku: "JS-ZF-005",
      stock: 654,
      colors: ["Black", "Grey", "Navy"],
      sizes: ["S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 12.50, max: 17.50 },
      shippingDays: 7,
      image: "/images/products/zip-jumpsuit.webp",
      tags: ["trending"]
    },
    {
      id: "js-006",
      name: "Halter Neck Jumpsuit",
      sku: "JS-HN-006",
      stock: 416,
      colors: ["Black", "White", "Beige"],
      sizes: ["XS", "S", "M", "L"],
      moq: 30,
      priceRange: { min: 10.80, max: 15.00 },
      shippingDays: 7,
      image: "/images/products/halter-jumpsuit.webp",
      tags: ["yoga", "pilates"]
    }
  ]
};

// Gym Shorts Inventory
export const gymShortsInventory: CategoryInventory = {
  category: "gym-shorts",
  title: "Gym Shorts & Biker Shorts Inventory",
  description: "High-waist biker shorts and gym shorts. Perfect for summer workouts and casual wear.",
  totalStock: 9876,
  items: [
    {
      id: "gs-001",
      name: "Butt Lifting Biker Shorts",
      sku: "GS-BL-001",
      stock: 2345,
      colors: ["Black", "Grey", "Pink", "Purple", "Blue"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      moq: 30,
      priceRange: { min: 3.80, max: 5.50 },
      shippingDays: 3,
      image: "/images/products/biker-shorts.webp",
      tags: ["bestseller", "viral"]
    },
    {
      id: "gs-002",
      name: "Seamless Biker Shorts",
      sku: "GS-SB-002",
      stock: 2134,
      colors: ["Black", "White", "Grey", "Navy", "Olive"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 3.50, max: 5.20 },
      shippingDays: 3,
      image: "/images/products/seamless-shorts.webp",
      tags: ["bestseller"]
    },
    {
      id: "gs-003",
      name: "Running Shorts with Liner",
      sku: "GS-RL-003",
      stock: 1654,
      colors: ["Black", "Grey", "Blue", "Pink"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 4.20, max: 6.00 },
      shippingDays: 5,
      image: "/images/products/running-shorts.webp",
      tags: ["running", "gym"]
    },
    {
      id: "gs-004",
      name: "High-Waist Gym Shorts",
      sku: "GS-HW-004",
      stock: 1432,
      colors: ["Black", "Grey", "Green", "Purple"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 3.20, max: 4.80 },
      shippingDays: 3,
      image: "/images/products/gym-shorts.webp",
      tags: ["basic", "gym"]
    },
    {
      id: "gs-005",
      name: "Scrunch Butt Shorts",
      sku: "GS-SC-005",
      stock: 1234,
      colors: ["Black", "Grey", "Pink", "Red"],
      sizes: ["XS", "S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 4.50, max: 6.50 },
      shippingDays: 5,
      image: "/images/products/scrunch-shorts.webp",
      tags: ["viral", "tiktok"]
    },
    {
      id: "gs-006",
      name: "Pleated Tennis Skirt",
      sku: "GS-PT-006",
      stock: 987,
      colors: ["Black", "White", "Navy", "Pink"],
      sizes: ["XS", "S", "M", "L"],
      moq: 30,
      priceRange: { min: 5.50, max: 7.80 },
      shippingDays: 5,
      image: "/images/products/tennis-skirt.webp",
      tags: ["trending", "tennis"]
    },
    {
      id: "gs-007",
      name: "Cargo Pocket Shorts",
      sku: "GS-CP-007",
      stock: 890,
      colors: ["Black", "Olive", "Khaki", "Grey"],
      sizes: ["S", "M", "L", "XL"],
      moq: 30,
      priceRange: { min: 4.80, max: 6.80 },
      shippingDays: 5,
      image: "/images/products/cargo-shorts.webp",
      tags: ["trending", "streetwear"]
    }
  ]
};

// All inventory categories
export const allInventory = [
  seamlessLeggingsInventory,
  sportsBrasInventory,
  matchingSetsInventory,
  jumpsuitsInventory,
  gymShortsInventory
];

// Total stock across all categories
export const totalInventoryStock = allInventory.reduce((sum, cat) => sum + cat.totalStock, 0);

// Get inventory by category slug
export function getInventoryByCategory(slug: string): CategoryInventory | undefined {
  return allInventory.find(inv => inv.category === slug);
}
