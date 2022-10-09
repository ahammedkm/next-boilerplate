/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_PROJECT_NAME_ASSET_PREFIX : "",
	publicRuntimeConfig: {
		// Will be available on both server and client
		imageBaseUrl: isProd ? process.env.NEXT_PUBLIC_PROJECT_NAME_ASSET_PREFIX : "",
	},
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  trailingSlash: true,
  i18n,
  optimizeFonts: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      ],
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
