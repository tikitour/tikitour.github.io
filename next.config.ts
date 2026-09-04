const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to URLs (e.g., /about/)
  trailingSlash: true, 
  // Optional: Disable standard Image Optimization if hosting on a basic static platform
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;