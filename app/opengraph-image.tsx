import { ImageResponse } from "next/og";
import { profile } from "@/app/lib/content/profile";
import { dictionaries } from "@/app/lib/i18n/dictionaries";

export const alt = dictionaries.en.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STAGES = ["Extract", "Transform", "Load"];

// Colors mirror the tokens in app/globals.css (ImageResponse can't read CSS vars).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "#08090a",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 6,
              background: "#4fd8a8",
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#a3a6ae" }}>
            {dictionaries.en.hero.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              color: "#f2f3f5",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#80838b", marginTop: 24 }}>
            Python · SQL · PostgreSQL · ETL
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {STAGES.map((stage, index) => (
            <div key={stage} style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "#0e0f11",
                  fontSize: 24,
                  color: "#f2f3f5",
                }}
              >
                {stage}
              </div>
              {index < STAGES.length - 1 && (
                <div style={{ display: "flex", width: 48, height: 2, background: "#4fd8a8" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
