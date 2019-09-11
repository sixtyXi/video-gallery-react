const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const serverConfig = require('./webpack.server');

const clientConfig = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

module.exports = [clientConfig, serverConfig];
