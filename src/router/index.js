import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import SearchBrews from '@/components/SearchBrews';
import MoreInfo from '@/components/MoreInfo';

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'iMain',
			component: SearchBrews,
			props: true
		},
		{
			path: '/moreinfo',
			name: 'MoreInfo',
			component: MoreInfo,
			props: true
		}
	]
});
