const path = require('path')

module.exports = {
    mode: "development",
    target: ["web", "es5"],
    entry : ["core-js/stable","./src/index.js"],
    output: {
        path: path.resolve(__dirname, "build", "js"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: 
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
            }
        ]
    }
}