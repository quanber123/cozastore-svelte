<script lang="ts">
	import { get } from 'svelte/store';
	import { categories } from '../stores';
	import type { Category } from '../types';

	const data = get(categories) as Category[];
	const helps = ['Track Order', 'Returns', 'Shipping', 'FAQs'];
</script>

<footer>
	<section>
		<div>
			<p>Categories</p>
			<ul>
				{#each data as category}
					<li>
						<a href="/shop?page=1&category={category.name}">{category.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<p>Help</p>
			<ul>
				{#each helps as help}
					<li>{help}</li>
				{/each}
			</ul>
		</div>
		<div>
			<p>Get in touch</p>
			<p style="font-size:14px">
				Any questions? Let us know in store at 8th floor, 379 Hudson St, NewYork, NY 10018 or call
				us on (+1) 96 716 6879
			</p>
		</div>
	</section>
</footer>

<style>
	footer {
		padding: 75px 0;
		background-color: #333333;
		color: #e1e0e0;
	}
	section {
		width: 80%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 40px;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	p {
		font-size: 18px;
		text-transform: uppercase;
		font-weight: 600;
		color: #fff;
	}
	ul {
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		text-transform: capitalize;
		color: #fff;
		transition: all 0.2s linear;
	}
	a:hover {
		color: #716fe0;
	}
</style>
