// ==========================================================================
// ALPHA TRIBE - PRODUCT CATALOG DATA STORE
// ==========================================================================

const PRODUCTS = [
  // --- CASUAL SHIRTS ---
  {
    id: 'casual-1',
    name: 'Grey Checkered Casual Shirt',
    category: 'Casual Shirts',
    categorySlug: 'casual-shirts',
    price: 1299,
    originalPrice: 2199,
    rating: 4.8,
    reviewsCount: 142,
    badge: 'Bestseller',
    tagline: 'Effortless cool, engineered for daily motion',
    description: 'Crafted from 100% breathable combed twill cotton. Features a tailored athletic cut calibrated for Indian broad shoulders with an unrestrictive taper down to the waist. Pre-washed for a buttery soft drape from day one.',
    fabric: '100% Long-Staple Combed Cotton (180 GSM)',
    fit: 'Signature Athletic Taper',
    washCare: 'Machine wash cold with like colors. Warm iron if needed. Do not tumble dry.',
    colors: [
      { name: 'Charcoal Check', hex: '#4a4d52' },
      { name: 'Slate Blue Check', hex: '#3d5269' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 7,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'casual-2',
    name: 'Olive Washed Linen Casual Shirt',
    category: 'Casual Shirts',
    categorySlug: 'casual-shirts',
    price: 1599,
    originalPrice: 2599,
    rating: 4.9,
    reviewsCount: 98,
    badge: 'New Arrival',
    tagline: 'Pure European flax linen, built for tropical summers',
    description: 'Breathe through the humid afternoons with our premium enzyme-washed pure linen. Features subtle horn-finish buttons, a convertible relaxed camp collar, and reinforced gussets on side seams.',
    fabric: '100% Normandy Flax Linen (160 GSM)',
    fit: 'Relaxed Tailored',
    washCare: 'Hand or gentle machine wash. Hang dry in shade. Light steam iron.',
    colors: [
      { name: 'Olive Green', hex: '#525b44' },
      { name: 'Earthy Sand', hex: '#9e8c74' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 4,
    images: [
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'casual-3',
    name: 'Midnight Navy Brushed Oxford Shirt',
    category: 'Casual Shirts',
    categorySlug: 'casual-shirts',
    price: 1399,
    originalPrice: 2299,
    rating: 4.7,
    reviewsCount: 114,
    badge: 'Trending',
    tagline: 'Heavyweight warmth with effortless structure',
    description: 'An elevated heavyweight Oxford cloth shirt with a peach-skin brushed finish. Perfect over a white crewneck tee or worn solo with rolled sleeves.',
    fabric: '100% Peached Oxford Cotton (210 GSM)',
    fit: 'Regular Athletic Fit',
    washCare: 'Cold wash inside out. Tumble dry low.',
    colors: [
      { name: 'Midnight Navy', hex: '#1d2a3d' },
      { name: 'Gunmetal Grey', hex: '#3b3d40' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 9,
    images: [
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'casual-4',
    name: 'Terracotta Camp Collar Shirt',
    category: 'Casual Shirts',
    categorySlug: 'casual-shirts',
    price: 1449,
    originalPrice: 2399,
    rating: 4.6,
    reviewsCount: 76,
    badge: '',
    tagline: 'Vacation aesthetics with regal poise',
    description: 'Retro resort silhouette tailored with sharp modern lines. Garment dyed in deep terracotta with custom matte gold button accents.',
    fabric: '70% Cotton, 30% Lyocell blend for fluid drape',
    fit: 'Cuban Relaxed Fit',
    washCare: 'Machine wash cold. Do not bleach.',
    colors: [
      { name: 'Terracotta', hex: '#944b36' },
      { name: 'Sahara Dune', hex: '#ab9572' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 3,
    images: [
      'https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // --- DENIM JEANS ---
  {
    id: 'denim-1',
    name: 'Light Blue Regular Fit Jeans',
    category: 'Denim Jeans',
    categorySlug: 'denim-jeans',
    price: 1499,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 220,
    badge: 'Bestseller',
    tagline: 'Cut for movement. Built to endure.',
    description: '12.5 oz ring-spun denim infused with 2% elastane for unrestricted mobility whether driving, traveling or working long hours. Natural stonewash finish with handcrafted whiskering at thighs.',
    fabric: '98% Ring-Spun Cotton, 2% Spandex (12.5 oz)',
    fit: 'Comfort Regular Taper',
    washCare: 'Wash inside out in cold water. Air dry away from direct sunlight.',
    colors: [
      { name: 'Stonewash Light Blue', hex: '#6f93b8' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    stock: 12,
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'denim-2',
    name: 'Dark Indigo Selvedge Raw Jeans',
    category: 'Denim Jeans',
    categorySlug: 'denim-jeans',
    price: 1899,
    originalPrice: 3199,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Artisan',
    tagline: '14 oz shuttle-loom selvedge from Kurabo mills',
    description: 'For denim purists. Woven on vintage shuttle looms with the iconic gold selvedge ID tick on the outer outseam. Develops a personalized patina and honeycombs with each wear.',
    fabric: '100% Selvedge Raw Indigo Cotton (14 oz)',
    fit: 'Slim Straight',
    washCare: 'Wear raw for 6 months before first soak. Spot clean.',
    colors: [
      { name: 'Deep Indigo', hex: '#1c2840' }
    ],
    sizes: ['30', '32', '34', '36'],
    stock: 5,
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'denim-3',
    name: 'Washed Black Stretch Denim',
    category: 'Denim Jeans',
    categorySlug: 'denim-jeans',
    price: 1699,
    originalPrice: 2799,
    rating: 4.8,
    reviewsCount: 165,
    badge: 'Trending',
    tagline: 'Sleek, pitch-black wash that never fades',
    description: 'Reactive sulfur-dyed black denim engineered to resist fading through 40+ washes. Clean back pockets without loud branding, antique brass hardware, and double-stitched belt loops.',
    fabric: '97% Cotton, 3% DualFX Stretch Tech',
    fit: 'Athletic Slim Taper',
    washCare: 'Cold wash inside out with dark detergent.',
    colors: [
      { name: 'Jet Charcoal Black', hex: '#1c1b1a' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    stock: 8,
    images: [
      'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'denim-4',
    name: 'Mid-Wash Vintage Tapered Jeans',
    category: 'Denim Jeans',
    categorySlug: 'denim-jeans',
    price: 1749,
    originalPrice: 2899,
    rating: 4.7,
    reviewsCount: 92,
    badge: '',
    tagline: 'Classic 90s heritage wash with modern stretch',
    description: 'The everyday workhorse jean. Clean mid-tone blue wash that pairs seamlessly with white sneakers, loafers or Chelsea boots.',
    fabric: '98% Cotton, 2% Elastane (13 oz)',
    fit: 'Regular Taper',
    washCare: 'Machine wash cold. Line dry.',
    colors: [
      { name: 'Mid Indigo Wash', hex: '#3e5c82' }
    ],
    sizes: ['30', '32', '34', '36'],
    stock: 6,
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // --- POLO T-SHIRTS ---
  {
    id: 'polo-1',
    name: 'Solid Grey Luxury Polo T-Shirt',
    category: 'Polo T-Shirts',
    categorySlug: 'polo-t-shirts',
    price: 899,
    originalPrice: 1599,
    rating: 4.8,
    reviewsCount: 184,
    badge: 'Bestseller',
    tagline: 'Smart casual, redefined for the modern board',
    description: 'Mercerized Supima cotton polo featuring an anti-curl ribbed collar that retains its crisp structure wear after wear. Shell-finish 3-button placket and stepped hem with side vents.',
    fabric: '100% Mercerized Long-Staple Cotton (220 GSM)',
    fit: 'Tailored Fit',
    washCare: 'Cold wash. Dry flat. Do not iron collar directly.',
    colors: [
      { name: 'Heather Grey', hex: '#8a8d91' },
      { name: 'Onyx Black', hex: '#111111' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 15,
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625910513413-722394747c34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'polo-2',
    name: 'Obsidian Black Supima Knit Polo',
    category: 'Polo T-Shirts',
    categorySlug: 'polo-t-shirts',
    price: 1099,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 126,
    badge: 'Signature',
    tagline: 'Zero sheen, velvety touch. The ultimate evening polo.',
    description: 'Fine-gauge knit construction provides a sweater-like elegance. Pairs naturally under a tailored sports blazer or worn solo with tailored trousers.',
    fabric: '100% American Supima Cotton (230 GSM)',
    fit: 'Modern Athletic Fit',
    washCare: 'Delicate cycle wash. Dry flat.',
    colors: [
      { name: 'Obsidian Black', hex: '#0a0a0a' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 10,
    images: [
      'https://images.unsplash.com/photo-1625910513413-722394747c34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'polo-3',
    name: 'Emerald Green Knit Polo',
    category: 'Polo T-Shirts',
    categorySlug: 'polo-t-shirts',
    price: 949,
    originalPrice: 1649,
    rating: 4.7,
    reviewsCount: 89,
    badge: 'New',
    tagline: 'Deep jewel tone for weekend confidence',
    description: 'Woven from combed Egyptian cotton in rich emerald green. Finished with contrasting knit ribbing along the sleeves and collar.',
    fabric: '100% Combed Cotton Piqué',
    fit: 'Tailored Fit',
    washCare: 'Machine wash cold with mild detergent.',
    colors: [
      { name: 'Emerald Forest', hex: '#1e3f20' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 8,
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625910513413-722394747c34?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'polo-4',
    name: 'Burgundy Classic Tipped Polo',
    category: 'Polo T-Shirts',
    categorySlug: 'polo-t-shirts',
    price: 999,
    originalPrice: 1699,
    rating: 4.7,
    reviewsCount: 65,
    badge: '',
    tagline: 'Subtle gold tipping on collar and cuff',
    description: 'Deep royal burgundy piqued cotton accented with Alpha Tribe signature antique gold twin tipping along collar points and sleeve hems.',
    fabric: '95% Pique Cotton, 5% Elastane',
    fit: 'Athletic Slim',
    washCare: 'Cold wash. Dry flat.',
    colors: [
      { name: 'Burgundy Wine', hex: '#581825' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 5,
    images: [
      'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625910513413-722394747c34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // --- FORMAL SHIRTS ---
  {
    id: 'formal-1',
    name: 'Light Blue Solid Formal Shirt',
    category: 'Formal Shirts',
    categorySlug: 'formal-shirts',
    price: 1399,
    originalPrice: 2299,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Bestseller',
    tagline: 'Dress sharp. Lead sharp. Unwrinkled all day.',
    description: 'Constructed from two-ply 100s yarn-count Egyptian cotton with proprietary Easy-Iron technology. Features a semi-cutaway collar engineered to stay upright with or without a necktie, removable brass collar stays, and mother-of-pearl buttons.',
    fabric: '100% Two-Ply Giza Cotton (100s/2)',
    fit: 'Executive Tailored Fit',
    washCare: 'Machine wash warm, hang dry. Steam iron on cotton setting.',
    colors: [
      { name: 'Sky Azure', hex: '#a9c4dc' },
      { name: 'Classic Crisp White', hex: '#f6f6f6' }
    ],
    sizes: ['38 (S)', '39 (M)', '40 (M-L)', '42 (L)', '44 (XL)'],
    stock: 14,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'formal-2',
    name: 'Crisp White Royal Oxford Formal Shirt',
    category: 'Formal Shirts',
    categorySlug: 'formal-shirts',
    price: 1499,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 195,
    badge: 'Essential',
    tagline: 'The timeless power shirt for pivotal presentations',
    description: 'Heavyweight royal oxford weave with a distinctive basket-weave texture. Highly opaque, wrinkle-resistant and breathable in all Indian climates.',
    fabric: '100% Supima Royal Oxford Cotton',
    fit: 'Athletic Slim Fit',
    washCare: 'Gentle cycle, hang damp to dry. Warm iron.',
    colors: [
      { name: 'Pure White', hex: '#ffffff' }
    ],
    sizes: ['38 (S)', '39 (M)', '40 (M-L)', '42 (L)', '44 (XL)'],
    stock: 9,
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'formal-3',
    name: 'French Cuff Charcoal Formal Shirt',
    category: 'Formal Shirts',
    categorySlug: 'formal-shirts',
    price: 1699,
    originalPrice: 2799,
    rating: 4.8,
    reviewsCount: 84,
    badge: 'Black Tie',
    tagline: 'Double French cuffs for cufflinks and black-tie galas',
    description: 'Sleek twill weave in deep charcoal grey. Tailored with French cuffs, concealed placket, and back darts for an immaculate streamlined profile.',
    fabric: '100% High-Twist Twill Cotton',
    fit: 'Fitted Slim',
    washCare: 'Dry clean recommended for French cuffs.',
    colors: [
      { name: 'Anthracite Charcoal', hex: '#2c2e33' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)'],
    stock: 4,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'formal-4',
    name: 'Pale Pink Micro-Herringbone Shirt',
    category: 'Formal Shirts',
    categorySlug: 'formal-shirts',
    price: 1449,
    originalPrice: 2399,
    rating: 4.7,
    reviewsCount: 72,
    badge: '',
    tagline: 'Modern subtle color with luxurious herringbone texture',
    description: 'Subtle herringbone weave provides depth and luster under office lighting. Looks exceptional paired with navy suits or charcoal trousers.',
    fabric: '100% Giza Cotton Micro-Herringbone',
    fit: 'Executive Tailored',
    washCare: 'Warm wash, steam iron.',
    colors: [
      { name: 'Blush Rose', hex: '#eedbd9' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)'],
    stock: 6,
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80'
    ]
  },

  // --- ROUND NECK T-SHIRTS ---
  {
    id: 'tees-1',
    name: 'Yellow Striped Round Neck T-Shirt',
    category: 'Round Neck T-Shirts',
    categorySlug: 'round-neck-t-shirts',
    price: 599,
    originalPrice: 1099,
    rating: 4.8,
    reviewsCount: 240,
    badge: 'Bestseller',
    tagline: 'Basics done premium. Thick, durable and shape-holding.',
    description: '220 GSM heavyweight combed cotton tee with ribbed non-sag collar. Yarn-dyed Breton stripes with subtle Alpha Tribe embroidery on sleeve.',
    fabric: '100% Heavyweight Combed Cotton (220 GSM)',
    fit: 'Standard Regular',
    washCare: 'Machine wash cold with like colors. Line dry.',
    colors: [
      { name: 'Mustard Gold & Navy', hex: '#d8b94a' },
      { name: 'Black & Off-White', hex: '#1c1c1c' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 18,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'tees-2',
    name: 'Jet Black 240 GSM Supima Crewneck',
    category: 'Round Neck T-Shirts',
    categorySlug: 'round-neck-t-shirts',
    price: 699,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 380,
    badge: 'Signature Heavy',
    tagline: 'The ultimate luxury black t-shirt. Zero cling, zero sag.',
    description: 'Engineered for the man who wears a black tee every day and demands perfection. Dense 240 GSM fabric drapes with an imposing silhouette without bunching.',
    fabric: '100% Compact Supima Cotton (240 GSM)',
    fit: 'Boxy Athletic Taper',
    washCare: 'Cold wash inside out. Tumble dry delicate.',
    colors: [
      { name: 'Deep Obsidian Black', hex: '#0a0a0a' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 22,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'tees-3',
    name: 'Bone White Minimal Oversized Tee',
    category: 'Round Neck T-Shirts',
    categorySlug: 'round-neck-t-shirts',
    price: 649,
    originalPrice: 1149,
    rating: 4.7,
    reviewsCount: 110,
    badge: 'Trending',
    tagline: 'Relaxed drop-shoulder streetwear proportion',
    description: 'Subtle warm bone white shade with dropped shoulders and wider sleeves for an understated, relaxed weekend profile.',
    fabric: '100% Bio-Washed Organic Cotton (210 GSM)',
    fit: 'Drop Shoulder Oversized',
    washCare: 'Machine wash cold.',
    colors: [
      { name: 'Bone White', hex: '#ede8dd' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    stock: 14,
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'tees-4',
    name: 'Sage Green Organic Slub Tee',
    category: 'Round Neck T-Shirts',
    categorySlug: 'round-neck-t-shirts',
    price: 629,
    originalPrice: 1099,
    rating: 4.6,
    reviewsCount: 95,
    badge: '',
    tagline: 'Textured slub knit with an organic, earthy feel',
    description: 'Distinctive slub yarn irregularities give this tee character and superior airflow on warm days. Tailored with clean double-stitched hems.',
    fabric: '100% Slub Cotton (190 GSM)',
    fit: 'Regular Fit',
    washCare: 'Cold machine wash. Do not twist.',
    colors: [
      { name: 'Sage Green', hex: '#778877' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 7,
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

// Helper Functions
function getAllProducts() {
  return PRODUCTS;
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
}

function getProductsByCategory(slug) {
  if (!slug || slug === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.categorySlug === slug);
}

function searchProducts(query) {
  if (!query) return [];
  const q = query.toLowerCase().trim();
  return PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.fabric.toLowerCase().includes(q)
  );
}

function formatINR(val) {
  return '₹' + Number(val).toLocaleString('en-IN');
}
