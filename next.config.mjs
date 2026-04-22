/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'heroui-assets.nyc3.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },

};

export default nextConfig;
