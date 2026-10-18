/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (<username>.github.io serves from the root).
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
