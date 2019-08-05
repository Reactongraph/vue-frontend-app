import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from '../views/home/home.vue';
import About from '../views/about/about.vue';
import Login from '../views/login/login.vue';
import Signup from '../views/signup/signup.vue';
import Dashboard from '../views/dashboard/dashboard.vue';

Vue.use(vueRouter);

const routes = [{
    path:'/login',
    name: 'Login',
    component: Login,
  },{
    path:'/register',
    name: 'Signup',
    component: Signup,
  },{
    path:'/',
    name: 'Dashboard',
    component: Dashboard,
    children: [{
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },{
        path: '/about',
        name: 'about',
        component: About
      }
    ],
  }
];

const  router = new vueRouter({routes});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    return next('/login');
  }else if (!authRequired && loggedIn) {
    return next('/');
  }
  next();
})

export default router;
