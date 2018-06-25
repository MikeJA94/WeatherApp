module.exports = {
    mode: "development",
    context: __dirname,
    entry: {
        app: ["./app.jsx"]
    },
        output : {
        path: __dirname + "/dist",
            filename:"bundle.js" 
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env','babel-preset-react']
                    }
                }
            }
        ]
    }

}