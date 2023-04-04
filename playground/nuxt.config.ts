import { md1 } from 'vuetify/blueprints'

export default defineNuxtConfig( {
  imports: {
    autoImport: false
  },
  modules: [ '../src/module' ],
  vuetify: {
    scssSettingsSrc: './settings.scss',
    vuetifyOptions: {
      blueprint: md1,
    } 
  }
})
