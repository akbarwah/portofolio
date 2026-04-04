import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Di local dev: skip server-side image optimization untuk menghindari
    // ISP transparent proxy yang men-intercept koneksi Node.js ke i.postimg.cc.
    // Di production (Vercel): optimasi berjalan normal.
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
    ],
  },
};

export default nextConfig;