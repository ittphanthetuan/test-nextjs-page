/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  distDir: 'dist',
  reactStrictMode: true,
};

export default nextConfig;
