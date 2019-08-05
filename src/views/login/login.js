import { mapState, mapActions } from 'vuex';

export default {
	data() {
		return {
			username: '',
			password: '',
			submitted: false
		};
	},
  
  computed: {
    ...mapState('account', [ 'status' ]),
	},
  
  methods: {
		...mapActions('account', [ 'login' ]),
		handleSubmit(e) {
			this.submitted = true;
			const { username, password } = this;
			if (username && password) {
				this.login({ username, password });
			}
		}
	}
};
