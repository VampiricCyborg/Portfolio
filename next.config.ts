import type { NextConfig } from "next";

// GitHub Pages serves this repo under /Portfolio. The deploy workflow passes the path in;
// local dev and `npm run build` without it serve from the root.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
