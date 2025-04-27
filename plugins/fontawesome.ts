import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPhone,
  faBars,
  faList,
  faComments,
  faHandshake,
  faBoxesStacked,
} from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faBars, faList, faComments, faHandshake, faBoxesStacked)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
