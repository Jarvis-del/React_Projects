/**
 * Chip
 *
 * A removable filter tag shown in the active-filters row.
 *
 * @param {{ label: string, onRemove: () => void }} props
 */
function Chip({ label, onRemove }) {
  return (
    <span
      style={{
        background: "#fff3f5", border: "1px solid #ff3f6c", color: "#ff3f6c",
        borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700,
        display: "inline-flex", alignItems: "center", gap: 5,
      }}
    >
      {label}
      <span
        onClick={onRemove}
        style={{ cursor: "pointer", fontSize: 15, lineHeight: 1 }}
      >
        ×
      </span>
    </span>
  );
}

export default Chip;
