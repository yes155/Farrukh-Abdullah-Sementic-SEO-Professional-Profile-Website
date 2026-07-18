import { ImageResponse } from "next/og";

export const alt = "Farrukh Abdullah — Semantic SEO & Generative Engine Optimization Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              backgroundColor: "#22d3ee",
              color: "#000000",
              fontWeight: 900,
              fontSize: "28px",
            }}
          >
            FA
          </div>
          <div style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
            Farrukh Abdullah
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#ffffff",
              fontSize: "60px",
              fontWeight: 900,
              lineHeight: 1.1,
              textTransform: "uppercase",
              letterSpacing: "-1px",
            }}
          >
            <div style={{ display: "flex" }}>You don&apos;t rank anymore</div>
            <div style={{ display: "flex", color: "#22d3ee" }}>you get cited.</div>
          </div>
          <div style={{ color: "#a3a3a3", fontSize: "26px", fontWeight: 500 }}>
            Semantic SEO &amp; Generative Engine Optimization Strategist
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {["Semantic SEO", "GEO", "Local SEO"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                border: "2px solid #ffffff",
                color: "#ffffff",
                padding: "8px 20px",
                fontSize: "18px",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
