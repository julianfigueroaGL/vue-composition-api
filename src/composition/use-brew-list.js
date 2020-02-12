import { ref, toRefs, reactive } from '@vue/composition-api';
export default function() {
	const val = ref('');
	const breweries = reactive({ list: [] });
	const submitted = async () => {
		const response = await fetch(`https://api.openbrewerydb.org/breweries/?by_name=${val.value}`).then(res =>
			res.json()
		);
		console.log(response);
		breweries.list = response;
	};
	return { val, ...toRefs(breweries), submitted };
}
