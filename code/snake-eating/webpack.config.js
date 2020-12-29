// 引入一个包
const path = require('path');

// 引入html 插件 npm i -D html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');

// 引入clean插件
const {CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack 中所有的配置信息都应该写在 module.exports中
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),

        // 打包文件的文件
        filename: 'bundle.js',

        // 告诉webpack不适应箭头函数
        environment: {
            arrowFunction: false,
            const: false
        }
    },

    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            // 设置预定义环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },

                                        // 指定corejs的版本
                                        "corejs": "3",

                                        // 使用corejs的方式”usage“,表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                // 要排除的文件
                exclude: /node_modules/
            },

            // 设置less 文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 引入 "postcss"
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }

        ]
    },

    // 配置webpack 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: '贪吃蛇',
            template: './src/index.html'
        }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
    }
};
