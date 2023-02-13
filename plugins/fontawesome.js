// For Nuxt 3
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false

// Solid Imports
import { faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faUser)

// Regular Imports
import { faUser as faUserReg } from '@fortawesome/free-regular-svg-icons'
library.add(faUserReg)

// Brand Imports
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})