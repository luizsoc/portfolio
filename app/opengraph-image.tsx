import { ImageResponse } from "next/og";
import { profile } from "@/app/lib/content/profile";
import { dictionaries } from "@/app/lib/i18n/dictionaries";

export const alt = dictionaries.en.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          justifyContent: "center",
          padding: "0 96px",
          background: "#05080c",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 6,
            borderRadius: 3,
            background: "#22d3ee",
            marginBottom: 40,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 96,
            color: "#e7edf3",
            lineHeight: 1.1,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 48,
            color: "#67e8f9",
            marginTop: 16,
          }}
        >
          {dictionaries.en.hero.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#93a1b0",
            marginTop: 32,
          }}
        >
          Python · Java · C#
        </div>
      </div>
    ),
    { ...size }
  );
}
