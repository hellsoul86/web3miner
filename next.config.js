const nextPlugins = require("next-compose-plugins");
const nextWithless = require("next-with-less");
const optimizedImages = require('next-optimized-images')

// const withTM = require("next-transpile-modules")(["antd", "@ant-design/icons"]);
const withTM = require("next-transpile-modules")(["antd"]);

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
};

const plugins = [
  [
    nextWithless,
    {
      images: {
        loader: 'akamai',
        path: '',
      },
      lessLoaderOptions: {
        lessOptions: {
          modifyVars: {
            "@primary-color": "#1890ff",
            "@menu-dark-item-active-bg": "rgb(247, 0, 161)",
          }
        }
      },
      javascriptEnabled: true,
    },
  ],
  // [optimizedImages],
  [withTM],
];

module.exports = nextPlugins(plugins, nextConfig)