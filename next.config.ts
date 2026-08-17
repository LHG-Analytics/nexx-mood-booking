import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // A stray pnpm-lock.yaml in the user's home directory made Next infer that
  // folder as the workspace root, which decides what gets traced into the
  // standalone bundle we ship in Docker. Pin it to this project.
  outputFileTracingRoot: __dirname,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    // Required from Next.js 16 on. 75 is next/image's default (used by any
    // <Image> without an explicit quality prop); 85 and 90 are what we pass.
    qualities: [75, 85, 90],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
