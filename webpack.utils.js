const path = require("path");

const resolvePath = (...paths) => path.resolve(__dirname, ...paths);

module.exports = {
    resolvePath,
};
