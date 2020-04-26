import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import hu from 'vuetify/es5/locale/hu'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { hu },
    current: 'hu'
  },
  theme: {
    themes: {
      light: {
        primary: '#1a7868',
        // secondary: colors.red.lighten4, // #FFCDD2
        accent: '#FFEB3B',
      },
    },
  }
})
