import SmartImage from "../components/SmartImage";
import Card from "../components/Card";
import { BANNERS, CAT_CIRCLES } from "../data/banners";
import { ALL_PRODUCTS } from "../data/products";

/**
 * HomePage
 *
 * Displays the hero carousel, perk bar, category circles,
 * trending products, promo banner, and full product grid.
 *
 * @param {{
 *   slide: number,
 *   setSlide: Function,
 *   goProducts: Function,
 *   state: object,
 *   dispatch: Function,
 *   inCart: Function,
 *   inWish: Function,
 *   toast: Function
 * }} props
 */
function HomePage({ slide, setSlide, goProducts, state, dispatch, inCart, inWish, toast }) {
  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "20px" }}>

      {/* ── Hero Carousel ───────────────────────────────────── */}
      <div
        style={{
          position: "relative", borderRadius: 12, overflow: "hidden",
          height: 400, marginBottom: 20,
          boxShadow: "0 6px 24px rgba(0,0,0,0.12)", background: "#111",
        }}
      >
        {BANNERS.map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute", inset: 0,
              opacity: i === slide ? 1 : 0,
              transition: "opacity 0.9s ease",
              pointerEvents: i === slide ? "auto" : "none",
            }}
          >
            <SmartImage src={b.img} alt={b.title} style={{ width: "100%", height: "100%" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.52)" }}>
              <div style={{ position: "absolute", left: 52, top: "50%", transform: "translateY(-50%)" }}>
                <p
                  style={{
                    color: "#ff3f6c", fontSize: 12, fontWeight: 700,
                    letterSpacing: 3, textTransform: "uppercase", marginBottom: 8,
                  }}
                >
                  ✦ {b.sub}
                </p>
                <h1
                  style={{
                    color: "#fff", fontSize: 40, fontWeight: 800,
                    fontFamily: "Georgia,serif", lineHeight: 1.2, marginBottom: 20,
                  }}
                >
                  {b.title}
                </h1>
                <button
                  onClick={() => goProducts("All")}
                  style={{
                    background: "#ff3f6c", color: "#fff", border: "none",
                    padding: "13px 32px", borderRadius: 4,
                    fontSize: 14, fontWeight: 700, cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(255,63,108,0.45)", letterSpacing: 0.5,
                  }}
                >
                  {b.cta} →
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div
          style={{
            position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: 7,
          }}
        >
          {BANNERS.map((_, i) => (
            <div
              key={i}
              onClick={() => setSlide(i)}
              style={{
                width: i === slide ? 24 : 8, height: 8, borderRadius: 4,
                background: i === slide ? "#ff3f6c" : "rgba(255,255,255,0.5)",
                cursor: "pointer", transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Perks bar ───────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(135deg,#ff3f6c,#ff6b9d)",
          borderRadius: 10, padding: "12px 20px",
          display: "flex", justifyContent: "space-around",
          marginBottom: 22, color: "#fff",
        }}
      >
        {["🚚 Free Delivery on ₹499+", "↩ 30-Day Returns", "🔒 Secure Payments", "⭐ 100% Genuine"].map((x) => (
          <span key={x} style={{ fontSize: 12, fontWeight: 600 }}>{x}</span>
        ))}
      </div>

      {/* ── Category circles ────────────────────────────────── */}
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#282c3f", marginBottom: 14 }}>
        Shop by Category
      </h2>
      <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 14, marginBottom: 28 }}>
        {CAT_CIRCLES.map((c) => (
          <div
            key={c.name}
            onClick={() => goProducts(c.name)}
            style={{ flexShrink: 0, cursor: "pointer", textAlign: "center" }}
          >
            <div
              style={{
                width: 90, height: 90, borderRadius: "50%",
                overflow: "hidden", border: "3px solid #eee",
                boxShadow: "0 3px 12px rgba(0,0,0,0.1)", transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <SmartImage src={c.img} alt={c.name} style={{ width: "100%", height: "100%" }} />
            </div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#282c3f", marginTop: 7 }}>{c.name}</p>
          </div>
        ))}
      </div>

      {/* ── Trending Now ────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#282c3f" }}>Trending Now 🔥</h2>
        <button
          onClick={() => goProducts("All")}
          style={{
            background: "none", border: "2px solid #ff3f6c", color: "#ff3f6c",
            padding: "6px 16px", borderRadius: 4, fontWeight: 700, fontSize: 13, cursor: "pointer",
          }}
        >
          View All
        </button>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14, marginBottom: 36 }}
      >
        {ALL_PRODUCTS.filter((p) => p.tag).slice(0, 8).map((p) => (
          <Card key={p.id} p={p} dispatch={dispatch} inCart={inCart} inWish={inWish} toast={toast} />
        ))}
      </div>

      {/* ── Promo banner ────────────────────────────────────── */}
      <div
        style={{
          background: "#1a1a2e", borderRadius: 12, padding: "28px 36px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 28,
        }}
      >
        <div>
          <p
            style={{
              color: "#ff3f6c", fontSize: 11, fontWeight: 700,
              letterSpacing: 3, textTransform: "uppercase", marginBottom: 6,
            }}
          >
            Top Brands
          </p>
          <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 800, fontFamily: "Georgia,serif" }}>
            Style is Everything
          </h2>
          <p style={{ color: "#aaa", fontSize: 13, marginTop: 6 }}>
            Nike · Zara · H&M · Levi's · Mango · W
          </p>
        </div>
        <button
          onClick={() => goProducts("All")}
          style={{
            background: "#ff3f6c", color: "#fff", border: "none",
            padding: "12px 28px", borderRadius: 4, fontWeight: 700, fontSize: 14, cursor: "pointer",
          }}
        >
          Explore Brands
        </button>
      </div>

      {/* ── All Products ────────────────────────────────────── */}
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "#282c3f", marginBottom: 14 }}>All Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
        {ALL_PRODUCTS.map((p) => (
          <Card key={p.id} p={p} dispatch={dispatch} inCart={inCart} inWish={inWish} toast={toast} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
