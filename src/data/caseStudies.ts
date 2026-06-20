// Buyer case studies and success stories

export interface CaseStudy {
  id: string;
  buyerType: string;
  name: string;
  location: string;
  businessType: string;
  startedWith: string;
  currentVolume: string;
  timeline: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  avatar: string;
  products: string[];
}

export const amazonCases: CaseStudy[] = [
  {
    id: "amz-001",
    buyerType: "amazon-fba",
    name: "Sarah Mitchell",
    location: "Austin, Texas, USA",
    businessType: "Amazon FBA Seller",
    startedWith: "50 pieces of Seamless Ribbed Leggings",
    currentVolume: "3,000 pieces per month",
    timeline: "18 months",
    challenge: "Needed reliable supplier with consistent quality and fast restocking for Amazon FBA. Previous supplier had quality issues and long lead times.",
    solution: "Started with small test order of 50pcs. Quality exceeded expectations. Gradually increased order size. Now on monthly auto-replenishment schedule.",
    results: [
      "Grew from 50pcs to 3,000pcs/month in 18 months",
      "4.8-star average rating on Amazon",
      "Less than 1% return rate",
      "Featured in Amazon's 'Best Seller' category",
      "Profit margin increased from 35% to 52%"
    ],
    testimonial: "YogaBulk's consistent quality saved my Amazon business. Their seamless leggings are identical batch after batch, which is crucial for FBA. The custom packaging with my logo looks professional and customers love it.",
    avatar: "/images/cases/sarah-mitchell.jpg",
    products: ["Seamless Ribbed Leggings", "Scrunch Butt Leggings", "Matching Sets"]
  },
  {
    id: "amz-002",
    buyerType: "amazon-fba",
    name: "James Liu",
    location: "Vancouver, Canada",
    businessType: "Amazon FBA + Shopify",
    startedWith: "100 pieces mixed styles",
    currentVolume: "5,000 pieces per month",
    timeline: "24 months",
    challenge: "Wanted to build a brand, not just resell. Needed custom branding and reliable supply chain for multi-channel selling.",
    solution: "Worked with YogaBulk's design team to create custom color palette. Added woven labels and custom packaging. Used their product photos for Amazon listings.",
    results: [
      "Built 6-figure Amazon business",
      "Expanded to Shopify with same inventory",
      "Brand recognition in yoga community",
      "Repeat customer rate: 34%",
      "Average order value: $78"
    ],
    testimonial: "The custom branding options are game-changing. My customers think I'm a big brand, but I'm just one person working from home. YogaBulk makes me look professional.",
    avatar: "/images/cases/james-liu.jpg",
    products: ["Seamless Leggings", "Sports Bras", "Matching Sets", "Jumpsuits"]
  },
  {
    id: "amz-003",
    buyerType: "amazon-fba",
    name: "Emma Rodriguez",
    location: "Miami, Florida, USA",
    businessType: "Amazon FBA - Fitness Niche",
    startedWith: "200 pieces of Biker Shorts",
    currentVolume: "2,500 pieces per month",
    timeline: "12 months",
    challenge: "Competing in saturated fitness market. Needed unique products with fast shipping to win Buy Box.",
    solution: "Focused on trending styles (scrunch butt, flare pants) with fast turnaround. Used YogaBulk's 3-day shipping to maintain Prime eligibility.",
    results: [
      "Won Buy Box on 80% of listings",
      "Inventory turnover: 4x per month",
      "Zero stockouts during peak season",
      "Monthly revenue: $45,000+",
      "Best Seller Badge on 3 products"
    ],
    testimonial: "Speed is everything on Amazon. With YogaBulk's 3-day shipping, I can restock before I run out. My competitors wait 3-4 weeks from other suppliers.",
    avatar: "/images/cases/emma-rodriguez.jpg",
    products: ["Butt Lifting Biker Shorts", "Scrunch Butt Leggings", "Flare Yoga Pants"]
  }
];

