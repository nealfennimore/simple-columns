const { resolve } = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

module.exports = {
    context: resolve( __dirname, '../..' ),
    output: {
        filename: '[name].js',
        chunkFilename: '[id].js'
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json', '.pcss' ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [ 'babel-loader', ],
                exclude: /node_modules/
            },
            {
                test: /\.p?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin( {
            filename: '[name].css',
            chunkFilename: '[id].css'
        } )
    ]
};
