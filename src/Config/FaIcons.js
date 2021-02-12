import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faAngleRight, faAngleLeft,
	faPhone,
	faInfoCircle
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faLinkedin, faGithub, faInstagram, faNpm } from '@fortawesome/free-brands-svg-icons'

library.add(
	faAngleRight, faAngleLeft,
	faPhone,
	faFacebookMessenger, faLinkedin, faGithub, faInstagram, faNpm,
	faInfoCircle
)

Vue.component('fa-icon', FontAwesomeIcon)