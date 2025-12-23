/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  // output: 'export'
  // images: {
  //   unoptimized: true
  // }
  // next.config.ts
  headers: [
    {
      key: 'Cross-Origin-Embedder-Policy',
      value: 'credentialless' // or 'require-corp'
    },
    {
      key: 'Cross-Origin-Opener-Policy',
      value: 'same-origin'
    },
    // Add this if still having issues
    {
      key: 'Cross-Origin-Resource-Policy',
      value: 'cross-origin'
    }
  ]
};

module.exports = nextConfig;
