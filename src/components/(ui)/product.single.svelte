<script lang="ts">
	import type { Product } from '../../types';

	export let product: Product;
</script>

<article>
	<div class="image">
		<img src={product.images[0]} alt={product.name} />
		{#if product.sale?.rate && product.sale?.active}
			<p class="sale">
				-{product.sale?.rate}%
			</p>
		{/if}
	</div>
	<div class="information">
		<div>
			<a href="/">{product.name}</a>
		</div>
		<p style="display: flex; align-items:center; gap:20px">
			<span
				style={product.sale?.rate && product.sale?.active
					? 'color: #d80032; text-decoration: line-through'
					: ''}>{product.price} VND</span
			>
			{#if product.sale?.rate && product.sale?.active}
				<span style="font-size: 12px; font-weight:700">{product.salePrice} VND</span>
			{/if}
		</p>
	</div>
</article>

<style>
	a {
		all: unset;
		cursor: pointer;
		font-weight: 700;
		color: #666666;
	}
	article {
		margin: auto;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		flex-grow: 1;
		gap: 20px;
	}
	article > .image {
		cursor: pointer;
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	article > .image > img {
		width: 100%;
		height: 350px;
		transition: all 0.2s linear;
	}
	article > .image > img:hover {
		transform: scale(1.1);
	}
	article > .information > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.sale {
		position: absolute;
		top: 0;
		right: 0;
		margin: 4px 8px;
		background-color: #716fe0;
		color: #fff;
		z-index: 10;
	}
</style>
