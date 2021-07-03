const HTMLWebpackPlugin = require("html-webpack-plugin");
const { resolvePath } = require("./webpack.utils");

// TODO make a configuration for production

/**
 * @type {import('webpack').Configuration}
 */
const config = {
    context: resolvePath("src"),
    entry: "./frontend/index.tsx",
    output: {
        path: resolvePath("build", "front"),
        filename: "front.bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.s[ac]ss$/,
                oneOf: [
                    {
                        test: /\.g\.s[ac]ss$/,
                        use: ["style-loader", "css-loader", "sass-loader"],
                    },
                    {
                        use: [
                            "style-loader",
                            {
                                loader: "css-loader",
                                options: {
                                    modules: true,
                                    sourceMap: true,
                                },
                            },
                            "sass-loader",
                        ],
                    },
                ],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./frontend/index.html",
        }),
    ],
};

module.exports = config;
