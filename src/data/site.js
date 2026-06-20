export const SITE = {
  name: 'Wholesale Yoga',
  tagline: 'Ready To Ship Activewear Wholesale',
  description: 'Premium activewear and yoga wear wholesale. Low MOQ 30-50pcs, fast shipping 3-7 days, custom logo service. Factory direct pricing for Amazon, TikTok Shop and Shopify sellers.',
  url: 'https://yogabulk-backup.pages.dev',
  whatsapp: '8615556105390',
  whatsappLink: 'https://wa.me/8615556105390',
  company: 'Hefei Yaoshuo Technology Co., Ltd.',
  companyShort: 'Yaoshuo Tech',
  address: 'Yaohai District, Hefei, China',
  email: 'info@yogabulk.com',
};

export const WHATSAPP = 'https://wa.me/8615556105390';

// FAQ Categories - Single source of truth
// Use these constants in faq.astro to ensure consistency
export const FAQ_CATEGORIES = [
  'Getting Started',
  'Payment and Pricing',
  'Shipping and Logistics',
  'Custom Branding and OEM',
  'Returns and Refunds',
  'Dropshipping and Business'
];

export const FAQ_CATEGORY_NUMBERS = {
  'Getting Started': 1,
  'Payment and Pricing': 2,
  'Shipping and Logistics': 3,
  'Custom Branding and OEM': 4,
  'Returns and Refunds': 5,
  'Dropshipping and Business': 6
};

export const FEATURES = [
  { icon: '📦', title: 'Real Ready Stock', desc: '10,000+ pcs in stock, ship same day' },
  { icon: '🚀', title: 'Fast Shipping 3-7 Days', desc: 'DHL/FedEx express to worldwide' },
  { icon: '🛒', title: 'Low MOQ 30-50pcs', desc: 'Small order friendly for testing' },
  { icon: '🏷️', title: 'Custom Logo', desc: '4 techniques: heat transfer, embroidery, silicone, screen print' },
  { icon: '🔥', title: 'Trendy Styles', desc: 'Following TikTok and Amazon viral trends' },
  { icon: '🏭', title: 'Factory Direct Price', desc: 'Cut out middlemen, maximize your margin' },
];

export const CATEGORIES = [
  { name: 'Seamless Leggings', slug: 'seamless-leggings', count: 70 },
  { name: 'Scrunch Butt Leggings', slug: 'scrunch-butt-leggings', count: 50 },
  { name: 'Flare Pants', slug: 'flare-pants', count: 40 },
  { name: 'Sports Bra', slug: 'sports-bra', count: 60 },
  { name: 'Biker Shorts', slug: 'butt-lifting-biker-shorts', count: 30 },
  { name: 'Matching Sets', slug: 'matching-sets', count: 40 },
];

export const STEPS = [
  { num: '01', title: 'Browse & Select', desc: 'Pick from 100+ in-stock styles' },
  { num: '02', title: 'Get Quote via WhatsApp', desc: 'Instant response within 30 minutes' },
  { num: '03', title: 'Confirm & Pay', desc: 'Secure payment, flexible terms' },
  { num: '04', title: 'Ship & Track', desc: 'Fast delivery 3-7 business days' },
];

export const TESTIMONIALS = [
  { name: 'Sarah M.', role: 'TikTok and Shopify Seller, US', avatar: '/images/cases/sarah-mitchell.webp', text: 'Finally a supplier that actually has stock! I ordered 50pcs of their scrunch leggings and got them in 5 days. My TikTok video got 200K views and I sold out in 3 days. Already reordered 200pcs.', rating: 5 },
  { name: 'James L.', role: 'Amazon FBA Seller, UK', avatar: '/images/cases/james-liu.webp', text: 'Low MOQ is a game changer. I can test new styles without risking thousands. Their custom logo service is professional too - my branded leggings look premium.', rating: 5 },
  { name: 'Emma R.', role: 'Yoga Studio Owner, Australia', avatar: '/images/cases/emma-rodriguez.webp', text: 'I was skeptical about ordering from China, but the quality blew me away. Seamless fabric is buttery soft. My students love the matching sets. Now I order monthly.', rating: 5 },
];

