module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    target: 'web',
    externals: {
        'node-fetch': "./node_modules/node-fetch/src/index.js"
    }
  }
}
