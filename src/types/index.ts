export type Category = {
	_id: string;
	name: string;
	image: string;
	description: string;
};

export type Tag = {
	_id: string;
	name: string;
};

export type Banner = {
	_id: string;
	image: string;
	content: string;
	category: string;
};

export type Product = {
	_id: string;
	name: string;
	created_at: string;
	updated_at: string;
	images: string[];
	price: number;
	sale: any;
	salePrice: number;
	finalPrice: number;
	type: string;
	details: {
		category: Category;
		tags: Tag[];
		description: string;
		shortDescription: string;
		dimensions: string;
		materials: string;
		weight: string;
		publishers: string;
		stores: string;
		variants: [
			{
				_id: string;
				color: string;
				inStock: boolean;
				quantity: number;
				size: string;
			}
		];
	};
};

export type Blog = {
	_id: string;
	author: string;
	title: string;
	open_paragraph: string;
	body_paragraph: string;
	close_paragraph: string;
	quotes: string;
	categories: Category;
	tags: Tag[];
	imgSrc: string;
	created_at: string;
	updated_at: string;
	totalComments: number;
	views: number;
	comments: [
		{
			created_at: string;
			text: string;
			user: string;
			_id: string;
		}
	];
};
