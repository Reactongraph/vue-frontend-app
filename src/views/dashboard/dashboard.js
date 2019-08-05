import Sidebar from '../../components/sidebar/sidebar.vue';
import { mapState,mapActions } from 'vuex';

export default {
  components:{ Sidebar },

  name: 'Dashboard',

  data: () => ({ isVisible: false }),

  computed: {
    ...mapState('account', [ 'status' ]),
  },
  
  methods: {
    ...mapActions('account', [ 'logout' ]),
		handleHamburger() {
			this.isVisible = !this.isVisible;
		}
	}
  
};
