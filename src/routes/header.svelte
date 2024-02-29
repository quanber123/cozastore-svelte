<script>
	const routes = ['about', 'shop', 'blogs'];
</script>

<header>
	<nav class="container h-[60px] flex justify-start items-center gap-[80px]">
		<a href="/"> <img src="/logo-01.png.webp" alt="logo" {...{ fetchpriority: 'high' }} /></a>
		<ul class="p-[16px] h-max flex items-center gap-[20px] font-bold">
			{#each routes as route}
				<li><a href="/{route}">{route}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		width: 100%;
		height: 60px;
		background-color: #fff;
		box-shadow: 0 0px 3px 0px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 0 0px 3px 0px rgba(0, 0, 0, 0.2);
		-webkit-box-shadow: 0 0px 3px 0px rgba(0, 0, 0, 0.2);
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
	}
	nav {
		height: 60px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 80px;
	}
	img {
		cursor: pointer;
	}
	ul {
		padding: 16px;
		height: max-content;
		display: flex;
		align-items: center;
		gap: 20px;
		font-weight: 600;
	}
	li {
		list-style-type: none;
	}
	a {
		text-decoration: none;
		text-transform: capitalize;
		color: #333333;
		transition: all 0.2s linear;
	}
	a:hover {
		color: #716fe0;
	}
</style>
