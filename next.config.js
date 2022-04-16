/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { dirs: ['src/**/*'] },
  optimizeFonts: false,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
