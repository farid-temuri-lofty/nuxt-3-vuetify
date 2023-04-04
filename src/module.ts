import { addPlugin, addTemplate, defineNuxtModule } from '@nuxt/kit'
import { VuetifyOptions } from 'vuetify'
import { createResolver } from '@nuxt/kit'
import vuetify from 'vite-plugin-vuetify'

const { resolve } = createResolver(import.meta.url)
export interface ModuleOptions {
  scssSettingsSrc?: string,
  vuetifyOptions?: Omit<VuetifyOptions, "components"| "directives">
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
  setup( { scssSettingsSrc, vuetifyOptions = {} }, nuxt ) {

    addTemplate( {
      filename: 'vuetify-options.mjs', getContents() {
      return `export const vuetifyOptions = ${JSON.stringify(vuetifyOptions)}`
    }})

    nuxt.options.css.push('vuetify/lib/styles/main.sass')
    nuxt.options.build.transpile.push( 'vuetify' )

    nuxt.hooks.hook( 'vite:extendConfig', config => {
      const styles = {...scssSettingsSrc ? { styles: { configFile: scssSettingsSrc } } : {}} 
      const customPlugin = vuetify( {
        ...styles
      } )
      if ( !config ) return
      if ( !config.plugins ) {
        config.plugins = [customPlugin]
      } else {
        config.plugins.push(customPlugin)
      }
    } )
  
    addPlugin(resolve('./runtime/plugin.ts'))
  }
})
