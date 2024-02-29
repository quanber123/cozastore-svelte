<script lang="ts">
	import type { Category } from '../../types';

	export let category: Category;
</script>

<article>
	<div class="category">
		<img src={category.image} alt={category.name} {...{ fetchpriority: 'high' }} />
		<div>
			<div>
				<p style="text-transform: capitalize; font-weight:700; font-size:28px">
					{category.name}
				</p>
				<p style="text-transform:capitalize;">{category.description}</p>
			</div>
			<div class="btn-category">
				<button><a href="/shop?category={category.name}">Shop now</a></button>
			</div>
		</div>
	</div>
</article>

<style>
	a {
		all: unset;
	}
	button {
		all: unset;
	}
	p {
		line-height: 0;
	}
	img {
		width: 100%;
		height: 100%;
	}
	article {
		cursor: pointer;
		max-height: 270px;
		border: 1px solid #e1e0e0;
		color: #555;
		overflow: hidden;
	}
	article > .category {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	article > .category > div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 38px 34px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 10;
	}

	.btn-category::after {
		position: absolute;
		content: '';
		bottom: -5px;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0;
		height: 2px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		transition: all 0.5s ease;
		-webkit-transition: all 0.5s ease;
		transition-delay: 0.2s;
		-webkit-transition-delay: 0.2s;
	}
	.btn-category > button {
		-webkit-transition: all 0.3s ease;
		-webkit-transition-delay: 0.3s;
		transition: all 0.3s ease;
		transition-delay: 0.3s;
		opacity: 0;
		transform: translateY(12px);
	}
	.category:hover .btn-category > button {
		transform: translateY(0);
		opacity: 1;
	}

	.category:hover .btn-category::after {
		width: 100%;
	}

	.category {
		color: #555555;
		transition: color 0.3s linear;
	}
	.category:hover {
		color: #fff;
	}
	.category::before {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 100%;
		background-color: #fff;
		opacity: 0;
		-webkit-transition: all 0.3s linear;
		transition: all 0.3s linear;
		z-index: 10;
	}
	.category:hover::before {
		background-color: rgba(113, 127, 224, 0.8);
		opacity: 1;
	}
	.btn-category {
		position: relative;
		max-width: 80px;
		color: #fff;
		font-weight: 600;
	}
	.btn-category::after {
		position: absolute;
		content: '';
		bottom: -5px;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0;
		height: 2px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
		transition: all 0.5s ease;
		-webkit-transition: all 0.5s ease;
		transition-delay: 0.2s;
		-webkit-transition-delay: 0.2s;
	}
	.btn-category > button {
		-webkit-transition: all 0.3s ease;
		-webkit-transition-delay: 0.3s;
		transition: all 0.3s ease;
		transition-delay: 0.3s;
		opacity: 0;
		transform: translateY(12px);
	}
	.category:hover .btn-category > button {
		transform: translateY(0);
		opacity: 1;
	}

	.category:hover .btn-category::after {
		width: 100%;
	}
</style>
