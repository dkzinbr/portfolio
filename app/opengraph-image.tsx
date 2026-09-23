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
          background: "#050816",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(37,99,235,0.45), transparent 45%), radial-gradient(circle at 85% 80%, rgba(34,211,238,0.28), transparent 45%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#60a5fa",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          {"<"}Henri {"/"}
          {">"}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 74,
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          {profile.fullName}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 40,
            color: "#93c5fd",
          }}
        >
          {profile.role}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 28,
            color: "#94a3b8",
          }}
        >
          React · Next.js · TypeScript · Node.js · Tailwind
        </div>
      </div>
    ),
    size,
  );
}