export const HOME_FAQS = [
  { q: 'What is your MOQ (Minimum Order Quantity)?', a: 'Our standard MOQ is 30-50 pieces per style per color. Custom designs start at 100 pieces per style.' },
  { q: 'Can I order samples before placing bulk orders?', a: 'Yes, we offer 1-5 pieces of samples. The sample fee will be fully refunded when you place a bulk order over 50 pieces.' },
  { q: 'What payment methods do you accept?', a: 'We accept T/T, PayPal, Alibaba Trade Assurance and Western Union. We recommend Trade Assurance for new buyers for full protection.' },
  { q: 'How fast do in-stock items ship?', a: 'In-stock products ship within 24-48 hours after payment. Express delivery takes 3-7 business days to most countries worldwide.' },
  { q: 'Do you provide custom logo services?', a: 'Yes, we support 4 logo techniques with a MOQ of 50 pieces. The production lead time is 7-10 working days.' },
  { q: 'What is your return policy?', a: 'We accept returns for manufacturing defects within 7 days. For size issues, we offer exchanges, and buyers cover return shipping fees.' },
  { q: 'Do you ship worldwide?', a: 'We ship to over 100 countries, including the USA, UK, EU, Australia, Canada and Southeast Asia.' },
  { q: 'Can I get free product photos and videos for my store?', a: 'All wholesale customers receive free high-resolution photos and videos with full commercial usage rights.' }
];

export const FAQS = [
  { q: 'How do I place a wholesale order?', a: 'Select styles and colors from our catalog, then contact us via WhatsApp for a detailed quote. We reply within 30 minutes during business hours.', category: 'Getting Started' },
  { q: 'What is the lead time for orders?', a: 'In-stock items ship in 24-48 hours. Custom logo orders take 7-15 days, and express shipping adds 3-7 days for global delivery.', category: 'Getting Started' },
  { q: 'Do you have a minimum order value?', a: 'We only set quantity MOQ with no minimum order value. A small wire transfer fee may apply for orders under $200.', category: 'Getting Started' },
  { q: 'How do I track my order after shipment?', a: 'We send tracking numbers via WhatsApp and email after shipment. You can check real-time delivery status on the carrier’s official website.', category: 'Getting Started' },
  { q: 'What is the most common mistake new activewear buyers make?', a: 'The top mistakes are ordering without samples, ignoring total shipping cost and choosing wrong sizes for target markets. We offer professional sizing advice.', category: 'Getting Started' },
  { q: 'Are your prices negotiable?', a: 'Our factory-direct prices are competitive. We offer volume discounts: 5-8% off for 100-300pcs, 8-12% off for 300-500pcs, and 12-15% off for 500+pcs.', category: 'Payment and Pricing' },
  { q: 'What currency do you use and are there hidden fees?', a: 'All prices are quoted in USD with no hidden fees. Shipping, duties and taxes are quoted separately based on your destination.', category: 'Payment and Pricing' },
  { q: 'Do you offer payment plans or credit terms?', a: 'Established customers with 3+ orders can enjoy Net-15 or Net-30 credit terms for orders over $1,500. New customers pay 30% deposit + 70% before shipment.', category: 'Payment and Pricing' },
  { q: 'What are the different shipping options?', a: 'Express shipping takes 3-7 days, economy shipping takes 7-12 days, and sea freight for large orders takes 15-25 days.', category: 'Shipping and Logistics' },
  { q: 'What are the shipping costs?', a: 'Shipping fees depend on weight, volume and destination. Roughly $3-6 per unit for 50-100pcs via express, and $1-2 per unit for bulk sea freight.', category: 'Shipping and Logistics' },
  { q: 'Will I pay customs duties and import taxes?', a: 'Duties and taxes are the buyer’s responsibility. The rate is 10-12% for the USA and around 12% for the EU.', category: 'Shipping and Logistics' },
  { q: 'Can I customize fabric, color or design?', a: 'Custom fabric, Pantone colors and minor design changes are available for orders of 300+ pieces, with 20-30 days production time.', category: 'Custom Branding and OEM' },
  { q: 'Do you offer hang tags and custom packaging?', a: 'Custom hang tags, poly bags and boxes are available. Custom hang tags start at $0.05-0.15/pc with a 500pcs MOQ, lead time 10-15 days.', category: 'Custom Branding and OEM' },
  { q: 'Do you offer professional photography services?', a: 'We provide free standard product photos. Custom studio shooting is available at $50-100 per hour.', category: 'Custom Branding and OEM' },
  { q: 'What if I receive damaged or wrong items?', a: 'Contact us within 48 hours with photos. We will provide replacements, partial refunds or store credits within 24 hours.', category: 'Returns and Refunds' },
  { q: 'What happens if products run out of stock?', a: 'We notify you in advance for low-stock styles. You can pre-order or choose similar alternative styles.', category: 'Returns and Refunds' },
  { q: 'Do you offer exchanges for unsold inventory?', a: 'We support exchanges for unsold items within 30 days. We issue 12-month valid store credits instead of cash refunds.', category: 'Returns and Refunds' },
  { q: 'Can I get exclusive sales rights for a style?', a: 'Orders of 500+ pieces per style qualify for 6-12 months territorial exclusivity to avoid price competition.', category: 'Dropshipping and Business' },
  { q: 'Can I sell your products on multiple platforms?', a: 'There are no platform restrictions. We also provide FNSKU labels for Amazon FBA sellers.', category: 'Dropshipping and Business' },
  { q: 'How do I start an activewear business with zero experience?', a: 'Complete market research, order samples, build your store and launch gradually. The whole process takes about 1-2 months.', category: 'Getting Started' }
];

