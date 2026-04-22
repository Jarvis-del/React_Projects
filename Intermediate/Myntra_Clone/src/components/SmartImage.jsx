import { useState } from "react";

/**
 * SmartImage
 *
 * Renders an image with a loading placeholder and a graceful fallback emoji
 * when the source URL fails to load.
 *
 * @param {{ src: string, alt: string, style?: React.CSSProperties }} props
 */
function SmartImage({ src, alt, style }) {
  const [loaded, setLoaded] = useState(false);
  const [err, setErr]       = useState(false);

  return (
    <div style={{ ...style, position: "relative", background: "#f0f0f0", overflow: "hidden" }}>
      {!loaded && !err && (
        <div
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#ccc", fontSize: 12,
          }}
        >
          Loading…
        </div>
      )}

      {!err && (
        <img
          src={src}
          alt={alt}
          crossOrigin="anonymous"
          onLoad={() => setLoaded(true)}
          onError={() => setErr(true)}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            opacity: loaded ? 1 : 0, transition: "opacity 0.3s",
          }}
        />
      )}

      {err && (
        <div
          style={{
            width: "100%", height: "100%",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "#f5f5f5", color: "#bbb",
          }}
        >
          <span style={{ fontSize: 36 }}>👕</span>
          <span style={{ fontSize: 11, marginTop: 4 }}>{alt}</span>
        </div>
      )}
    </div>
  );
}

export default SmartImage;
