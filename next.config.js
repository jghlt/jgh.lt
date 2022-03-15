const path = require("path");
const webpack = require("webpack");

module.exports = {
  sassOptions: {
    includePaths: [path.join(`${__dirname}/src`, "styles")],
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./src"));
    return config;
  },
};
