import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The brief: "Static export is fine. No CMS, no database, no auth. It's a page."
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
