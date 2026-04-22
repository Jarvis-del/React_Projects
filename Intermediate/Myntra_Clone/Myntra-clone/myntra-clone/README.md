# Myntra Clone 🛍️

A fully functional, feature-rich e-commerce web application inspired by [Myntra](https://www.myntra.com), built with **React 18**.

## Features

- 🏠 **Home Page** — Hero carousel, category circles, trending products, promo banners
- 🛒 **Product Listing** — Search, filter by gender/brand/discount, sort, sub-category pills
- ❤️ **Wishlist** — Add/remove items with toast notifications
- 🛍️ **Shopping Bag** — Add to cart, remove, price summary with savings
- 🔔 **Toast Notifications** — Contextual feedback for all user actions
- 📱 **Responsive Design** — Adapts gracefully to different screen sizes

## Project Structure

```
myntra-clone/
├── public/
│   └── index.html
├── src/
│   ├── data/             # Static datasets (products, nav, banners, categories)
│   ├── store/            # useReducer state management (cart, wishlist, filters)
│   ├── hooks/            # Custom React hooks
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Card.jsx
│   │   ├── ToastStack.jsx
│   │   ├── SmartImage.jsx
│   │   ├── FilterGroup.jsx
│   │   ├── Chip.jsx
│   │   └── Empty.jsx
│   ├── assets/icons/     # SVG icon components
│   │   └── Icons.jsx
│   ├── pages/            # Page-level components
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── CartPage.jsx
│   │   └── WishlistPage.jsx
│   ├── App.jsx           # Root component & routing logic
│   ├── index.js          # React entry point
│   └── index.css         # Global styles & animations
└── package.json
```

## Getting Started

### Prerequisites
- Node.js >= 14
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/myntra-clone.git
cd myntra-clone

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

## Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI library |
| useReducer | State management (cart, wishlist, filters) |
| CSS-in-JS (inline) | Component scoped styling |
| Unsplash | Product images |

## Extending the Project

- **Backend**: Replace `src/data/products.js` with API calls (see `src/data/api.js` template)
- **Auth**: Add a login/profile page and protect the cart/wishlist
- **Routing**: Swap page state with `react-router-dom` for real URLs
- **Payments**: Integrate Razorpay or Stripe on the checkout button

## License

MIT © 2025
