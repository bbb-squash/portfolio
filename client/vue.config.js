module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: { disableHostCheck: true },
  configureWebpack: {
    target: 'web',
    externals: { 'node-fetch': "./node_modules/node-fetch/src/index.js" }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
}
