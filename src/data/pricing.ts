// Wholesale pricing data for all product categories

export interface PricingTier {
  quantity: number;
  discount: string;
  description: string;
}

export interface ProductPricing {
  category: string;
  basePrice: number;
  tiers: {
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    savings: number;
    savingsPercent: string;
  }[];
}

export const pricingTiers: PricingTier[] = [
  { quantity: 50, discount: "5%", description: "Starter wholesale" },
  { quantity: 100, discount: "10%", description: "Small boutique" },
  { quantity: 300, discount: "15%", description: "Growing business" },
  { quantity: 500, discount: "20%", description: "Established brand" },
  { quantity: 1000, discount: "25%", description: "Volume buyer" }
];

// Seamless Leggings Pricing
export const seamlessLeggingsPricing: ProductPricing = {
  category: "Seamless Leggings",
  basePrice: 6.80,
  tiers: [
    { quantity: 50, unitPrice: 6.46, totalPrice: 323.00, savings: 17.00, savingsPercent: "5%" },
    { quantity: 100, unitPrice: 6.12, totalPrice: 612.00, savings: 68.00, savingsPercent: "10%" },
    { quantity: 300, unitPrice: 5.78, totalPrice: 1734.00, savings: 306.00, savingsPercent: "15%" },
    { quantity: 500, unitPrice: 5.44, totalPrice: 2720.00, savings: 680.00, savingsPercent: "20%" },
    { quantity: 1000, unitPrice: 5.10, totalPrice: 5100.00, savings: 1700.00, savingsPercent: "25%" }
  ]
};

// Sports Bras Pricing
export const sportsBrasPricing: ProductPricing = {
  category: "Sports Bras",
  basePrice: 5.50,
  tiers: [
    { quantity: 50, unitPrice: 5.23, totalPrice: 261.50, savings: 13.50, savingsPercent: "5%" },
    { quantity: 100, unitPrice: 4.95, totalPrice: 495.00, savings: 55.00, savingsPercent: "10%" },
    { quantity: 300, unitPrice: 4.68, totalPrice: 1404.00, savings: 246.00, savingsPercent: "15%" },
    { quantity: 500, unitPrice: 4.40, totalPrice: 2200.00, savings: 550.00, savingsPercent: "20%" },
    { quantity: 1000, unitPrice: 4.13, totalPrice: 4125.00, savings: 1375.00, savingsPercent: "25%" }
  ]
};

// Matching Sets Pricing
export const matchingSetsPricing: ProductPricing = {
  category: "Matching Sets",
  basePrice: 12.00,
  tiers: [
    { quantity: 50, unitPrice: 11.40, totalPrice: 570.00, savings: 30.00, savingsPercent: "5%" },
    { quantity: 100, unitPrice: 10.80, totalPrice: 1080.00, savings: 120.00, savingsPercent: "10%" },
    { quantity: 300, unitPrice: 10.20, totalPrice: 3060.00, savings: 540.00, savingsPercent: "15%" },
    { quantity: 500, unitPrice: 9.60, totalPrice: 4800.00, savings: 1200.00, savingsPercent: "20%" },
    { quantity: 1000, unitPrice: 9.00, totalPrice: 9000.00, savings: 3000.00, savingsPercent: "25%" }
  ]
};

// Jumpsuits Pricing
export const jumpsuitsPricing: ProductPricing = {
  category: "Jumpsuits & Rompers",
  basePrice: 13.50,
  tiers: [
    { quantity: 50, unitPrice: 12.83, totalPrice: 641.50, savings: 33.50, savingsPercent: "5%" },
    { quantity: 100, unitPrice: 12.15, totalPrice: 1215.00, savings: 135.00, savingsPercent: "10%" },
    { quantity: 300, unitPrice: 11.48, totalPrice: 3443.00, savings: 606.00, savingsPercent: "15%" },
    { quantity: 500, unitPrice: 10.80, totalPrice: 5400.00, savings: 1350.00, savingsPercent: "20%" },
    { quantity: 1000, unitPrice: 10.13, totalPrice: 10125.00, savings: 3375.00, savingsPercent: "25%" }
  ]
};

// Gym Shorts Pricing
export const gymShortsPricing: ProductPricing = {
  category: "Gym Shorts & Biker Shorts",
  basePrice: 5.50,
  tiers: [
    { quantity: 50, unitPrice: 5.23, totalPrice: 261.50, savings: 13.50, savingsPercent: "5%" },
    { quantity: 100, unitPrice: 4.95, totalPrice: 495.00, savings: 55.00, savingsPercent: "10%" },
    { quantity: 300, unitPrice: 4.68, totalPrice: 1404.00, savings: 246.00, savingsPercent: "15%" },
    { quantity: 500, unitPrice: 4.40, totalPrice: 2200.00, savings: 550.00, savingsPercent: "20%" },
    { quantity: 1000, unitPrice: 4.13, totalPrice: 4125.00, savings: 1375.00, savingsPercent: "25%" }
  ]
};

// All pricing data
export const allPricing = [
  seamlessLeggingsPricing,
  sportsBrasPricing,
  matchingSetsPricing,
  jumpsuitsPricing,
  gymShortsPricing
];

// Shipping costs by region
export const shippingCosts = {
  usa: {
    express: { name: "DHL/FedEx Express", days: "3-5", costPerKg: 8.50 },
    standard: { name: "Air Freight", days: "7-10", costPerKg: 5.50 },
    sea: { name: "Sea Freight", days: "25-35", costPerKg: 2.50 }
  },
  uk: {
    express: { name: "DHL Express", days: "3-5", costPerKg: 9.00 },
    standard: { name: "Air Freight", days: "7-10", costPerKg: 6.00 },
    sea: { name: "Sea Freight", days: "30-40", costPerKg: 2.80 }
  },
  eu: {
    express: { name: "DHL Express", days: "3-5", costPerKg: 9.50 },
    standard: { name: "Air Freight", days: "7-12", costPerKg: 6.50 },
    sea: { name: "Sea Freight", days: "30-45", costPerKg: 3.00 }
  },
  australia: {
    express: { name: "DHL Express", days: "4-6", costPerKg: 10.00 },
    standard: { name: "Air Freight", days: "8-12", costPerKg: 7.00 },
    sea: { name: "Sea Freight", days: "20-30", costPerKg: 2.50 }
  },
  canada: {
    express: { name: "DHL Express", days: "3-5", costPerKg: 9.00 },
    standard: { name: "Air Freight", days: "7-10", costPerKg: 6.00 },
    sea: { name: "Sea Freight", days: "25-35", costPerKg: 2.80 }
  }
};

// Calculate estimated shipping cost
export function calculateShipping(weightKg: number, region: keyof typeof shippingCosts, method: 'express' | 'standard' | 'sea') {
  const cost = shippingCosts[region][method];
  return {
    method: cost.name,
    days: cost.days,
    cost: (weightKg * cost.costPerKg).toFixed(2),
    costPerKg: cost.costPerKg
  };
}
