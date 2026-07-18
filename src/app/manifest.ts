import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farrukh Abdullah | Semantic SEO & GEO Strategist",
    short_name: "Farrukh Abdullah",
    description:
      "Semantic SEO, Generative Engine Optimization (GEO), and Local SEO consulting.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
