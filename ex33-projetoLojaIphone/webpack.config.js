const path = require('path'); // commonJS

module.exports = [{
    mode: 'production',
    entry: './src/assets/modules/admin.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle2.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
        }]
    },
    devtool: 'source-map'
    },

    {
    mode: 'production',
    entry: './src/assets/modules/loja.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle1.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
        }]
    },
    devtool: 'source-map'
},

{
    mode: 'production',
    entry: './src/assets/modules/finalizaPagamento.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle3.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
        }]
    },
    devtool: 'source-map'
}
]