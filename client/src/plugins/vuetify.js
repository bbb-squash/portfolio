import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: {
      light: {
        'secondary': '#7AA095',
        'font-accent': "#044c64",
        'main': "#044c64",
        'sub': '#48B0C7',
        'accent': '#D96738',
        'accent-dark': '#B58794',
        'txt-light': '#666'
      }
    },
    options: { customProperties: true },
  }
});
