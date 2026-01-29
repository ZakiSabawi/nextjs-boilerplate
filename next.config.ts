import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://au-syd.watson-orchestrate.cloud.ibm.com",
              "style-src 'self' 'unsafe-inline' https://au-syd.watson-orchestrate.cloud.ibm.com",
              "connect-src 'self' https://au-syd.watson-orchestrate.cloud.ibm.com wss://au-syd.watson-orchestrate.cloud.ibm.com",
              "frame-src 'self' https://au-syd.watson-orchestrate.cloud.ibm.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://au-syd.watson-orchestrate.cloud.ibm.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
