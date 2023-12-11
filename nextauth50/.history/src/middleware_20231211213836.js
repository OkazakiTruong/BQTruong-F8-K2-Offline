import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

// export default createMiddleware({
//   defaultLocale: "en",
//   localePrefix,
//   locales,
// });
// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(en|vi)/:path*"],
// };

// // export { default } from "next-auth/middleware";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/about")) {
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // This logic is only applied to /dashboard
  }
}
