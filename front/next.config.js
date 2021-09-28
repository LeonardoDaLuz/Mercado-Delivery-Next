/** @type {import('next').NextConfig} */

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');


module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({ configFile: 'tsconfig.json' })
    );

    return config;
  },
}
