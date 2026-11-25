import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

const NODE = { position: "absolute", width: 9, height: 9, borderRadius: 2 } as const;

// Same two-sources-one-sink DAG as the LogoMark in the header.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#08090a",
          borderRadius: 7,
        }}
      >
        <div style={{ ...NODE, left: 5, top: 5, background: "#f2f3f5" }} />
        <div style={{ ...NODE, left: 5, top: 18, background: "#f2f3f5" }} />
        <div style={{ ...NODE, left: 18, top: 11.5, background: "#4fd8a8" }} />
      </div>
    ),
    { ...size }
  );
}