export const FAQ_PRODUCT = [
  { q: 'What fabrics do you use for activewear?', a: 'We use nylon-spandex blends: 75% Nylon+25% Spandex for leggings, 80% Nylon+20% Spandex for compression wear, and polyester-spandex for quick-dry styles. All are OEKO-TEX certified.' },
  { q: 'How do I choose the right size for my market?', a: 'We provide detailed size charts with Asian and Western fit options. We recommend ordering samples first to test the fit.' },
  { q: 'What is your quality control process?', a: 'We follow a 3-step QC process and AQL 2.5 inspection standard to guarantee product quality.' },
  { q: 'What certifications do your products have?', a: 'We have OEKO-TEX 100, BSCI and ISO 9001 certifications. We can provide REACH, CPSIA and CA Prop 65 reports on request.' },
  { q: 'What is 4-way stretch and 2-way stretch fabric?', a: '4-way stretch stretches horizontally and vertically for full mobility. 2-way stretch only stretches sideways. 4-way stretch is widely used for yoga activewear.' },
  { q: 'What does GSM mean for activewear fabric?', a: 'GSM stands for grams per square meter. 180-220gsm is lightweight, 240-280gsm is standard, and 300-320gsm is heavy compression fabric.' },
  { q: 'Is bamboo fabric suitable for activewear?', a: 'Bamboo fabric is soft and antibacterial but has poor stretch recovery. It works for loungewear, not for high-intensity workouts.' },
  { q: 'What is buttery-soft seamless fabric?', a: 'It uses ultra-fine micro nylon fibers with seamless knitting, soft to touch and chafe-free during exercise.' },
  { q: 'What is moisture-wicking fabric?', a: 'It pulls sweat from skin to the fabric surface for quick evaporation. Nylon-spandex works much better than cotton.' },
  { q: 'How to care for activewear to extend service life?', a: 'Wash inside out in cold water, avoid fabric softener and high heat. Air dry or tumble dry on low setting. Do not bleach.' },
  { q: 'What makes leggings squat-proof?', a: 'Squat-proof leggings use 280gsm+ fabric, high nylon content and tight knitting. Dark colors are more opaque than light ones.' },
  { q: 'What is the difference between compression and regular activewear?', a: 'Compression wear is tight for muscle support. Regular activewear has a relaxed fit for daily yoga and casual exercise.' },
  { q: 'What size should I pick if I am between two sizes?', a: 'For stretch activewear, choose the smaller size. Size up if the waistband is near your maximum measurement.' },
  { q: 'Do your sizes run small or large?', a: 'Our sizes follow US standard with slight Asian fit. Size up if you prefer a looser fit for Western markets.' },
  { q: 'How to measure size for activewear?', a: 'Measure waist, hips and inseam for leggings; measure underbust and bust for sports bras, then match our size chart.' },
  { q: 'Do you offer plus sizes?', a: 'Most styles range from XS to 3XL. Custom orders can extend to 4XL and above.' },
  { q: 'What are high-rise, mid-rise and low-rise styles?', a: 'High-rise sits above the navel (most popular for yoga), mid-rise sits at the navel, and low-rise sits at the hips.' },
  { q: 'How to make sure leggings stay in place during workouts?', a: 'Wide waistbands, over 20% spandex and flatlock seams prevent rolling and slipping.' },
  { q: 'How does sports bra sizing work?', a: 'We use S/M/L/XL based on underbust measurement. Size down for tighter support during high-impact exercise.' },
  { q: 'What activewear fits curvy body types best?', a: 'High-waist, 4-way stretch and full-coverage styles are recommended for curvy figures.' },
  { q: 'Can I exchange items for wrong sizes?', a: 'We accept size exchanges within 14 days. We only take returns for manufacturing defects, not personal fit preference.' },
  { q: 'Do you offer petite and tall sizing?', a: 'Standard sizes fit average figures. We can adjust inseam length for custom orders of 300+ pieces.' }
];

