/** @type {import('next').NextConfig} */
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = path.join(__dirname, '');

    config.plugins.push(new ESLintPlugin({}));
    config.plugins.push(
      new webpack.ProvidePlugin({
        PropTypes: 'prop-types'
      })
    );
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      })
    );

    return config;
  }
};

module.exports = nextConfig;
