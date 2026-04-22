/**
 * Hero carousel banners for the home page.
 * @typedef {{ title: string, sub: string, cta: string, img: string }} Banner
 */

/** @type {Banner[]} */
export const BANNERS = [
  {
    title: "End of Season Sale",
    sub: "UP TO 80% OFF",
    cta: "Shop Now",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=420&fit=crop",
  },
  {
    title: "New Arrivals",
    sub: "Fresh Styles Just In",
    cta: "Explore Now",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=420&fit=crop",
  },
  {
    title: "Premium Brands",
    sub: "Nike · Zara · H&M · Levi's",
    cta: "Discover",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=420&fit=crop",
  },
];

/**
 * Category circle data shown on the home page.
 * @typedef {{ name: string, img: string }} CategoryCircle
 */

/** @type {CategoryCircle[]} */
export const CAT_CIRCLES = [
  { name: "Men",    img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=200&h=200&fit=crop" },
  { name: "Women",  img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=200&fit=crop" },
  { name: "Kids",   img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop" },
  { name: "Home",   img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop" },
  { name: "Beauty", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=200&fit=crop" },
  { name: "Sport",  img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=200&h=200&fit=crop" },
];
