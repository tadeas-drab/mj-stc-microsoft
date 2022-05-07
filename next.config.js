/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { dirs: ['src/**/*'] },
  images: { domains: ['api.studentambassadors.sk'] },
  optimizeFonts: false,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
