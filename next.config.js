/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
module.exports = {
   webpack(config, options) {
      config.module.rules.push({
         test: /\.(mp3)$/,
         use: {
            loader: "file-loader",
            options: {
               publicPath: "/_next/static/sounds/",
               outputPath: "static/sounds/",
               name: "[name].[ext]",
               esModule: false,
            },
         },
      });
      return config;
   },
   experimental: {
      appDir: true,
   },
};
