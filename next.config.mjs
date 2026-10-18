const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const inferredBasePath =
  process.env.GITHUB_ACTIONS === "true" &&
  repoName &&
  repoName !== "ashish398.github.io"
    ? `/${repoName}`
    : "";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? inferredBasePath;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
