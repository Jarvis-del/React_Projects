/**
 * FilterGroup
 *
 * A labelled group of radio-button filter options.
 *
 * @param {{
 *   label: string,
 *   options: (string | { v: string, l: string })[],
 *   value: string,
 *   name: string,
 *   onChange: (value: string) => void
 * }} props
 */
function FilterGroup({ label, options, value, name, onChange }) {
  const opts = options.map((o) =>
    typeof o === "string" ? { v: o, l: o } : o
  );

  return (
    <div>
      <p
        style={{
          fontWeight: 700, fontSize: 11, color: "#94969f",
          letterSpacing: 1, textTransform: "uppercase",
          marginBottom: 10, borderBottom: "1px solid #eee", paddingBottom: 6,
        }}
      >
        {label}
      </p>
      {opts.map(({ v, l }) => (
        <label
          key={v}
          style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer" }}
        >
          <input
            type="radio"
            name={name}
            checked={value === v}
            onChange={() => onChange(v)}
            style={{ accentColor: "#ff3f6c" }}
          />
          <span
            style={{
              fontSize: 13,
              color: value === v ? "#ff3f6c" : "#3e4152",
              fontWeight: value === v ? 700 : 400,
            }}
          >
            {l}
          </span>
        </label>
      ))}
    </div>
  );
}

export default FilterGroup;
