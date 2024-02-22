import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: "tsconfig.build.json",
  },
};

export default withNextIntl(nextConfig);
