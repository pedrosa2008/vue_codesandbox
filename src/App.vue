<template>
  <section id="app">
    <b-loading :active.sync="isGlobalLoading"></b-loading>

    <barra-top></barra-top>
    
    <section id="content" v-bind:class="[ authenticated ? 'content' : 'content-marginless', 'column' ]">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </section>

    <barra-footer></barra-footer>
  </section>
</template>

<script>
import { mapState } from "vuex";
import BarraTop from "./components/layout/BarraTop.vue";
import BarraFooter from "./components/layout/BarraFooter.vue";

export default {
  name: "App",
  components: {
    BarraTop,
    BarraFooter
  },
  data() {
    return {
      showNav: false
    };
  },
  computed: mapState({
    authenticated: state => state.authStore.authenticated,
    isGlobalLoading: state => state.authStore.loading
  })
};
</script>

<style scoped>
.content {
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}
.content-marginless {
  min-height: -webkit-fill-available;
}
</style>
