import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  i18n: {
    locales: ["es", "en"], // Define the supported locales
    defaultLocale: "es", // Set the default locale to Spanish (es)
  },
};

export default nextConfig;
