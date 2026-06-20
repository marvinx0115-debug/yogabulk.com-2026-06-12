// MOQ (Minimum Order Quantity) data for all product types

export interface MOQItem {
  productType: string;
  stockMoq: number;
  customMoq: number;
  customDesignMoq: number;
  sampleAvailable: boolean;
  samplePrice: number;
  sampleLeadTime: string;
  bulkLeadTime: string;
  notes: string;
}

export const moqData: MOQItem[] = [
  {
    productType: "Seamless Leggings",
    stockMoq: 30,
    customMoq: 100,
    customDesignMoq: 300,
    sampleAvailable: true,
    samplePrice: 15.00,
    sampleLeadTime: "3-5 days",
    bulkLeadTime: "7-15 days",
    notes: "Mix colors and sizes allowed for stock MOQ. Custom colors require 100pcs per color."
  },
  {
    productType: "Sports Bras",
    stockMoq: 30,
    customMoq: 100,
    customDesignMoq: 300,
    sampleAvailable: true,
    samplePrice: 12.00,
    sampleLeadTime: "3-5 days",
    bulkLeadTime: "7-15 days",
    notes: "Mix colors and sizes allowed. Padded bras have same MOQ as non-padded."
  },
  {
    productType: "Matching Sets",
    stockMoq: 20,
    customMoq: 100,
    customDesignMoq: 300,
    sampleAvailable: true,
    samplePrice: 25.00,
    sampleLeadTime: "3-5 days",
    bulkLeadTime: "10-18 days",
    notes: "Set = 1 top + 1 bottom. Lower MOQ because sets sell faster."
  },
  {
    productType: "Jumpsuits & Rompers",
    stockMoq: 30,
    customMoq: 150,
    customDesignMoq: 400,
    sampleAvailable: true,
    samplePrice: 28.00,
    sampleLeadTime: "5-7 days",
    bulkLeadTime: "12-20 days",
    notes: "Higher MOQ due to complex construction. Custom designs require pattern development."
  },
  {
    productType: "Gym Shorts",
    stockMoq: 30,
    customMoq: 100,
    customDesignMoq: 300,
    sampleAvailable: true,
    samplePrice: 10.00,
    sampleLeadTime: "3-5 days",
    bulkLeadTime: "7-15 days",
    notes: "Biker shorts and running shorts same MOQ. Tennis skirts slightly higher at 50pcs."
  },
  {
    productType: "Yoga Tops",
    stockMoq: 30,
    customMoq: 100,
    customDesignMoq: 300,
    sampleAvailable: true,
    samplePrice: 12.00,
    sampleLeadTime: "3-5 days",
    bulkLeadTime: "7-15 days",
    notes: "Crop tops, tank tops, and long sleeve same MOQ."
  },
  {
    productType: "Hoodies & Jackets",
    stockMoq: 50,
    customMoq: 150,
    customDesignMoq: 400,
    sampleAvailable: true,
    samplePrice: 35.00,
    sampleLeadTime: "5-7 days",
    bulkLeadTime: "15-25 days",
    notes: "Higher MOQ due to heavier fabric and more complex construction."
  },
  {
    productType: "Accessories",
    stockMoq: 100,
    customMoq: 300,
    customDesignMoq: 500,
    sampleAvailable: true,
    samplePrice: 8.00,
    sampleLeadTime: "3-5 days",
    bulkLeadTime: "10-15 days",
    notes: "Resistance bands, yoga mats, headbands. Higher MOQ due to low unit price."
  }
];

// MOQ comparison by buyer type
export const moqByBuyerType = [
  {
    buyerType: "First-time Buyer",
    recommendedMoq: "30-50 pieces",
    mixColors: true,
    mixSizes: true,
    paymentTerms: "100% upfront or PayPal",
    notes: "Start small to test quality and market response"
  },
  {
    buyerType: "Boutique Owner",
    recommendedMoq: "50-100 pieces",
    mixColors: true,
    mixSizes: true,
    paymentTerms: "50% deposit, 50% before shipping",
    notes: "Good balance of inventory and cash flow"
  },
  {
    buyerType: "Amazon FBA Seller",
    recommendedMoq: "100-300 pieces",
    mixColors: true,
    mixSizes: true,
    paymentTerms: "50% deposit, 50% before shipping",
    notes: "Need inventory buffer for FBA requirements"
  },
  {
    buyerType: "TikTok Shop Seller",
    recommendedMoq: "50-200 pieces",
    mixColors: true,
    mixSizes: true,
    paymentTerms: "50% deposit, 50% before shipping",
    notes: "Test viral potential with smaller batches"
  },
  {
    buyerType: "Shopify Dropshipper",
    recommendedMoq: "30-100 pieces",
    mixColors: true,
    mixSizes: true,
    paymentTerms: "100% upfront for small orders",
    notes: "Start with our dropshipping program (no MOQ)"
  },
  {
    buyerType: "Wholesale Distributor",
    recommendedMoq: "500-1000+ pieces",
    mixColors: true,
    mixSizes: true,
    paymentTerms: "30% deposit, 70% before shipping",
    notes: "Volume discounts available. Contact for custom pricing."
  }
];

// Customization MOQ
export const customizationMoq = {
  heatTransfer: {
    name: "Heat Transfer Logo",
    moq: 50,
    pricePerPiece: 0.50,
    setupFee: 30,
    leadTime: "2-3 days"
  },
  embroidery: {
    name: "Embroidery",
    moq: 100,
    pricePerPiece: 1.20,
    setupFee: 50,
    leadTime: "3-5 days"
  },
  silicone: {
    name: "Silicone Print",
    moq: 100,
    pricePerPiece: 0.80,
    setupFee: 40,
    leadTime: "3-5 days"
  },
  screenPrint: {
    name: "Screen Print",
    moq: 200,
    pricePerPiece: 0.40,
    setupFee: 60,
    leadTime: "5-7 days"
  },
  wovenLabel: {
    name: "Woven Label",
    moq: 500,
    pricePerPiece: 0.15,
    setupFee: 80,
    leadTime: "7-10 days"
  },
  hangTag: {
    name: "Hang Tag",
    moq: 1000,
    pricePerPiece: 0.10,
    setupFee: 50,
    leadTime: "5-7 days"
  }
};