export const tiktokCases: CaseStudy[] = [
  {
    id: "tt-001",
    buyerType: "tiktok-shop",
    name: "Chloe Zhang",
    location: "Los Angeles, California, USA",
    businessType: "TikTok Shop Creator",
    startedWith: "100 pieces of Honeycomb Leggings",
    currentVolume: "8,000 pieces per month",
    timeline: "8 months",
    challenge: "Needed viral-worthy products that look amazing on camera. Previous supplier's quality was inconsistent, leading to bad reviews.",
    solution: "Tested 5 different styles with YogaBulk. Honeycomb leggings went viral (2M views). Scaled quickly with their fast production.",
    results: [
      "One viral video: 2M views, 50K likes",
      "Sold 5,000 pieces in 2 weeks from one video",
      "Grew from 0 to 180K followers",
      "Monthly revenue: $120,000+",
      "Featured on TikTok's Creator Fund"
    ],
    testimonial: "The honeycomb texture looks incredible on camera - that's why my videos went viral. YogaBulk kept up with my crazy growth, shipping thousands of pieces within days.",
    avatar: "/images/cases/chloe-zhang.jpg",
    products: ["Honeycomb Textured Leggings", "Scrunch Butt Leggings", "Seamless Sets"]
  },
  {
    id: "tt-002",
    buyerType: "tiktok-shop",
    name: "Megan Foster",
    location: "London, UK",
    businessType: "TikTok Shop + Instagram",
    startedWith: "50 pieces of Flare Pants",
    currentVolume: "4,000 pieces per month",
    timeline: "10 months",
    challenge: "UK-based, needed supplier who understands European market and can handle customs smoothly.",
    solution: "YogaBulk handled all customs documentation. Shipped DDP (Delivered Duty Paid) so no surprises. Products resonate with UK fashion trends.",
    results: [
      "Built 250K follower community",
      "Average 500K views per video",
      "Sold out 3 times in first 6 months",
      "Expanded to EU customers",
      "Monthly profit: £25,000+"
    ],
    testimonial: "As a UK seller, I was worried about importing from China. YogaBulk made it seamless - they handle customs, duties, everything. The flare pants are perfect for UK fashion trends.",
    avatar: "/images/cases/megan-foster.jpg",
    products: ["Flare Yoga Pants", "Ribbed Flare Leggings", "Matching Sets"]
  },
  {
    id: "tt-003",
    buyerType: "tiktok-shop",
    name: "Ava Johnson",
    location: "Sydney, Australia",
    businessType: "TikTok Shop - Yoga Niche",
    startedWith: "80 pieces of Seamless Sets",
    currentVolume: "3,500 pieces per month",
    timeline: "14 months",
    challenge: "Australian market is smaller, needed to find unique positioning. Also needed fast shipping to compete with local brands.",
    solution: "Positioned as 'affordable luxury' yoga wear. Used YogaBulk's premium seamless fabric. Fast 4-day shipping to Australia surprised customers.",
    results: [
      "#1 yoga wear seller on TikTok Shop AU",
      "95% customer satisfaction rate",
      "Average 4.9 star reviews",
      "Featured in Australian fitness magazines",
      "Monthly revenue: AUD $85,000+"
    ],
    testimonial: "Australians are willing to pay for quality, but expect fast delivery. YogaBulk's 4-day shipping to Sydney beats most local suppliers. My customers are shocked when their order arrives so quickly.",
    avatar: "/images/cases/ava-johnson.jpg",
    products: ["Seamless Ribbed Sets", "Sports Bras", "Yoga Jumpsuits"]
  }
];

