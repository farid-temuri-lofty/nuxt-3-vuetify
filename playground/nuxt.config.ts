import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'

export default defineNuxtConfig( {
  css: [ 'vuetify/lib/styles/main.sass' ],
	build: {
    transpile: ['vuetify'],
  },
  modules: [ '../src/module' ],
  vuetify: {
    scssSettingsSrc: './settings.scss',
    vuetifyOptions: {
      blueprint:md3,  
      components,
      directives,
      ssr: true,
    }
  }
})
