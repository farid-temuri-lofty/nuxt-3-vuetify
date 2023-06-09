<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Vuetify in nuxt 3
- Package name: nuxt-3-vuetify
- Description: My new Nuxt module
-->

# Vuetify in nuxt 3

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Vuetify in Nuxt 3 for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/nuxt-3-vuetify?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
So many guide on how to configure vuetify with nuxt 3, but you need to know only one module to include it

## Quick Setup

1. Add `nuxt-3-vuetify` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-3-vuetify

# Using yarn
yarn add --dev nuxt-3-vuetify

# Using npm
npm install --save-dev nuxt-3-vuetify
```

2. Add `nuxt-3-vuetify` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-3-vuetify'
  ],
  vuetify: { // file configure scss variables 
    // more here https://vuetifyjs.com/en/features/sass-variables/
    scssSettingsSrc: 'settings.scss'
    vuetifyOptions: { // options passed to createVuetify, // components and directives omitted but included
     // more here https://vuetifyjs.com/en/getting-started/installation/
      blueprint: mdi3,
      defaults: {
        ...
      }
    }
  }
})
```

That's it! You can now use Vuetify in nuxt 3 in your Nuxt app ✨ Zero build headache

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-3-vuetify/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-3-vuetify

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-3-vuetify.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-3-vuetify

[license-src]: https://img.shields.io/npm/l/nuxt-3-vuetify.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-3-vuetify

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
