export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en-GB'
            }
        }
    },
    alias: {
        pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/css/fonts.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    components: {
        path: '~/components',
        pathPrefix: false
        // global: true,
        // dirs: ['~/components/pagebuilder']
    },
    runtimeConfig: {
        public: {
            setPassword: process.env.SET_PASSWORD
        }
    },
    pinia: {
        autoImports: [
          'useUserAuth'
        ]
    }
})
