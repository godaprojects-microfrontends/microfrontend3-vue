# goda-vue
A vue based microfrontend. Pending : Need to move vue dependencies to the static content server. will do it later.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Config for manifest and cors
Config for setting up manifest file for vue and allowing cors requests in to it (similar to asset-manifest.json file in react) - in vue.config.js - create it if it does not exist

```
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
```
