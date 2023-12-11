// next.config.js
import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

// Middleware 1
const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

// Middleware 2
import authMiddleware from "next-auth/middleware";
const authConfig = { matcher: ["/extra", "/dashboard"] };

module.exports = {
  async redirects() {
    return [
      // Redirects or other configurations can go here
    ];
  },
  // Gộp các middleware
  async rewrites() {
    return [
      // Gộp middleware 1
      {
        source: "/:locale(en|vi)/:path*",
        destination: "/:path*",
        has: [{ type: "query", key: "locale" }],
      },
      // Gộp middleware 2
      ...authMiddleware.rewrites(),
    ];
  },
  // Gộp các middleware
  async headers() {
    return [
      // Gộp middleware 1
      {
        source: "/:locale(en|vi)/:path*",
        headers: [{ key: "X-Custom-Header", value: "abc" }],
      },
      // Gộp middleware 2
      ...authMiddleware.headers(),
    ];
  },
};
