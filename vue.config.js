const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
  // ...your other modifications,
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json'
      })
    )
    config.devServer = {
              headers: { "Access-Control-Allow-Origin": "*" }
            }
          
  }
}