export const boutiqueCases: CaseStudy[] = [
  {
    id: "bt-001",
    buyerType: "boutique-owners",
    name: "Rachel Kim",
    location: "Toronto, Canada",
    businessType: "Boutique Fitness Studio",
    startedWith: "30 pieces of Matching Sets",
    currentVolume: "200 pieces per month",
    timeline: "Ongoing for 2 years",
    challenge: "Small boutique studio needed branded merchandise but couldn't afford large MOQ. Also wanted unique colors not available elsewhere.",
    solution: "Started with just 30pcs MOQ. Added custom logo heat transfer. Ordered custom colors with 100pcs per color.",
    results: [
      "Studio merchandise now 25% of revenue",
      "Students wear branded gear everywhere - free marketing",
      "Custom colors exclusive to her studio",
      "Re-order every 6 weeks consistently",
      "Students love the quality vs. Lululemon"
    ],
    testimonial: "My students kept asking where I got my leggings. Now they all wear my branded sets. The quality is comparable to Lululemon at 1/4 the price. My studio has become a brand.",
    avatar: "/images/cases/rachel-kim.jpg",
    products: ["Matching Sets", "Sports Bras", "Seamless Leggings"]
  },
  {
    id: "bt-002",
    buyerType: "boutique-owners",
    name: "Sophie Laurent",
    location: "Paris, France",
    businessType: "Fashion Boutique",
    startedWith: "50 pieces curated collection",
    currentVolume: "350 pieces per month",
    timeline: "18 months",
    challenge: "European boutique needed unique activewear not available in local market. Wanted French sizing and premium packaging.",
    solution: "Curated collection of 5 exclusive styles. Custom French sizing labels. Premium gift boxes for boutique presentation.",
    results: [
      "Became top-selling category in boutique",
      "60% profit margin on activewear",
      "Customers travel from other cities to buy",
      "Featured in French fashion blog",
      "Monthly revenue: €12,000+ from activewear"
    ],
    testimonial: "French women are very particular about quality. YogaBulk's seamless collection rivals luxury brands at accessible prices. My customers feel they're getting a secret gem.",
    avatar: "/images/cases/sophie-laurent.jpg",
    products: ["Seamless Ribbed Leggings", "Flare Yoga Pants", "Luxe Matching Sets"]
  },
  {
    id: "bt-003",
    buyerType: "boutique-owners",
    name: "Maria Santos",
    location: "Barcelona, Spain",
    businessType: "Beach Boutique",
    startedWith: "40 pieces of summer styles",
    currentVolume: "280 pieces per month",
    timeline: "14 months",
    challenge: "Beach boutique needed lightweight, breathable activewear for Mediterranean climate. Wanted bright colors matching beach vibe.",
    solution: "Selected bright coral, turquoise, and sunshine yellow colors. Lightweight seamless fabric perfect for hot weather. Custom beach-themed tags.",
    results: [
      "Activewear sales exceeded swimwear",
      "Tourists buy as souvenirs and gifts",
      "Instagram-worthy colors drive social sharing",
      "Repeat tourist customers every summer",
      "35% of total boutique revenue"
    ],
    testimonial: "The bright colors are perfect for Barcelona's beach culture. Tourists love buying them as gifts - they pack small and everyone loves them. YogaBulk understood exactly what I needed.",
    avatar: "/images/cases/maria-santos.jpg",
    products: ["Seamless Shorts", "Sports Bras", "Beach Cover-ups"]
  }
];

export const shopifyCases: CaseStudy[] = [
  {
    id: "sp-001",
    buyerType: "shopify-dropshippers",
    name: "David Chen",
    location: "Singapore",
    businessType: "Shopify Dropshipping",
    startedWith: "Dropshipping (no MOQ)",
    currentVolume: "1,500 pieces per month",
    timeline: "16 months",
    challenge: "Started with dropshipping but wanted better margins and control over branding. Needed to transition to wholesale without inventory risk.",
    solution: "Used YogaBulk's dropshipping program to test products. Once validated, switched to wholesale for better margins. Added custom packaging.",
    results: [
      "Profit margin increased from 20% to 45%",
      "Custom packaging increased brand value",
      "Average order value increased 60%",
      "Customer retention improved 40%",
      "Monthly profit: $18,000+"
    ],
    testimonial: "Dropshipping let me test without risk. Once I knew what sold, switching to wholesale was easy. YogaBulk supported me through the entire journey.",
    avatar: "/images/cases/david-chen.jpg",
    products: ["Seamless Leggings", "Biker Shorts", "Sports Bras"]
  },
  {
    id: "sp-002",
    buyerType: "shopify-dropshippers",
    name: "Jessica Williams",
    location: "New York, USA",
    businessType: "Shopify Store - Athleisure",
    startedWith: "Test order of 20 pieces",
    currentVolume: "2,200 pieces per month",
    timeline: "20 months",
    challenge: "Competing in crowded athleisure market. Needed unique positioning and reliable supply chain for scaling.",
    solution: "Positioned as 'sustainable athleisure' using YogaBulk's recycled fabric options. Built email list with free yoga guides. Used blind dropshipping.",
    results: [
      "Built 50K email subscriber list",
      "45% customer repeat purchase rate",
      "Average order value: $95",
      "Featured in Who What Wear",
      "Monthly revenue: $95,000+"
    ],
    testimonial: "The recycled fabric line was a game-changer. Customers love that they can look good and feel good about their purchase. YogaBulk's blind dropshipping is seamless.",
    avatar: "/images/cases/jessica-williams.jpg",
    products: ["Recycled Leggings", "Eco Sports Bras", "Sustainable Sets"]
  },
  {
    id: "sp-003",
    buyerType: "shopify-dropshippers",
    name: "Michael Brown",
    location: "Dubai, UAE",
    businessType: "Shopify Store - Luxury Activewear",
    startedWith: "Premium sample order",
    currentVolume: "800 pieces per month",
    timeline: "12 months",
    challenge: "UAE market demands luxury quality at competitive prices. Needed premium packaging and fast shipping to Dubai.",
    solution: "Selected premium butter-soft fabric collection. Custom gold foil packaging. Air freight for 5-day delivery to Dubai.",
    results: [
      "Premium positioning successful",
      "Average order value: $180",
      "70% profit margins",
      "Celebrity customers in UAE",
      "Monthly profit: $50,000+"
    ],
    testimonial: "Dubai customers expect luxury. YogaBulk's premium fabric and custom packaging exceeded expectations. The fast air shipping is crucial for this market.",
    avatar: "/images/cases/michael-brown.jpg",
    products: ["Butter Soft Leggings", "Luxe Sports Bras", "Cashmere Hoodies"]
  }
];

