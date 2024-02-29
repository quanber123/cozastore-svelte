<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import { categories, tags } from '../stores';
	export let data;
	categories.set(data.categories.data);
	tags.set(data.tags.data);
</script>

<Header />
<slot />
<Footer />
