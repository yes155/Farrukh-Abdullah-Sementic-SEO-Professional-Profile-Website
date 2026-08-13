/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services/geo",
        destination: "/services/ai-seo-consulting",
        permanent: true,
      },
      {
        source: "/insights/ins-01",
        destination: "/insights/geo-chatgpt-search-perplexity",
        permanent: true,
      },
      {
        source: "/insights/ins-02",
        destination: "/insights/entity-based-content-architecture",
        permanent: true,
      },
      {
        source: "/insights/ins-03",
        destination: "/insights/schema-strategy-growth-brands",
        permanent: true,
      },
      {
        source: "/insights/ins-04",
        destination: "/insights/local-entity-seo-ai-search",
        permanent: true,
      },
      {
        source: "/insights/ins-05",
        destination: "/insights/topical-map-framework",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
