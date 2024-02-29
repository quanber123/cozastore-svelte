<script lang="ts">
	import { get } from 'svelte/store';
	import { categories } from '../../../stores';
	import type { Category } from '../../../types';
	import CategorySingle from '../../(ui)/category.single.svelte';

	const data = get(categories) as Category[];
</script>

<div class="categories">
	{#each data as category}
		<CategorySingle {category} />
	{/each}
</div>

<style>
	.categories {
		position: relative;
		width: 80%;
		height: 100%;
		margin: auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
		gap: 40px;
	}
</style>
