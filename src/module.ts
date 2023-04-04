import { defineNuxtModule, createResolver, addPlugin, addTemplate } from '@nuxt/kit'
import vuetify from 'vite-plugin-vuetify'
import { VuetifyOptions } from 'vuetify'

export interface ModuleOptions {
  scssSettingsSrc?: string,
  vuetifyOptions?:VuetifyOptions
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-3-vuetify',
    configKey: 'vuetify',
    compatibility: {
      nuxt: '^3.0.0',
    }
  },
  defaults: {},
  setup( {scssSettingsSrc, vuetifyOptions = {}}, nuxt ) {


    
    addTemplate( {
      filename: 'vuetify-options.mjs', getContents() {
      return `export const vuetifyOptions = ${JSON.stringify(vuetifyOptions)}`
    }})


      addPlugin( resolve( './runtime/plugin' ) )
        if ( !scssSettingsSrc ) return

      nuxt.hooks.hook( 'vite:extendConfig', config => {
        if ( !config.plugins ) return
        config.plugins.push(
          vuetify( {} )
        )
      } )
    


  }
})
