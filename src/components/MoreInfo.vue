<template>
	<div id="nav">
		{{ brews }}
		<router-link to="/">Home</router-link>
	</div>
</template>

<script>
import { useStore } from '../composition/use-store';
export default {
	setup() {
		const store = useStore();
		const brews = store.getters.brews;
		return { brews };
	},
	name: 'MoreInfo'
};
</script>

<style scoped>
a {
	text-decoration: none;
}
</style>
