import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [new URL("https://static2.finnhub.io/**")]
    }
};

export default nextConfig;
