export interface Session{
	session?: {
		user: {
			name: string,
			email: string,
			image: string
		},
		accessToken: string,
		expires: string
	},
	posts?: [{
		mail: string,
		id: string,
		message: string,
		name: string,
		url: string
	}],
	push(doc: any): () => {
		mail: string,
		id: string,
		message: string,
		name: string,
	},
	user?: {
		name: string,
		email: string,
		image: string
	},
	mail?: string,
	id: string,
	message: string,
	name: string,
	postImage: string,
	posterImage: string,
	url: string
}

