/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/win_win' : '',
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.ts',
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/win_win' : '',
  },
}

module.exports = nextConfig
