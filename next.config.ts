import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_LIFEQUEST_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Prefix Next.js chunks when deployed behind a path-stripping reverse proxy.
  assetPrefix: basePath || undefined,
  serverExternalPackages: ["archiver", "pg"],
  experimental: { cpus: 1, webpackMemoryOptimizations: true, webpackBuildWorker: true },
};

export default nextConfig;
