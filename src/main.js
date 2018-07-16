// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import store from "./store";
import router from "./router";
import Buefy from "buefy";
import "buefy/lib/buefy.css";

import App from "./App";

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultContainerElement: "#content"
});

//valida se o usuário está logado
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const authenticated = store.state.authStore.authenticated;

  if (requiresAuth && !authenticated) {
    next("/");
  } else if (authenticated && to.path === "/") {
    next("/dashboard");
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
