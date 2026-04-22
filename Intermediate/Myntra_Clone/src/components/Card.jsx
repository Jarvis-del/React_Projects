import { useState } from "react";
import SmartImage from "./SmartImage";
import { HeartIcon, StarIcon } from "../assets/icons/Icons";

/**
 * Card
 *
 * Product card with hover effects, wishlist toggle, and add-to-bag button.
 *
 * @param {{
 *   p: import('../data/products').Product,
 *   dispatch: Function,
 *   inCart: (id: number) => boolean,
 *   inWish: (id: number) => boolean,
 *   toast: (msg: string, type?: string) => void
 * }} props
 */
function Card({ p, dispatch, inCart, inWish, toast }) {
  const [hov, setHov] = useState(false);
  const wished = inWish(p.id);
  const carted = inCart(p.id);

  const handleWishlist = (e) => {
    e.stopPropagation();
    dispatch({ type: "TOGGLE_WISHLIST", payload: p });
    toast(wished ? "Removed from wishlist" : "Added to Wishlist ♡");
  };

  const handleAddToBag = (e) => {
    e.stopPropagation();
    if (!carted) {
      dispatch({ type: "ADD_TO_CART", payload: p });
      toast(`${p.name} added to bag 🛍`);
    }
  };

  const tagColor =
    p.tag === "Bestseller" ? "#e67e22" :
    p.tag === "New"        ? "#1e8449" :
                             "#ff3f6c";

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "#fff", borderRadius: 10, overflow: "hidden", cursor: "pointer",
        boxShadow: hov ? "0 8px 28px rgba(0,0,0,0.13)" : "0 2px 8px rgba(0,0,0,0.07)",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "all 0.22s ease",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* ── Image ───────────────────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            width: "100%", height: 260, overflow: "hidden",
            transition: "transform 0.4s ease",
            transform: hov ? "scale(1.06)" : "scale(1)",
          }}
        >
          <SmartImage src={p.img} alt={p.name} style={{ width: "100%", height: "100%" }} />
        </div>

        {p.tag && (
          <span
            style={{
              position: "absolute", top: 10, left: 10,
              background: tagColor, color: "#fff",
              fontSize: 10, fontWeight: 700,
              padding: "3px 9px", borderRadius: 20,
            }}
          >
            {p.tag}
          </span>
        )}

        <button
          onClick={handleWishlist}
          style={{
            position: "absolute", top: 10, right: 10,
            background: "#fff", border: "none", borderRadius: "50%",
            width: 34, height: 34,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            opacity: hov || wished ? 1 : 0, transition: "opacity 0.2s",
          }}
        >
          <HeartIcon on={wished} />
        </button>
      </div>

      {/* ── Info ────────────────────────────────────────────── */}
      <div style={{ padding: "11px 13px 13px", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ fontSize: 12, color: "#94969f", fontWeight: 600, marginBottom: 2 }}>{p.brand}</p>
        <p
          style={{
            fontSize: 13, color: "#282c3f", fontWeight: 500, marginBottom: 7,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}
        >
          {p.name}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
          <span style={{ fontWeight: 800, fontSize: 14, color: "#282c3f" }}>
            ₹{p.price.toLocaleString()}
          </span>
          <span style={{ fontSize: 12, color: "#b0b0b0", textDecoration: "line-through" }}>
            ₹{p.mrp.toLocaleString()}
          </span>
          <span style={{ fontSize: 12, color: "#ff905a", fontWeight: 700 }}>
            ({p.discount}% OFF)
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 11 }}>
          <span
            style={{
              background: "#1e8449", color: "#fff",
              borderRadius: 4, padding: "2px 6px",
              fontSize: 11, fontWeight: 700,
              display: "flex", alignItems: "center", gap: 3,
            }}
          >
            {p.rating} <StarIcon />
          </span>
          <span style={{ fontSize: 11, color: "#94969f" }}>
            ({p.reviews.toLocaleString()})
          </span>
        </div>

        <button
          onClick={handleAddToBag}
          style={{
            width: "100%", padding: "9px 0", marginTop: "auto",
            background: carted ? "#f0f0f0" : "#ff3f6c",
            color: carted ? "#aaa" : "#fff",
            border: "none", borderRadius: 4,
            fontSize: 12, fontWeight: 700,
            cursor: carted ? "default" : "pointer",
            letterSpacing: 0.5, transition: "background 0.2s",
          }}
        >
          {carted ? "✓ ADDED TO BAG" : "ADD TO BAG"}
        </button>
      </div>
    </div>
  );
}

export default Card;
