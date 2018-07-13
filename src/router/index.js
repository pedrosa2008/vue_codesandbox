import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Usuario from '@/pages/Usuario';
import Form from '@/pages/Form';

Vue.use(Router);

//const router = new VueRouter({ routes: routes, mode: 'history' });

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: Usuario,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      meta: {
        requiresAuth: true
      }
    },
  ]
});