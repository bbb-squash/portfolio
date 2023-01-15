module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    target: 'web',
    externals: {
        'node-fetch': "./node_modules/node-fetch/src/index.js"
    }
  }
}
