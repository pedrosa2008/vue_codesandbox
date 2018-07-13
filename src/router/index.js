import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Usuario from '@/pages/Usuario';
import Form from '@/pages/Form';

Vue.use(Router);

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
      component: Dashboard
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: Usuario
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
  ]
});