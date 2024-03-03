import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "ja"],
    defaultLocale: "",
  });

  const response = handleI18nRouting(request);

  // Add zod setErrorMap
  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ja|en)/:path*"],
};
