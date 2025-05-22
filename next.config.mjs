const nextConfig = {
  output: 'export',
  // Updated to match your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/v0-github-portfolio' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Updated to match your repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/v0-github-portfolio' : '',
}

export default nextConfig;
