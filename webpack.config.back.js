const { resolvePath } = require("./webpack.utils");

/**
 * @type {import('webpack').Configuration}
 */
const preloadConfig = {
    target: "electron-main",
    entry: resolvePath("src", "backend", "preload.ts"),
    output: {
        path: resolvePath("build", "back"),
        filename: "preload.js",
    },
    resolve: {
        extensions: [".ts"],
    },
    mode: "development",
    module: {
        rules: [{ test: /\.ts$/, loader: "ts-loader" }],
    },
};

/**
 * @type {import('webpack').Configuration}
 */
const mainConfig = {
    target: "electron-main",
    entry: resolvePath("src", "backend", "main.ts"),
    output: {
        path: resolvePath("build", "back"),
        filename: "electron.bundle.js",
    },
    resolve: {
        extensions: [".ts"],
    },
    mode: "development",
    module: {
        rules: [{ test: /\.ts$/, loader: "ts-loader" }],
    },
};

module.exports = [preloadConfig, mainConfig];
