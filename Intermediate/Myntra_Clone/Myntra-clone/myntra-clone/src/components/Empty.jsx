/**
 * Empty
 *
 * Full-page empty-state placeholder with an optional CTA button.
 *
 * @param {{
 *   label: string,
 *   sub: string,
 *   action?: () => void,
 *   actionLabel?: string
 * }} props
 */
function Empty({ label, sub, action, actionLabel }) {
  return (
    <div style={{ textAlign: "center", padding: "70px 0", color: "#94969f" }}>
      <div style={{ fontSize: 64, marginBottom: 14 }}>😔</div>
      <p style={{ fontSize: 19, fontWeight: 700, color: "#282c3f" }}>{label}</p>
      <p style={{ marginTop: 6, fontSize: 14 }}>{sub}</p>
      {action && (
        <button
          onClick={action}
          style={{
            marginTop: 18,
            background: "#ff3f6c", color: "#fff",
            border: "none", padding: "11px 26px",
            borderRadius: 4, fontWeight: 700, fontSize: 13, cursor: "pointer",
          }}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default Empty;
