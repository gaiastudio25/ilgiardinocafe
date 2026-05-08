import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F2EC",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            letterSpacing: "0.05em",
            color: "#2D2D2D",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Bruma Café
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#4A6741",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          La pausa que el día necesita
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 18,
            color: "#6B6B6B",
          }}
        >
          Café de especialidad · Montevideo, Uruguay
        </div>
      </div>
    ),
    { ...size }
  );
}
