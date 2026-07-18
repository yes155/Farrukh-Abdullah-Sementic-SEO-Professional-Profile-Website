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
    ];
  },
  async headers() {
    return [
      {
        // Everything except /studio — Sanity's own management dashboard needs
        // to embed /studio in an iframe from a different origin (sanity.io),
        // which X-Frame-Options: SAMEORIGIN would block.
        source: "/((?!studio).*)",
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
      {
        // /studio gets the safe headers only — no X-Frame-Options, so
        // Sanity's dashboard (studio.sanity.io) can embed it in an iframe.
        source: "/studio/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;