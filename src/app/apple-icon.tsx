import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: "84px",
            fontWeight: 900,
            fontFamily: "sans-serif",
          }}
        >
          FA
        </div>
      </div>
    ),
    { ...size }
  );
}
