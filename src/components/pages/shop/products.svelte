<script lang="ts">
	import ProductSingle from '../../(ui)/product.single.svelte';
	import type { Product } from '../../../types';

	export let products: Product[];
</script>

<section>
	<div>
		{#each products as product}
			<ProductSingle {product} />
		{/each}
	</div>
</section>

<style>
	section {
		width: 80%;
		margin: auto;
	}
	div {
		width: 80%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
		gap: 40px;
	}

	@media screen and (max-width: 640px) {
		div {
			width: 100%;
		}
	}
</style>
