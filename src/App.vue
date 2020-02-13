<template>
	<div id="app">
		<!-- <MoreInfo />
		<SearchBrews /> -->
		<router-view />
	</div>
</template>

<script>
// import SearchBrews from './components/SearchBrews.vue';
// import MoreInfo from './components/MoreInfo.vue';

import { provideStore } from './composition/use-store';
export default {
	setup(props, { root: { $store } }) {
		provideStore($store);
	},
	name: 'App',
	components: {
		// SearchBrews,
		// MoreInfo
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
