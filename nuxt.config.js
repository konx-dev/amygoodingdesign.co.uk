export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en-GB'
            }
        }
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    components: {
        path: '~/components',
        pathPrefix: false
        // global: true,
        // dirs: ['~/components/pagebuilder']
    }
})
