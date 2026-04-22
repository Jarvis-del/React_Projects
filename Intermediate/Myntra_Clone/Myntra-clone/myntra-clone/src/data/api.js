/**
 * api.js — Backend API integration template
 *
 * Replace the static data in `products.js` with these functions once you have
 * a real backend (Node/Express, Django, Supabase, etc.).
 *
 * Usage example inside a component:
 *   const [products, setProducts] = useState([]);
 *   useEffect(() => { fetchProducts().then(setProducts); }, []);
 */

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

/**
 * Fetch all products (optionally filtered server-side).
 * @param {Object} params - Query params like { gender, brand, discount, sort }
 * @returns {Promise<import('./products').Product[]>}
 */
export async function fetchProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/products?${query}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

/**
 * Fetch a single product by ID.
 * @param {number} id
 * @returns {Promise<import('./products').Product>}
 */
export async function fetchProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error(`Product ${id} not found`);
  return res.json();
}

/**
 * Post a new order to the backend.
 * @param {{ cart: Array, address: Object }} orderData
 * @returns {Promise<{ orderId: string }>}
 */
export async function placeOrder(orderData) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  if (!res.ok) throw new Error("Failed to place order");
  return res.json();
}
