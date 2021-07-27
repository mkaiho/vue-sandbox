/**
 * @typedef { import("@vue/cli-service").ProjectOptions } Options
 */

/** @type {Options} */
const config = {
  configureWebpack: {
    devtool: "source-map",
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@use "@/assets/sass/prepend.scss" as global;',
      },
    },
  },

  devServer: {
    port: 3000,
  },
};

module.exports = config;
