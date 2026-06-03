import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Fix: parent folder (e.g. C:\Users\...\) also has package-lock.json, so Turbopack
  // was picking the wrong workspace root and could fail or compile the wrong tree.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
