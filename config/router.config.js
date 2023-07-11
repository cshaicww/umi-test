export default [
	// login
	{
		path: '/login',
		component: './Login',
	},

	{
		path: '/',
		component: '../components/layouts/BasicLayout',
		routes: [
			{ path: '/', redirect: '/home'},
			{ path: '/home', component: './Home'},
			{ path: '/filmsAndTelevision', component: './FilmsAndTelevision'},
			
		]
	}
]