export const yogaStudioCases: CaseStudy[] = [
  {
    id: "ys-001",
    buyerType: "yoga-studios",
    name: "Jennifer Walsh",
    location: "San Diego, California, USA",
    businessType: "Hot Yoga Studio",
    startedWith: "Starter Package ($350)",
    currentVolume: "$4,500/month",
    timeline: "2 years",
    challenge: "Hot yoga studio wanted to offer branded merchandise but didn't want to manage inventory or invest heavily upfront.",
    solution: "Started with Starter Package. Added studio logo to all items. Displayed near reception. Mentioned to students after class.",
    results: [
      "Merchandise now 20% of total revenue",
      "Students become walking advertisements",
      "Zero inventory management stress",
      "Re-order every 8 weeks consistently",
      "Students love the quality for hot yoga"
    ],
    testimonial: "I never thought merchandise would be this profitable. Students wear our branded leggings everywhere - the beach, grocery store, other studios. It's the best marketing investment I've made.",
    avatar: "/images/cases/jennifer-walsh.jpg",
    products: ["High-Waist Leggings", "Yoga Tanks", "Studio T-Shirts"]
  },
  {
    id: "ys-002",
    buyerType: "yoga-studios",
    name: "Priya Sharma",
    location: "Mumbai, India",
    businessType: "Boutique Yoga Studio",
    startedWith: "Growth Package ($650)",
    currentVolume: "$3,200/month",
    timeline: "18 months",
    challenge: "Indian market is price-sensitive but quality-conscious. Needed affordable yet premium-feeling merchandise.",
    solution: "Selected Growth Package with mix of basics and trendy items. Custom tags with Sanskrit studio name. Created 'members only' exclusive feel.",
    results: [
      "60% of members own at least one piece",
      "Merchandise creates community feeling",
      "New members often buy on first visit",
      "Instagram posts with branded gear increased 300%",
      "Additional revenue stream covers rent increase"
    ],
    testimonial: "Indian customers are smart shoppers. They immediately recognized the quality rivals international brands at half the price. Our branded merchandise has become a status symbol in the community.",
    avatar: "/images/cases/priya-sharma.jpg",
    products: ["Seamless Leggings", "Sports Bras", "Matching Sets", "Hoodies"]
  },
  {
    id: "ys-003",
    buyerType: "yoga-studios",
    name: "Emma Thompson",
    location: "Melbourne, Australia",
    businessType: "Yoga & Pilates Studio",
    startedWith: "Premium Package ($1,200)",
    currentVolume: "$5,800/month",
    timeline: "2.5 years",
    challenge: "Upscale Melbourne neighborhood demanded premium quality. Studio wanted to position as luxury wellness destination.",
    solution: "Premium Package with eco-friendly options. Custom packaging with studio's minimalist branding. Dedicated retail corner with professional display.",
    results: [
      "Premium positioning attracted higher-paying clients",
      "Average spend per customer: $145",
      "Eco collection sold out 3 times",
      "Featured in local lifestyle magazine",
      "Merchandise profit pays for studio renovations"
    ],
    testimonial: "Melbourne's wellness scene is competitive. Our branded activewear signals quality before clients even take a class. The eco-friendly line perfectly aligns with our studio values. YogaBulk understood our luxury positioning.",
    avatar: "/images/cases/emma-thompson.jpg",
    products: ["Eco Collection", "Premium Leggings", "Luxe Matching Sets", "Cashmere Hoodies"]
  }
];

