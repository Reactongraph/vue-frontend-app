import { mapState, mapActions } from 'vuex';

export default {
  data() {
		return {
			email: '',
			password: '',
			submitted: false
		};
  },
  
	computed: {
    ...mapState('account', [ 'status' ]),
  },
  
	methods: {
		...mapActions('account', [ 'register' ]),
		handleSubmit(e) {
			this.submitted = true;
			const { email, password } = this;
			if (email && password) {
				this.register({ username: email, password });
			}
		}
	}
}