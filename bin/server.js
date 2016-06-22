import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import webpackConfig from '../webpack.config.js'

// Enable Automatic Refresh with inline mode
webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8090/');

// Enable HMR
webpackConfig.entry.app.unshift("webpack/hot/dev-server");

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: 'http://localhost:8090/',
    contentBase: '../dist',
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  })
  .listen(8090, () => {
    console.log('WebpackDevServer started on http://localhost:8090')
  })
