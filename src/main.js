import Vue from 'vue';
import App from './App.vue';
import VueCompositionApi from '@vue/composition-api';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app');
