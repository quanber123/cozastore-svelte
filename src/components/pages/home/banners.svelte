<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { Banner } from '../../../types';
	import BannerSingle from '../../(ui)/banner.single.svelte';
	export let banners: Banner[] = [];
	let indexBanner = 0;
	const handlePrev = () => {
		if (indexBanner === 0) indexBanner = banners.length - 1;
		else indexBanner -= 1;
		return indexBanner;
	};

	const handleNext = () => {
		if (indexBanner === banners.length - 1) indexBanner = 0;
		else indexBanner += 1;
		return indexBanner;
	};
</script>

<div class="banners">
	{#each banners as banner, index}
		<BannerSingle {index} {indexBanner} {banner} />
	{/each}
	<button class="btn-prev" on:click={handlePrev} aria-label="btn-prev"
		><Icon icon="tabler:caret-left-filled" /></button
	>
	<button class="btn-next" on:click={handleNext} aria-label="btn-next"
		><Icon icon="tabler:caret-right-filled" /></button
	>
</div>

<style>
	.banners {
		position: relative;
		width: 100vw;
		height: 100vh;
		aspect-ratio: 4/2;
		display: flex;
		justify-content: center;
		color: #555555;
		overflow: hidden;
	}
	button {
		all: unset;
	}
	.btn-next,
	.btn-prev {
		font-size: 48px;
		cursor: pointer;
		position: absolute;
		top: 50%;
		z-index: 50;
		color: #555555;
		transition: all 0.2s linear;
	}
	.btn-next {
		right: 5%;
	}
	.btn-prev {
		left: 5%;
	}
	.btn-next:hover,
	.btn-prev:hover {
		color: #716fe0;
	}
</style>
