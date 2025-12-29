import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  
  // Image configuration
  images: {
    // Disable image optimization for Netlify deployment
    unoptimized: true,
    // Remote image patterns if you use external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Output configuration
  output: 'standalone',
  
  // If you want to use static export (uncomment if needed)
  // output: 'export',
  
  // Optional: Add trailing slash
  // trailingSlash: true,
  
  // Optional: Configure headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ],
      },
    ];
  },

  // Optional: Configure redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;