import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Usuario from '@/pages/Usuario';
import Form from '@/pages/Form';

Vue.use(VueRouter);

export default new VueRouter({
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