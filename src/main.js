import Vue from 'vue'
// import VueAnalytics from 'vue-analytics'
import App from '@/App.vue'
import '@/registerServiceWorker'
// STYLES
import '@/Styles/Global.scss'
// CONFIG
import '@/Config/FaIcons'
import '@/Config/Fragment'
import './registerServiceWorker'

const vh = window.innerHeight;
document.documentElement.style.setProperty('--window-height', `${vh}px`);

// Vue.use(VueAnalytics, {
// 	id: 'G-H5XJGJB4P9'
// })


Vue.directive('bg', function (el, binding) {
	el.style.backgroundImage = `url(${binding.value})`
	el.style.backgroundRepeat = 'no-repeat'
	el.style.backgroundPosition = 'center'
	el.style.backgroundSize = 'cover'
	if (binding.modifiers.contain) {
		el.style.backgroundSize = 'contain'
	}
})
Vue.directive('rel', function (el) {
	el.setAttribute('target', '_blank')
	el.setAttribute('rel', 'noopener noreferrer')
})

Vue.prototype.$importAll = (r) => {
	const images = []
	r.keys().map(r).forEach(img => {
		images.push(img)
	})
	return images;
}

Vue.config.productionTip = false

new Vue({
	render: h => h(App)
}).$mount('#app')
