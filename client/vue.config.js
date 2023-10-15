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
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap((options) => {
        options.fix = true;
        options.emitWarning = true;
        return options;
      });
  },
  pages: { index: {
    entry: 'src/main.js',
    title: 'portfolio - BBB-SQUASH'
  }  }
};
