import { ImageResponse } from "next/og";

import { profile } from "@/src/data/profile";

export const alt = `${profile.fullName} — ${profile.role}`;

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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#07090f",
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px), radial-gradient(circle at 85% 20%, rgba(56,189,248,0.22), transparent 38%)",
          backgroundSize: "72px 72px, 72px 72px, 100% 100%",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#7dd3fc",
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          PORTFÓLIO / DESENVOLVIMENTO FULL-STACK
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          {profile.fullName}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 36,
            color: "#e2e8f0",
          }}
        >
          Interfaces claras. Integrações confiáveis.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 24,
            color: "#9aa4b5",
          }}
        >
          React · Next.js · TypeScript · Node.js
        </div>
      </div>
    ),
    size,
  );
}