export const distributorCases: CaseStudy[] = [
  {
    id: "wd-001",
    buyerType: "wholesale-distributors",
    name: "Robert Kim",
    location: "Seoul, South Korea",
    businessType: "Activewear Distributor",
    startedWith: "5,000 pieces first order",
    currentVolume: "25,000 pieces per month",
    timeline: "3 years",
    challenge: "Korean market is highly competitive with strong domestic brands. Needed unique products and exclusive designs to compete.",
    solution: "Secured exclusive distribution rights for Korea. Worked with YogaBulk's design team on Korea-specific styles and colors. Container shipments every 6 weeks.",
    results: [
      "Now #3 activewear distributor in Korea",
      "Supply 200+ retail stores nationwide",
      "Exclusive designs not available elsewhere",
      "40% profit margins maintained",
      "Annual revenue: $8M+"
    ],
    testimonial: "The exclusive territory agreement was crucial. Korean retailers know they can only get these designs from me. YogaBulk's design team understands Asian preferences - the colors and cuts are perfect for our market.",
    avatar: "/images/cases/robert-kim.jpg",
    products: ["Korea-Exclusive Collection", "Seamless Leggings", "Matching Sets", "Sports Bras"]
  },
  {
    id: "wd-002",
    buyerType: "wholesale-distributors",
    name: "Anna Schmidt",
    location: "Berlin, Germany",
    businessType: "Fitness Apparel Distributor",
    startedWith: "10,000 pieces first order",
    currentVolume: "18,000 pieces per month",
    timeline: "2.5 years",
    challenge: "German market demands high quality, sustainability certifications, and reliable supply chain for major retail chains.",
    solution: "Obtained OEKO-TEX and GOTS certifications through YogaBulk. Container loads with full documentation. Quality control for every batch.",
    results: [
      "Supply major German retail chains",
      "100% on-time delivery record",
      "Zero quality complaints in 2.5 years",
      "Expanded to Austria and Switzerland",
      "Annual revenue: €6M+"
    ],
    testimonial: "German retailers are extremely demanding. YogaBulk's certifications and quality consistency allowed me to enter major chains that were previously impossible to access. The documentation is always perfect.",
    avatar: "/images/cases/anna-schmidt.jpg",
    products: ["Certified Organic Collection", "Recycled Fabric Line", "Seamless Basics"]
  },
  {
    id: "wd-003",
    buyerType: "wholesale-distributors",
    name: "Carlos Mendez",
    location: "Mexico City, Mexico",
    businessType: "Latin America Distributor",
    startedWith: "3,000 pieces test order",
    currentVolume: "35,000 pieces per month",
    timeline: "4 years",
    challenge: "Latin American market needed affordable pricing but growing demand for quality. Complex logistics across multiple countries.",
    solution: "Started small, proved market demand. Gradually increased to container loads. YogaBulk helped navigate customs for Mexico, Colombia, and Chile.",
    results: [
      "Largest activewear distributor in Latin America",
      "Operations in 6 countries",
      "Supply 500+ gyms and boutiques",
      "35% average profit margin",
      "Annual revenue: $12M+"
    ],
    testimonial: "When I started, everyone said I couldn't compete with cheap local products. But YogaBulk's quality at competitive pricing proved them wrong. Now I'm the go-to distributor for quality activewear in Latin America.",
    avatar: "/images/cases/carlos-mendez.jpg",
    products: ["Core Collection", "Tropical Colors Line", "Gym Basics", "Yoga Essentials"]
  }
];

// Get cases by buyer type
export function getCasesByBuyerType(type: string): CaseStudy[] {
  const allCases = [...amazonCases, ...tiktokCases, ...boutiqueCases, ...shopifyCases, ...yogaStudioCases, ...distributorCases];
  return allCases.filter(c => c.buyerType === type);
}

// Get featured cases
export const featuredCases = [
  amazonCases[0], // Sarah Mitchell
  tiktokCases[0], // Chloe Zhang
  boutiqueCases[0], // Rachel Kim
  shopifyCases[0] // David Chen
];
