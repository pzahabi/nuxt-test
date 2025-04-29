import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faPhone,
  faBars,
  faList,
  faComments,
  faHandshake,
  faBoxesStacked,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

import {
  faTelegram,
  faInstagram,
  faTwitter,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faPhone,
  faBars,
  faList,
  faComments,
  faHandshake,
  faBoxesStacked,
  faChevronLeft,
  faTelegram,
  faInstagram,
  faTwitter,
  faLinkedin
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
