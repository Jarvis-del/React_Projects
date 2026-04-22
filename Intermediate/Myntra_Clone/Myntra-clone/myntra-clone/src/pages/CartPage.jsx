import SmartImage from "../components/SmartImage";
import Empty from "../components/Empty";

/**
 * CartPage
 *
 * Shopping bag view with item list and price summary sidebar.
 *
 * @param {{ state: object, dispatch: Function, setPage: Function }} props
 */
function CartPage({ state, dispatch, setPage }) {
  const total   = state.cart.reduce((s, i) => s + i.price, 0);
  const mrpTot  = state.cart.reduce((s, i) => s + i.mrp,   0);
  const savings = mrpTot - total;

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: "#282c3f", marginBottom: 22 }}>
        My Bag ({state.cart.length})
      </h2>

      {state.cart.length === 0 ? (
        <Empty
          label="Your bag is empty"
          sub="Add items you like to your bag"
          action={() => setPage("home")}
          actionLabel="Continue Shopping"
        />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, alignItems: "start" }}>

          {/* ── Cart items ────────────────────────────────────── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {state.cart.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#fff", borderRadius: 10, padding: 16,
                  display: "flex", gap: 14,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ width: 96, height: 114, flexShrink: 0, borderRadius: 8, overflow: "hidden" }}>
                  <SmartImage src={item.img} alt={item.name} style={{ width: "100%", height: "100%" }} />
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ color: "#94969f", fontWeight: 700, fontSize: 12 }}>{item.brand}</p>
                  <p style={{ fontWeight: 600, color: "#282c3f", marginTop: 3 }}>{item.name}</p>
                  <p style={{ color: "#94969f", fontSize: 12, marginTop: 3 }}>Size: M &nbsp;|&nbsp; Qty: 1</p>
                  <div style={{ display: "flex", gap: 8, marginTop: 10, alignItems: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: 15 }}>₹{item.price.toLocaleString()}</span>
                    <span style={{ fontSize: 12, color: "#b0b0b0", textDecoration: "line-through" }}>
                      ₹{item.mrp.toLocaleString()}
                    </span>
                    <span style={{ fontSize: 12, color: "#ff905a", fontWeight: 700 }}>
                      {item.discount}% OFF
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                  style={{
                    background: "none", border: "none", color: "#ff3f6c",
                    fontWeight: 700, fontSize: 13, cursor: "pointer", alignSelf: "flex-start",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* ── Price summary ─────────────────────────────────── */}
          <div
            style={{
              background: "#fff", borderRadius: 10, padding: 22,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            <p
              style={{
                fontWeight: 800, fontSize: 12, color: "#94969f",
                letterSpacing: 1, textTransform: "uppercase", marginBottom: 14,
              }}
            >
              Price Details
            </p>

            {[
              ["Total MRP",       `₹${mrpTot.toLocaleString()}`,   null],
              ["Discount on MRP", `-₹${savings.toLocaleString()}`, "#1e8449"],
              ["Delivery",        "FREE",                           "#1e8449"],
            ].map(([k, v, c]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 14 }}>
                <span>{k}</span>
                <span style={{ color: c || "#282c3f", fontWeight: c ? 700 : 400 }}>{v}</span>
              </div>
            ))}

            <div
              style={{
                borderTop: "1px solid #eee", paddingTop: 12,
                display: "flex", justifyContent: "space-between",
                fontWeight: 800, fontSize: 16,
              }}
            >
              <span>Total Amount</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div
              style={{
                background: "#e8f9f0", color: "#1e8449",
                borderRadius: 6, padding: "9px 12px",
                fontSize: 12, fontWeight: 700, marginTop: 12,
              }}
            >
              🎉 You save ₹{savings.toLocaleString()} on this order!
            </div>

            <button
              style={{
                width: "100%", background: "#ff3f6c", color: "#fff",
                border: "none", padding: 14, borderRadius: 4,
                fontWeight: 800, fontSize: 14, cursor: "pointer",
                marginTop: 14, letterSpacing: 0.5,
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default CartPage;
