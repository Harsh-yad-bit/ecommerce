import React, { useState } from "react";

// ---------------------------------------------------------------------------
// THE 51-30 CHRONO — product detail page
// Single-file React component recreating the shared product page UI.
// ---------------------------------------------------------------------------

const THUMBS = [
  { id: 0, label: "front" },
  { id: 1, label: "side" },
  { id: 2, label: "angle" },
  { id: 3, label: "detail" },
];

const COLOR_ROWS = [
  [
    { id: "silver-gunmetal", name: "Silver / Gunmetal", face: "#2b2f33", ring: "#b9bcbe", active: true },
    { id: "all-black", name: "All Black", face: "#111213", ring: "#2a2b2c" },
    { id: "matte-black-green", name: "Matte Black / Surplus", face: "#1c231d", ring: "#33392f" },
    { id: "black-navy", name: "Black / Navy", face: "#161a22", ring: "#232a36" },
    { id: "all-gunmetal", name: "All Gunmetal", face: "#3a3d40", ring: "#54575a" },
    { id: "gunmetal-black", name: "Gunmetal / Black", face: "#2f3234", ring: "#46484a" },
  ],
  [
    { id: "all-gold", name: "All Gold", face: "#a9822f", ring: "#c9a24a" },
    { id: "black-gold", name: "Black / Gold", face: "#181614", ring: "#8a6a2b" },
    { id: "matte-black-forest", name: "Matte Black / Forest", face: "#1a211c", ring: "#2d362e" },
    { id: "black-purple", name: "Black / Purple", face: "#171522", ring: "#2c2740" },
    { id: "all-black-2", name: "All Black II", face: "#0f1011", ring: "#232425" },
    { id: "gunmetal-black-2", name: "Gunmetal / Black II", face: "#2a2c2e", ring: "#3f4143" },
  ],
];

function WatchIllustration({ face = "#2b2f33", ring = "#b9bcbe" }) {
  return (
    <svg viewBox="0 0 600 600" className="watch-svg" role="img" aria-label="THE 51-30 CHRONO watch">
      {/* bracelet - top */}
      <g fill="none" stroke="#9aa0a6" strokeWidth="2">
        <rect x="230" y="20" width="140" height="140" rx="10" fill="#d7dade" stroke="#aeb3b8" />
        <rect x="245" y="35" width="110" height="26" rx="6" fill="#c3c8cd" />
        <rect x="245" y="70" width="110" height="26" rx="6" fill="#c3c8cd" />
        <rect x="245" y="105" width="110" height="26" rx="6" fill="#c3c8cd" />
      </g>
      {/* bracelet - bottom */}
      <g fill="none" stroke="#9aa0a6" strokeWidth="2">
        <rect x="230" y="440" width="140" height="140" rx="10" fill="#d7dade" stroke="#aeb3b8" />
        <rect x="245" y="455" width="110" height="26" rx="6" fill="#c3c8cd" />
        <rect x="245" y="490" width="110" height="26" rx="6" fill="#c3c8cd" />
        <rect x="245" y="525" width="110" height="26" rx="6" fill="#c3c8cd" />
      </g>
      {/* crown left */}
      <rect x="150" y="255" width="30" height="34" rx="4" fill="#8b9096" />
      {/* crown & pushers right */}
      <rect x="420" y="215" width="34" height="22" rx="3" fill="#8b9096" />
      <rect x="420" y="275" width="40" height="26" rx="4" fill="#7f858b" />
      <rect x="420" y="325" width="34" height="22" rx="3" fill="#8b9096" />

      {/* outer bezel */}
      <circle cx="300" cy="300" r="190" fill={ring} stroke="#4a4d50" strokeWidth="3" />
      {/* bezel tick numerals */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i / 36) * Math.PI * 2 - Math.PI / 2;
        const r1 = 178;
        const r2 = i % 3 === 0 ? 160 : 170;
        const x1 = 300 + r1 * Math.cos(angle);
        const y1 = 300 + r1 * Math.sin(angle);
        const x2 = 300 + r2 * Math.cos(angle);
        const y2 = 300 + r2 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6d7176" strokeWidth={i % 3 === 0 ? 2.5 : 1.5} />;
      })}
      {/* inner dial */}
      <circle cx="300" cy="300" r="150" fill={face} stroke="#0c0d0e" strokeWidth="2" />
      <circle cx="300" cy="300" r="146" fill="none" stroke="#454a4f" strokeWidth="1" />

      {/* subdials */}
      <circle cx="255" cy="300" r="32" fill="#22262a" stroke="#54585c" strokeWidth="1.5" />
      <circle cx="345" cy="300" r="32" fill="#22262a" stroke="#54585c" strokeWidth="1.5" />
      <circle cx="300" cy="345" r="26" fill="#22262a" stroke="#54585c" strokeWidth="1.5" />

      {/* logo */}
      <text x="300" y="245" textAnchor="middle" fill="#c7cbce" fontSize="20" fontFamily="Arial, sans-serif" fontWeight="700" letterSpacing="2">NIXON</text>
      <text x="300" y="262" textAnchor="middle" fill="#8d9195" fontSize="9" fontFamily="Arial, sans-serif" letterSpacing="1">300 METER</text>

      {/* hour numerals */}
      <text x="243" y="238" textAnchor="middle" fill="#c7cbce" fontSize="22" fontFamily="Arial, sans-serif">10</text>
      <text x="380" y="248" textAnchor="middle" fill="#c7cbce" fontSize="22" fontFamily="Arial, sans-serif">2</text>
      <text x="225" y="360" textAnchor="middle" fill="#c7cbce" fontSize="22" fontFamily="Arial, sans-serif">8</text>
      <text x="300" y="400" textAnchor="middle" fill="#c7cbce" fontSize="22" fontFamily="Arial, sans-serif">6</text>
      <text x="392" y="368" textAnchor="middle" fill="#c7cbce" fontSize="22" fontFamily="Arial, sans-serif">4</text>

      {/* date window */}
      <rect x="288" y="318" width="24" height="18" fill="#e7e5df" stroke="#54585c" />
      <text x="300" y="332" textAnchor="middle" fill="#111" fontSize="12" fontFamily="Arial, sans-serif">3</text>

      {/* hands */}
      <line x1="300" y1="300" x2="300" y2="200" stroke="#e9ebec" strokeWidth="5" strokeLinecap="round" />
      <line x1="300" y1="300" x2="365" y2="270" stroke="#e9ebec" strokeWidth="5" strokeLinecap="round" />
      <line x1="300" y1="300" x2="300" y2="345" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
      <circle cx="300" cy="300" r="7" fill="#e9ebec" stroke="#0c0d0e" strokeWidth="1.5" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

