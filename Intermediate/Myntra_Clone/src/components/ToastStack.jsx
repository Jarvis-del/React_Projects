/**
 * ToastStack
 *
 * Renders a stack of toast notifications in the bottom-right corner.
 *
 * @param {{ toasts: Array<{ id: number, msg: string, type: "ok" | "err" }> }} props
 */
function ToastStack({ toasts }) {
  return (
    <div
      style={{
        position: "fixed", bottom: 20, right: 20,
        zIndex: 9999, display: "flex", flexDirection: "column", gap: 8,
      }}
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          style={{
            background: t.type === "err" ? "#c0392b" : "#1e8449",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            animation: "slideUp 0.3s ease",
          }}
        >
          {t.msg}
        </div>
      ))}
    </div>
  );
}

export default ToastStack;
