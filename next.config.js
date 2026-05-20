/** @type {import('next').NextConfig} */
const repo = 'neovolt-website';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repo}` : '',
  },
  ...(isGithubPages
    ? {
        output: 'export',
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

module.exports = nextConfig;
