module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: { disableHostCheck: true },
  configureWebpack: {
    target: 'web',
    externals: { 'node-fetch': './node_modules/node-fetch/src/index.js' }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');

    // eslint-loader の設定を追加
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.fix = true; // 自動修正を有効にする場合
        options.emitWarning = true; // 警告を有効にする場合
        return options;
      });
  }
};
