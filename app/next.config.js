/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@sellpass/*'],
  experimental: {
    appDir: true,
    typedRoutes: true,
    runtime: 'experimental-edge',
  },
}
export default nextConfig
