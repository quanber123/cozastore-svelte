<script lang="ts">
	export let blogs: Blog[];
	import Icon from '@iconify/svelte';
	import BlogSingle from '../../(ui)/blog.single.svelte';
	import type { Blog } from '../../../types';
	import { onMount } from 'svelte';
	$: breakPoints = 4;
	$: indexSlider = 0;
	$: width = 100 / breakPoints;
	function handleResize() {
		if (window.innerWidth > 1280) {
			breakPoints = 4;
		} else if (window.innerWidth > 780) {
			breakPoints = 3;
		} else if (window.innerWidth > 480) {
			breakPoints = 2;
		} else {
			breakPoints = 1;
		}
	}
	$: console.log(breakPoints);
	const handlePrev = () => {
		indexSlider - 1 < 0 ? (indexSlider = blogs.length - breakPoints) : (indexSlider -= 1);
	};

	const handleNext = () => {
		indexSlider + 1 >= blogs.length - breakPoints - 1 ? (indexSlider = 0) : (indexSlider += 1);
	};
	onMount(() => {
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div class="blogs">
	<p>Our Blogs</p>
	<div>
		<div style="max-width:{width * breakPoints}%;">
			<div
				style="transform:translateX(-{indexSlider *
					width}%); transition: transform 0.3s ease-in-out"
			>
				{#each blogs as blog}
					<BlogSingle {blog} {width} />
				{/each}
			</div>
		</div>
		<div>
			<button on:click={handlePrev}><Icon icon="icon-park-twotone:left-one" /></button>
			<button on:click={handleNext}><Icon icon="icon-park-twotone:right-one" /></button>
		</div>
	</div>
</div>

<style>
	.blogs {
		width: 80%;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
	.blogs > p {
		line-height: 0;
		font-size: 60px;
		font-weight: 700;
		color: #333333;
	}
	.blogs > div {
		position: relative;
		padding: 0 24px;
	}
	.blogs > div > div {
		display: flex;
		justify-content: flex-start;
		overflow: hidden;
	}
	.blogs > div > div > div {
		width: 100%;
		padding: 0 64px 0 24px;
		display: flex;
		align-items: stretch;
		gap: 40px;
	}
	button {
		all: unset;
		cursor: pointer;
		font-size: 36px;
		position: absolute;
		top: 50%;
		transition: color 0.2s linear;
		z-index: 20;
	}
	button:hover {
		color: #716fe0;
	}
	button:first-child {
		left: 0;
	}
	button:nth-child(2) {
		right: 0;
	}
	@media screen and (max-width: 640px) {
		.blogs > p {
			font-size: 32px;
		}
	}
</style>
