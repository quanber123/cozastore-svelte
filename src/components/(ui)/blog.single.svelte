<script lang="ts">
	import type { Blog } from '../../types';

	export let blog: Blog;
	export let width: number;
</script>

<article style="width: calc({width}% - 20px);">
	<div>
		<img
			style="height:240px; width:100%"
			src={blog.imgSrc}
			alt={blog.title}
			{...{ fetchpriority: 'high' }}
		/>
	</div>
	<div>
		<p>
			By <span style="color:#333333; font-weight:700; text-transform:capitalize">{blog.author}</span
			>
			on <span style="color:#333333; font-weight:700">{blog.created_at}</span>
		</p>
		<p>{blog.title}</p>
		<p>{blog.open_paragraph}</p>
	</div>
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		flex-grow: 0;
	}
	article > div:first-child {
		width: 100%;
		overflow: hidden;
	}
	img {
		width: 100%;
		cursor: pointer;
		transform: scale(1);
		transition: all 0.2s linear;
	}
	img:hover {
		transform: scale(1.1);
	}
	p {
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	p:nth-child(2) {
		cursor: pointer;
		-webkit-line-clamp: 2;
		height: 72px;
		font-size: 24px;
		transition: color 0.2s linear;
	}
	p:nth-child(2):hover {
		color: #716fe0;
	}
	p:nth-child(3) {
		-webkit-line-clamp: 2;
	}
</style>
