<template>
	<div class="brews">
		<h2>Brew Search</h2>
		<section>
			<form @submit.prevent="submitted">
				<input type="text" v-model="val" />
				<button>Submit</button>
			</form>
		</section>

		<div class="search-results" v-for="brewery in list" :key="brewery.id">
			<ul>
				<li>
					<span class="title">Name:</span> <span class="brew">{{ brewery.name }}</span>
				</li>
				<li>
					<span class="title">Street:</span> <span class="brew">{{ brewery.street }}</span>
				</li>
				<li>
					<span class="title">City:</span><span class="brew"> {{ brewery.city }}</span>
				</li>
				<li>
					<span class="title">Zip:</span><span class="brew"> {{ brewery.postal_code }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// import { ref, reactive, toRefs } from '@vue/composition-api';
import useBrewList from '../composition/use-brew-list';
export default {
	setup() {
		const { submitted, list, val } = useBrewList();
		// const val = ref('');
		// const breweries = reactive({ list: [] });
		// const submitted = async () => {
		// 	const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${val.value}`).then(res =>
		// 		res.json()
		// 	);
		// 	console.log(response);
		// 	breweries.list = response;
		// };
		return { val, list, submitted };
	}
	// data() {
	// 	return {
	// 		val: '',
	// 		breweries: []
	// 	};
	// },
	// methods: {
	// 	async submitted() {
	// 		const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${this.val}`).then(res =>
	// 			res.json()
	// 		);
	// 		console.log(response);
	// 		this.breweries = response;
	// 	}
	// }
};
</script>

<style scoped>
.search-results {
	display: flex;
	width: 600px;
	text-align: left;
}
.brews {
	max-width: 1024px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 auto;
}
ul {
	list-style-type: none;
	width: 100%;
}
li {
	display: flex;
	justify-content: space-between;
}
.brew {
	font-weight: bold;
}
</style>