const SOCIAL = [
  { name: "Twitter", glyph: "𝕏" },
  { name: "Facebook", glyph: "f" },
  { name: "Google+", glyph: "g+" },
  { name: "Pinterest", glyph: "P" },
];

export default function ProductPage() {
  const [activeThumb, setActiveThumb] = useState(3);
  const allColors = [...COLOR_ROWS[0], ...COLOR_ROWS[1]];
  const [selectedColor, setSelectedColor] = useState(allColors[0].id);
  const current = allColors.find((c) => c.id === selectedColor);

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", background: "#fff", color: "#111", padding: "40px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
        {/* ---------------- Left: thumbnails + hero image ---------------- */}
        <div style={{ display: "flex", gap: 24, flex: "1 1 560px", minWidth: 320 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {THUMBS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveThumb(t.id)}
                aria-label={`View ${t.label}`}
                style={{
                  width: 56,
                  height: 56,
                  border: activeThumb === t.id ? "2px solid #111" : "1px solid #d8d8d8",
                  background: "#fff",
                  cursor: "pointer",
                  padding: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {t.id === 1 ? (
                  <div style={{ width: 26, height: 26, borderRadius: "50%", border: "3px solid #b9bcbe" }} />
                ) : (
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: current.face, border: `4px solid ${current.ring}` }} />
                )}
              </button>
            ))}
          </div>

          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 480 }}>
            <WatchIllustration face={current.face} ring={current.ring} />
          </div>
        </div>

        {/* ---------------- Right: product info ---------------- */}
        <div style={{ flex: "1 1 340px", minWidth: 300, paddingTop: 4 }}>
          <span
            style={{
              display: "inline-block",
              background: "#c0392b",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1,
              padding: "3px 8px",
              marginBottom: 10,
            }}
          >
            NEW
          </span>
          <div style={{ fontSize: 12, letterSpacing: 1, color: "#8a8a8a", marginBottom: 6 }}>
            SHADOW FORM COLLECTION
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, lineHeight: 1.05, margin: "0 0 14px" }}>
            THE 51-30
            <br />
            CHRONO
          </h1>

          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
            <span style={{ fontSize: 20, fontWeight: 700 }}>$425.00</span>
            <span style={{ fontSize: 12, color: "#8a8a8a", letterSpacing: 0.5 }}>{allColors.length} COLORS</span>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #eaeaea", margin: "0 0 16px" }} />

          {/* color swatches */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>
            {COLOR_ROWS.map((row, ri) => (
              <div key={ri} style={{ display: "flex", gap: 10 }}>
                {row.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.id)}
                    aria-label={c.name}
                    title={c.name}
                    style={{
                      width: 44,
                      height: 44,
                      padding: 4,
                      border: selectedColor === c.id ? "2px solid #111" : "1px solid #e2e2e2",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        background: c.face,
                        border: `3px solid ${c.ring}`,
                      }}
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.5, marginBottom: 2 }}>
            {current.name.toUpperCase()}
          </div>
          <div style={{ fontSize: 11, color: "#8a8a8a", letterSpacing: 1, marginBottom: 20 }}>IN STOCK</div>

          {/* actions */}
          <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
            <button
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#111",
                color: "#fff",
                border: "none",
                padding: "14px 18px",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1,
                cursor: "pointer",
              }}
            >
              <IconCart />
              ADD TO CART
            </button>
            <button
              aria-label="Add to wishlist"
              style={{
                width: 52,
                border: "1px solid #111",
                background: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconHeart />
            </button>
          </div>

          {/* social */}
          <div style={{ display: "flex", gap: 22 }}>
            {SOCIAL.map((s) => (
              <span key={s.name} title={s.name} style={{ fontSize: 15, color: "#111", cursor: "pointer", fontWeight: 600 }}>
                {s.glyph}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
