export default {
	props: {
		isVisible: Boolean
  },
  
	data: () => ({
		list: [
			{
				name: 'Home',
				path: '/home'
			},
			{
				name: 'About',
				path: '/about'
			}
		]
	})
};
