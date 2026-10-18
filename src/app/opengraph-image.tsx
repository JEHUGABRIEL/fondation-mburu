import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} - ${site.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/images/logo.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 88px",
          background: "#ffffff",
          color: "#121512",
          borderBottom: "18px solid #1e780c",
        }}
      >
        <img
          src={logoSrc}
          alt=""
          width={260}
          height={260}
          style={{ borderRadius: 32, border: "1px solid #e2e6e3" }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 24, color: "#1e780c", letterSpacing: 1.5 }}>
            {site.tagline.toUpperCase()}
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, marginTop: 12 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 42, lineHeight: 1.25, marginTop: 8, color: "#1e780c" }}>
            {site.slogan}
          </div>
          <div style={{ fontSize: 28, marginTop: 28, color: "#4d565c" }}>
            {site.location}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
