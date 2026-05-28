import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Earthiva herbal powders";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 58px",
          background:
            "linear-gradient(120deg, #f6efe5 0%, #efe6d9 50%, #e7efdb 100%)",
          color: "#233929",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              height: 46,
              width: 46,
              borderRadius: 999,
              border: "2px solid rgba(35,57,41,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            E
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            EARTHIVA
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <p
            style={{
              margin: 0,
              fontSize: 64,
              lineHeight: 1.06,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            Pure. Natural. Real ritual care.
          </p>
          <p style={{ margin: 0, fontSize: 28, lineHeight: 1.3, opacity: 0.84 }}>
            Herbal powders for skin and hair rituals.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
