/**
 * @typedef {Object} Product
 * @property {number}  id
 * @property {string}  name
 * @property {string}  brand
 * @property {string}  gender      - Men | Women | Kids | Beauty | Home | Sport
 * @property {string}  subCategory
 * @property {number}  price       - Selling price (INR)
 * @property {number}  mrp         - Original MRP (INR)
 * @property {number}  discount    - Discount percentage
 * @property {number}  rating
 * @property {number}  reviews
 * @property {string}  tag         - "New" | "Bestseller" | "Trending" | ""
 * @property {string}  img         - Image URL
 */

/** @type {Product[]} */
export const ALL_PRODUCTS = [
  // ── MEN ───────────────────────────────────────────────────────────────────
  {
    id: 1, name: "Slim Fit Chinos", brand: "Zara",
    gender: "Men", subCategory: "Bottomwear",
    price: 1799, mrp: 2999, discount: 40, rating: 4.1, reviews: 876,
    tag: "New",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 2, name: "Oversized Graphic Tee", brand: "H&M",
    gender: "Men", subCategory: "Topwear",
    price: 699, mrp: 999, discount: 30, rating: 4.5, reviews: 3210,
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 3, name: "Running Sneakers", brand: "Nike",
    gender: "Men", subCategory: "Footwear",
    price: 3499, mrp: 4999, discount: 30, rating: 4.7, reviews: 5620,
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 4, name: "Linen Blazer", brand: "Zara",
    gender: "Men", subCategory: "Topwear",
    price: 2999, mrp: 4999, discount: 40, rating: 4.2, reviews: 445,
    tag: "New",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4b4012?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 5, name: "Slim Fit Jeans", brand: "Levi's",
    gender: "Men", subCategory: "Bottomwear",
    price: 1999, mrp: 2999, discount: 33, rating: 4.6, reviews: 7843,
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 6, name: "Casual Oxford Shirt", brand: "H&M",
    gender: "Men", subCategory: "Topwear",
    price: 899, mrp: 1499, discount: 40, rating: 4.2, reviews: 1876,
    tag: "New",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 7, name: "Canvas Backpack", brand: "Mango",
    gender: "Men", subCategory: "Bags",
    price: 1799, mrp: 2799, discount: 36, rating: 4.0, reviews: 654,
    tag: "",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 8, name: "Sports Track Shorts", brand: "Nike",
    gender: "Men", subCategory: "Activewear",
    price: 999, mrp: 1599, discount: 37, rating: 4.4, reviews: 2100,
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&h=500&fit=crop&crop=center",
  },

  // ── WOMEN ─────────────────────────────────────────────────────────────────
  {
    id: 9, name: "Floral Wrap Maxi Dress", brand: "H&M",
    gender: "Women", subCategory: "Dresses",
    price: 1299, mrp: 2599, discount: 50, rating: 4.3, reviews: 1204,
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 10, name: "High-Waist Trousers", brand: "Zara",
    gender: "Women", subCategory: "Bottomwear",
    price: 1599, mrp: 2499, discount: 36, rating: 4.3, reviews: 980,
    tag: "New",
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 11, name: "Embroidered Kurti Set", brand: "W",
    gender: "Women", subCategory: "Ethnic",
    price: 1499, mrp: 2499, discount: 40, rating: 4.3, reviews: 2104,
    tag: "",
    img: "https://images.unsplash.com/photo-1583391733956-62e8d4e08c59?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 12, name: "Block Heel Sandals", brand: "Zara",
    gender: "Women", subCategory: "Footwear",
    price: 2499, mrp: 3999, discount: 37, rating: 4.3, reviews: 987,
    tag: "",
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 13, name: "Leather Crossbody Bag", brand: "Mango",
    gender: "Women", subCategory: "Bags",
    price: 2199, mrp: 3499, discount: 37, rating: 4.4, reviews: 892,
    tag: "",
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 14, name: "Sports Bra", brand: "Nike",
    gender: "Women", subCategory: "Activewear",
    price: 1299, mrp: 1999, discount: 35, rating: 4.5, reviews: 3421,
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 15, name: "Puff Sleeve Top", brand: "H&M",
    gender: "Women", subCategory: "Topwear",
    price: 799, mrp: 1299, discount: 38, rating: 4.1, reviews: 760,
    tag: "New",
    img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 16, name: "Denim Jacket", brand: "Levi's",
    gender: "Women", subCategory: "Topwear",
    price: 2299, mrp: 3499, discount: 34, rating: 4.6, reviews: 1540,
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=400&h=500&fit=crop&crop=center",
  },

  // ── KIDS ──────────────────────────────────────────────────────────────────
  {
    id: 17, name: "Cartoon Print T-Shirt", brand: "H&M",
    gender: "Kids", subCategory: "Topwear",
    price: 499, mrp: 799, discount: 38, rating: 4.4, reviews: 540,
    tag: "New",
    img: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 18, name: "Denim Dungaree", brand: "Zara",
    gender: "Kids", subCategory: "Bottomwear",
    price: 999, mrp: 1599, discount: 37, rating: 4.3, reviews: 320,
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 19, name: "Sneaker Shoes", brand: "Nike",
    gender: "Kids", subCategory: "Footwear",
    price: 1499, mrp: 2199, discount: 32, rating: 4.5, reviews: 780,
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 20, name: "Floral Frock", brand: "H&M",
    gender: "Kids", subCategory: "Dresses",
    price: 799, mrp: 1299, discount: 38, rating: 4.2, reviews: 290,
    tag: "",
    img: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=400&h=500&fit=crop&crop=center",
  },

  // ── BEAUTY ────────────────────────────────────────────────────────────────
  {
    id: 21, name: "Matte Lipstick Set", brand: "Mango",
    gender: "Beauty", subCategory: "Makeup",
    price: 599, mrp: 999, discount: 40, rating: 4.5, reviews: 2300,
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1586495777744-4e6232bf4eff?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 22, name: "Glow Serum", brand: "W",
    gender: "Beauty", subCategory: "Skincare",
    price: 1299, mrp: 1999, discount: 35, rating: 4.6, reviews: 1870,
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 23, name: "Perfume EDP 100ml", brand: "Zara",
    gender: "Beauty", subCategory: "Fragrance",
    price: 2199, mrp: 3299, discount: 33, rating: 4.7, reviews: 4200,
    tag: "New",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=500&fit=crop&crop=center",
  },

  // ── HOME ──────────────────────────────────────────────────────────────────
  {
    id: 24, name: "Velvet Cushion Set", brand: "H&M",
    gender: "Home", subCategory: "Decor",
    price: 1199, mrp: 1799, discount: 33, rating: 4.2, reviews: 430,
    tag: "",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 25, name: "Ceramic Mug Set", brand: "Mango",
    gender: "Home", subCategory: "Kitchen",
    price: 699, mrp: 1099, discount: 36, rating: 4.4, reviews: 760,
    tag: "New",
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 26, name: "Fairy Light String", brand: "W",
    gender: "Home", subCategory: "Decor",
    price: 499, mrp: 799, discount: 37, rating: 4.3, reviews: 980,
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop&crop=center",
  },

  // ── SPORT ─────────────────────────────────────────────────────────────────
  {
    id: 27, name: "Yoga Mat Premium", brand: "Nike",
    gender: "Sport", subCategory: "Equipment",
    price: 1299, mrp: 1999, discount: 35, rating: 4.6, reviews: 1540,
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 28, name: "Running Track Pants", brand: "Nike",
    gender: "Sport", subCategory: "Activewear",
    price: 1499, mrp: 2299, discount: 34, rating: 4.4, reviews: 870,
    tag: "New",
    img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop&crop=center",
  },
  {
    id: 29, name: "Protein Shaker Bottle", brand: "Mango",
    gender: "Sport", subCategory: "Equipment",
    price: 399, mrp: 699, discount: 43, rating: 4.3, reviews: 2100,
    tag: "Trending",
    img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=500&fit=crop&crop=center",
  },
];
