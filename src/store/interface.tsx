interface Owner {
	firstName: string,
	lastName: string,
	picture: string,
	title: string,
}

export interface IComments {
	comments: CommentsInterface[],
}

export interface CommentsInterface {
	owner: Owner,
	message: string,
	publishDate: number,
	id: any,
	image: string,
	likes: number,
}

export interface getPosts {
	data: IPostDetails[],
	loading: boolean,
}

export interface IState {
	fetchData: IfetchData,
	fetchSinglePost: any,
	fetchComments: CommentsInterface[],
	CurrentPage: number,
	loading: boolean,
}

export interface IfetchData {
	data: IPostDetails[],
	limit: number,
	page: number,
	total: number,
}

export interface IPagination {
	page: number | string | string[],
	totalPosts: number,
	limit: number,
}

export interface IPostDetails {
	id: string,
	image: string,
	likes: number,
	link: string,
	owner: Owner,
	publishDate: string,
	tags: string[],
	text: string
	updatedDate: string,
}

export interface IDetails {
	type: string,
	payload: IfetchData,
}

export interface singlePost {
	data: IPostDetails,
	comments: CommentsInterface[],
	id: string,
	loading: boolean,
}

export interface ICreate {
	text: string,
	image: string,
	likes: number,
	tags: string[],
	owner: string,
}

export interface IData {
	text: string,
	tags: string,
	image: string,
	id: string,
}

export interface ActionType {
	payload: any;
	type: string,
}

export interface ISetCommentsSuccess {
	data: CommentsInterface[],
	limit: number,
	page: number,
	total: number,
}