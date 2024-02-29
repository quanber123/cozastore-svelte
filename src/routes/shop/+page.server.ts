export const load = async () => {
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
	return {
		products: await products()
	};
};
