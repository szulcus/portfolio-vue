import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faAngleRight, faAngleLeft,
	faPhone, faUserTie, faCodeBranch,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faInstagram, faNpm } from '@fortawesome/free-brands-svg-icons'

library.add(
	faAngleRight, faAngleLeft,
	faPhone, faUserTie, faCodeBranch,
	faFacebookMessenger, faInstagram, faNpm
)

Vue.component('fa-icon', FontAwesomeIcon)