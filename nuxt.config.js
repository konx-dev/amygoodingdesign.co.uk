export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en-GB'
            }
        }
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/css/fonts.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss'
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
    }
})
