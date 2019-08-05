import Loader from '../../components/loader/loader.vue';
import { mapState, mapActions } from 'vuex'

export default {
  components:{ Loader },

  name: 'App',
  
  created() {
    axios.interceptors.request.use( (config)=> {
      // Do something before request is sent
      this.$store.commit('loader/LOADER',true);
      return config;
    },  (error)=> {
      // Do something with request error
      this.$store.commit('loader/LOADER',false);

      return Promise.reject(error);
    });

    axios.interceptors.response.use((response)=>{
      console.log(response);
      this.$store.commit('loader/LOADER',false);
      return response;
      }, (err)=> {
        this.$router.push('/login')
    });
  },

  computed: {
    ...mapState('loader', ['loading'])
	},
  
  methods: {
    ...mapActions('loader', [ 'LOADER' ]),
  },
}