export const FAQ_SELLERS = [
  { q: 'Do you offer dropshipping and blind shipping?', a: 'Yes, we provide dropshipping service with 10pcs MOQ and free blind shipping. No supplier information will be shown on packages.' },
  { q: 'How do I find trending activewear styles?', a: 'We update best sellers weekly based on TikTok and Amazon data, and share trend alerts via WhatsApp.' },
  { q: 'What is Amazon FBA and how does it work?', a: 'FBA means you send inventory to Amazon warehouses, and Amazon handles storage, delivery and customer service.' },
  { q: 'What are total fees for Amazon FBA activewear?', a: 'FBA fees include fulfillment fee, referral fee and storage fee. Total fees take about $7-10 per unit for regular leggings.' },
  { q: 'How to create an Amazon FBA listing?', a: 'Register a professional seller account, add products and select FBA mode. Valid barcodes are required for each item.' },
  { q: 'What barcodes do I need for Amazon FBA?', a: 'You can use GS1 UPC/EAN or free Amazon FNSKU labels for FBA inventory.' },
  { q: 'How to ship goods to Amazon FBA warehouses?', a: 'Choose small parcel, LTL freight or full container based on your order quantity, and follow Amazon’s packaging rules.' },
  { q: 'What is the best size for Amazon FBA to cut costs?', a: 'Keep items under 1lb to stay in the standard size tier with lower fulfillment fees.' },
  { q: 'How to avoid common Amazon FBA inventory issues?', a: 'Track inventory velocity, sell out stock within 6 months and keep complete delivery photos for claims.' },
  { q: 'What is Amazon FBA sell-through rate?', a: 'It equals sold units divided by received units. We suggest keeping the rate above 0.8 to avoid extra fees.' },
  { q: 'Can I sell adult and kids activewear in one Amazon account?', a: 'Yes. Kids products need extra CPSIA compliance while adult styles do not.' },
  { q: 'How long does Amazon process FBA shipments?', a: 'Small parcels take 1-3 days, and large freight shipments take 5-10 days to be available for sale.' },
  { q: 'How to calculate profit margin for Amazon FBA?', a: 'Net profit = Sale Price - Product Cost - FBA Fees - Shipping - Customs. We suggest a minimum 40% net margin.' },
  { q: 'How to set up a TikTok Shop account?', a: 'Register on seller.tiktok.com with business documents. Verification takes 1-3 business days.' },
  { q: 'What are TikTok Shop seller fees?', a: 'Activewear category charges 5-8% referral fee plus 1.8% transaction fee, no monthly subscription.' },
  { q: 'How to fulfill TikTok Shop orders?', a: 'You can choose merchant fulfillment or TikTok FBT service. Fast 24-48h shipping improves conversion.' },
  { q: 'How important is content for TikTok Shop sales?', a: 'Short videos are the core. Try-on, fabric and styling videos drive most sales on TikTok.' },
  { q: 'What is TikTok affiliate marketing?', a: 'Collaborate with creators by setting commission. You only pay fees when orders are generated.' },
  { q: 'What is TikTok Shop return policy?', a: 'Buyers can return items within 14 days. We suggest setting clear rules for worn hygiene products.' },
  { q: 'Can I run Amazon and TikTok Shop at the same time?', a: 'Yes. Use inventory management tools to avoid overselling to different customer groups.' },
  { q: 'What shipping works best for TikTok Shop?', a: 'FedEx, UPS, DHL and USPS are recommended to guarantee fast delivery.' },
  { q: 'How to price products for TikTok Shop?', a: 'Price 10-15% lower than Amazon for new stores, then raise prices gradually as reviews grow.' },
  { q: 'What styles sell best on TikTok Shop?', a: 'Scrunch leggings, seamless sports bras, matching sets and biker shorts are top trending items.' },
  { q: 'Can I sell products at trade shows and pop-up events?', a: 'We offer flexible 10pcs MOQ for event sellers, plus free display materials and custom hang tags.' }
];

