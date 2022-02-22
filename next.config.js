const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
}

module.exports = nextConfig
