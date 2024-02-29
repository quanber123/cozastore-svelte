<script lang="ts">
	import type { Banner } from '../../types';

	export let index: number;
	export let indexBanner: number;
	export let banner: Banner;
</script>

<article class="article-banners {indexBanner === index ? 'active' : ''}">
	<img class="img-banners" src={banner.image} alt={banner.content} {...{ fetchpriority: 'high' }} />
	<div class="content-banners">
		<p>{banner.content}</p>
		<p>{banner.category}</p>
		<button class="btn-shop">Shop Now</button>
	</div>
</article>

<style>
	button {
		all: unset;
	}
	p {
		line-height: 0;
	}
	.article-banners {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		z-index: -1;
	}
	.article-banners.active {
		z-index: 5;
	}
	.article-banners > .img-banners {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		aspect-ratio: 4/3;
		object-fit: cover;
		flex-grow: 0;
		opacity: 0;
		transform: scale(0);
		transition: all 0.3s ease-in-out;
	}
	.article-banners.active > .img-banners {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: scale(1);
		opacity: 100;
		z-index: 10;
	}
	.content-banners {
		position: absolute;
		top: 50%;
		left: 20%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		z-index: 5;
		opacity: 0;
	}
	.content-banners > p:first-child {
		text-transform: uppercase;
		font-size: 28px;
		font-weight: 500;
	}
	.content-banners > p:nth-child(2) {
		text-transform: capitalize;
		font-size: 60px;
		font-weight: 700;
	}
	.article-banners.active > .content-banners {
		opacity: 100;
		z-index: 10;
	}
	.article-banners > .content-banners > p:first-child {
		transform: translateY(-300px);
		transition: all 0.3s ease;
		opacity: 0;
	}
	.article-banners > .content-banners > p:nth-child(2) {
		transform: translateX(100%);
		transition: all 0.3s ease;
		transition-delay: 0.2s;
		opacity: 0;
	}
	.article-banners > .content-banners > button {
		transform: translateX(-200%);
		opacity: 0;
		transition: all 0.3s ease;
	}
	.article-banners.active > .content-banners > p {
		transform: translate(0, 0);
		opacity: 100;
	}
	.article-banners.active > .content-banners > button {
		transform: translateX(0);
		opacity: 100;
	}

	.btn-shop {
		cursor: pointer;
		text-align: center;
		width: 162px;
		height: 46px;
		background-color: #555555;
		color: #fff;
		border-radius: 23px;
		transition: background 0.2s linear;
	}

	.btn-shop:hover {
		background-color: #716fe0;
	}

	@media screen and (max-width: 640px) {
		.content-banners {
			left: 50%;
			transform: translate(-50%, -50%);
			justify-content: center;
			align-items: center;
		}
		.content-banners > p:first-child {
			font-size: 20px;
		}
		.content-banners > p:nth-child(2) {
			font-size: 32px;
		}
	}
	@media screen and (max-width: 400px) {
		.content-banners > p:first-child {
			font-size: 18px;
		}
		.content-banners > p:nth-child(2) {
			font-size: 24px;
		}

		.btn-shop {
			width: 128px;
			height: 36px;
			font-size: 12px;
		}
	}
</style>
