<script>
	export let data;
	const { banners, products, blogs } = data;
	import Banners from '../components/pages/home/banners.svelte';
	import Blogs from '../components/pages/home/blogs.svelte';
	import Categories from '../components/pages/home/categories.svelte';
	import Products from '../components/pages/home/products.svelte';
</script>

<main>
	<Banners banners={banners.banners} />
	<Categories />
	<Products products={products.products} />
	<Blogs blogs={blogs.blogs} />
</main>

<style>
	main {
		gap: 80px;
	}
</style>
