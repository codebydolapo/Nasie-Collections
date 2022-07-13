export default interface Session{
	session: {
		user: {
			name: string,
			email: string,
			image: string
		},
		accessToken: string,
		expires: string
	}
}