/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    runtime: 'experimental-edge',
    // disableOptimizedLoading: true,
  },
}
export default nextConfig
