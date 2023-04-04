import { defineNuxtPlugin } from 'nuxt/app'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//@ts-expect-error
import { vuetifyOptions } from '#build/vuetify-options'

export default defineNuxtPlugin( nuxtApp => {

  const vuetify = createVuetify( {
    components,
    directives,
    ssr: true,
    ...vuetifyOptions
  })

  nuxtApp.vueApp.use(vuetify)
})