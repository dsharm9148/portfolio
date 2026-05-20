import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Diya Sharma — personal site";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f6f3ee",
          color: "#15130f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 90px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6b665d",
            fontFamily: "ui-monospace, Menlo, monospace",
          }}
        >
          <span>diyasharma.vercel.app</span>
          <span>Portfolio</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 138,
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              fontWeight: 400,
            }}
          >
            Diya Sharma
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              lineHeight: 1.3,
              color: "#15130f",
              opacity: 0.78,
              maxWidth: 880,
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
            }}
          >
            Computer Science at Georgia Tech — projects, writing, and a bit
            of photography.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6b665d",
            fontFamily: "ui-monospace, Menlo, monospace",
          }}
        >
          <span>About</span>
          <span>·</span>
          <span>Projects</span>
          <span>·</span>
          <span>Blog</span>
          <span>·</span>
          <span>Photos</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
