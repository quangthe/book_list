const DashboardPlugin = require('webpack-dashboard/plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader', // Support hot loading
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    inline: true,
    devtool: 'source-map'
  },
  devtool: 'source-map',
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),

    //// minify source code
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false,
    //    drop_console: false
    //  }
    //}),


    new DashboardPlugin()
  ]
};
