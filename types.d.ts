export interface Category{
	title: string;
}

export interface Post{
	_id:string;
	categories: any;
	author:{
		image: string;
		name:string;
	};
	description:string;
	mainimage:{
		asset: {
			url: string;
		}
	};
	slug:{
		current: string;
	};
	title:string;
	body: [object];
}
