<script lang="ts">
	import type { Product } from '../../../types';
	import ProductSingle from '../../(ui)/product.single.svelte';
	export let products: Product[];
</script>

<div class="products">
	<p>Store Overview</p>
	<div>
		{#each products as product}
			<ProductSingle {product} />
		{/each}
	</div>
	<button class=""><a href="/shop">Load more</a></button>
</div>

<style>
	a {
		all: unset;
	}
	.products {
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}
	button {
		all: unset;
		cursor: pointer;
		padding: 8px 24px;
		background-color: #666666;
		color: #fff;
		font-weight: 600;
		border-radius: 23px;
		transition: background-color 0.2s linear;
	}
	button:hover {
		background-color: #716fe0;
	}
	.products > p {
		font-size: 60px;
		font-weight: 700;
		color: #333333;
	}
	.products > div {
		width: 80%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
		gap: 40px;
	}

	@media screen and (max-width: 640px) {
		.products > div {
			width: 100%;
		}
		.products > p {
			font-size: 32px;
		}
	}
</style>
