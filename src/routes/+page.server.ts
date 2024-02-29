export const load = async () => {
	const banners = async () => {
		const res = await fetch('http://localhost:3000/api/banners');
		const data = await res.json();
		if (res.ok) {
			return {
				banners: data
			};
		} else {
			return {
				status: res.status,
				error: new Error('Something went wrong!')
			};
		}
	};
	const products = async () => {
		const res = await fetch('http://localhost:3000/api/products');
		const data = await res.json();
		if (res.ok) {
			return {
				...data
			};
		} else {
			return {
				status: res.status,
				error: new Error('Something went wrong!')
			};
		}
	};
	const blogs = async () => {
		const res = await fetch('http://localhost:3000/api/blogs');
		const data = await res.json();
		if (res.ok) {
			return {
				...data
			};
		} else {
			return {
				status: res.status,
				error: new Error('Something went wrong!')
			};
		}
	};
	return {
		banners: await banners(),
		products: await products(),
		blogs: await blogs()
	};
};