export const FAQ_BUSINESS = [
  { q: 'Is your activewear suitable for fitness studios?', a: 'Our trendy and high-quality styles fit boutique yoga and fitness studios perfectly.' },
  { q: 'Can I sell your products as studio merchandise?', a: 'Yes. We provide floor model programs and branded tags for gym retail business.' },
  { q: 'Do you offer staff discount for fitness studios?', a: 'Studios get 15% discount for orders over $300, plus a referral reward program.' },
  { q: 'Can you make custom colors for studio branding?', a: 'We match Pantone colors for orders over 150 pieces, with extra production time and small surcharge.' },
  { q: 'Do you provide training materials for studio staff?', a: 'We supply digital lookbooks, size charts and new style previews for all studio partners.' },
  { q: 'What is your re-order cycle for bestsellers?', a: 'Most studios re-order every 4-6 weeks. We launch new styles every 2 weeks.' },
  { q: 'Do you offer consignment service?', a: 'Limited consignment is available for long-term studio customers with 3+ orders.' },
  { q: 'Do you have a VIP loyalty program?', a: 'VIP members get 5% off all orders, priority production and early access to new styles.' },
  { q: 'What are tax rules for wholesale activewear?', a: 'US wholesale buyers with valid resale certificates are exempt from sales tax. International buyers pay local VAT/GST.' },
  { q: 'Do I need a business license to buy wholesale?', a: 'Most wholesale orders require business registration or resale certificate.' },
  { q: 'How to register an activewear business?', a: 'Choose LLC structure, complete state registration, apply for EIN and open a business bank account.' },
  { q: 'What insurance do I need for activewear business?', a: 'Product liability insurance is a must. General liability and cyber insurance are recommended.' },
  { q: 'How to protect my brand name?', a: 'Register trademarks in your country, plus domain names and social media accounts for brand protection.' },
  { q: 'What accounting tools are recommended?', a: 'QuickBooks or Wave for bookkeeping; dedicated inventory software for stock management.' },
  { q: 'How to handle sales tax for cross-state and international sales?', a: 'Collect sales tax where you have economic nexus. Use professional tax tools for automated compliance.' },
  { q: 'How to track inventory efficiently?', a: 'Track products by SKU, use inventory software and set reorder points to avoid stockout.' },
  { q: 'How to build an email list for my brand?', a: 'Offer sizing guides or discount coupons to collect emails. Klaviyo and Mailchimp are popular tools.' },
  { q: 'What is the most profitable activewear niche?', a: 'Seamless activewear has the highest profit margin, while scrunch leggings have the largest sales volume.' },
  { q: 'Is the activewear market saturated?', a: 'The general market is competitive. You can stand out via niche positioning, high quality and unique branding.' },
  { q: 'What colors are trending in 2025?', a: 'Earth tones, bright neon, pastels and classic neutral colors are popular this year.' },
  { q: 'How to find new fashion trends in advance?', a: 'Monitor social media platforms, Amazon new releases, trade shows and influencer content.' },
  { q: 'What is the difference between fast fashion and quality activewear?', a: 'Quality styles use higher GSM fabric and premium materials for longer service life and repeat customers.' },
  { q: 'What is the production time for custom logo orders?', a: 'Heat transfer and screen print take 7-10 days; custom packaging takes 12-15 days. Rush orders are available with surcharge.' },
  { q: 'Can I visit your factory?', a: 'Factory visits and video tours are available. Please book at least 2 weeks in advance.' }
];

export const INVENTORY = [
  { category: 'Seamless Leggings', slug: 'seamless-leggings', status: 'In Stock', pcs: '3,500+', topStyles: 'High-waist, Scrunch seam, Crossover waist', restock: 'Always in stock' },
  { category: 'Scrunch Butt Leggings', slug: 'scrunch-butt-leggings', status: 'In Stock', pcs: '2,200+', topStyles: 'Butterfly scrunch, V-shape scrunch, Double-layer', restock: 'Always in stock' },
  { category: 'Flare Pants', slug: 'flare-pants', status: 'Low Stock', pcs: '~400', topStyles: 'Retro flare, Bell bottom, Wide leg', restock: 'Restock in 7-10 days' },
  { category: 'Sports Bras', slug: 'sports-bra', status: 'In Stock', pcs: '1,800+', topStyles: 'Crop top, Racerback, Padded strap', restock: 'Always in stock' },
  { category: 'Biker Shorts', slug: 'butt-lifting-biker-shorts', status: 'Low Stock', pcs: '~300', topStyles: '6-inch, 8-inch, Fringe hem', restock: 'Restock in 5-7 days' },
  { category: 'Matching Sets', slug: 'matching-sets', status: 'Pre-order', pcs: '~100', topStyles: 'Sports bra plus shorts set, Long sleeve set, Hoodie set', restock: 'Restock in 10-14 days' },
];