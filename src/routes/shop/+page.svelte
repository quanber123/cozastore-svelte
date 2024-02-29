<script lang="ts">
	import Products from '../../components/pages/shop/products.svelte';
	export let data;
</script>

<main>
	<Products products={data.products.products} />
</main>

<style>
	main {
		padding: 124px 24px 84px;
	}
</style>
