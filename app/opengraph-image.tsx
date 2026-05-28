import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Earthiva | Rooted In Nature";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, #f6efe5 0%, #efe6d9 52%, #e7efdb 100%)",
          color: "#233929",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              height: 56,
              width: 56,
              borderRadius: 999,
              border: "2px solid rgba(35,57,41,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            E
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 44,
                fontWeight: 700,
                letterSpacing: 4,
              }}
            >
              EARTHIVA
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 16,
                letterSpacing: 7,
                opacity: 0.8,
                textTransform: "uppercase",
              }}
            >
              Rooted In Nature
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <p
            style={{
              margin: 0,
              fontSize: 74,
              lineHeight: 1.03,
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Pure. Natural. Real ritual care.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 30,
              opacity: 0.82,
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Herbal powders for skin and hair rituals with an earthy, ingredient-first
            experience.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
