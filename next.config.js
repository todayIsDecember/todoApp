/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  //   typedRoutes: true,
  //   // scrollRestoration: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "todoserver-52sw.onrender.com",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      cleanupIds: false,
                      removeViewBox: false,
                    },
                  },
                },
                "removeXMLNS",
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
