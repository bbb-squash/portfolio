import '@/assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/util/colors' // eslint-disable-line
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#044c64',
          secondary: '#48B0C7',
          accent: '#D96738',
          'accent-dark': '#B58794'
        }
      }
    }
  }
})

createApp(App).use(router).use(vuetify).mount('#app')
