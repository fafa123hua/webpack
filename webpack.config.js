// 路径
const { resolve } = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bulit.js',
        path: resolve(__dirname, 'build')
    },
    mode: 'development'
}