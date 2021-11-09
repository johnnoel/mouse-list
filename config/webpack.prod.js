const common = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/mouse-list/assets/',
    },
});
