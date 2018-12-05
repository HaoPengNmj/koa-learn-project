const { join } = require('path');
const { extend } = require('lodash');

let config = {
    viewDir: join(__dirname, "..", "views"),
    staticDir: join(__dirname, "..", "public")
}

if (process.env.NODE_ENV == "development") {
    const localConfig = {
        baseUrl: "http://localhost:59793",
        port: 3000
    }
    config = extend(config, localConfig);
}

if (process.env.NODE_ENV == "production") {
    const prodConfig = {
        port: 8081
    }
    config = extend(config, prodConfig);
}

module.exports = config;