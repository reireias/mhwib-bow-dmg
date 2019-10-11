import colors from 'vuetify/es5/util/colors'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/mhwib-bow-dmg/'
        }
      }
    : {}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'mhwib-bow-dmg'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://reireias.github.io/mhwib-bow-dmg'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'MHW:Iceborne 弓専用ダメージ計算機'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://reireias.github.io/mhwib-bow-dmg/favicon.ico'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@mhwbowdmg'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'MHW 弓専用ダメージ計算機'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'MHW Iceborne用の弓に特化したダメージ計算機です。'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://reireias.github.io/mhwib-bow-dmg/favicon.ico'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-149343004-2',
    debug: {
      sendHitTask: true
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.green.darken3,
          accent: colors.grey.darken3,
          secondary: colors.indigo.accent4,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {},
  ...routerBase
}
