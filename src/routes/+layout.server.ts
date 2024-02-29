export const load = async () => {
	const categories = async () => {
		const res = await fetch('http://localhost:3000/api/categories');
		const data = await res.json();
		if (res.ok) {
			return {
				data
			};
		} else {
			return {
				status: res.status,
				error: new Error('Something went wrong!')
			};
		}
	};
	const tags = async () => {
		const res = await fetch('http://localhost:3000/api/tags');
		const data = await res.json();
		if (res.ok) {
			return {
				data
			};
		} else {
			return {
				status: res.status,
				error: new Error('Something went wrong!')
			};
		}
	};
	return {
		categories: await categories(),
		tags: await tags()
	};
};
