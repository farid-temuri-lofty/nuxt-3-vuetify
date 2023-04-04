import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
//@ts-expect-error
import { vuetifyOptions } from '#build/vuetify-options'


export default defineNuxtPlugin( nuxtApp => {
  console.log(vuetifyOptions);
  const vuetify = createVuetify(vuetifyOptions)

  nuxtApp.vueApp.use(vuetify)
})  