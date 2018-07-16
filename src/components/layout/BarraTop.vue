<template>
  <nav class="navbar is-transparent is-fixed-top has-shadow" v-if="authenticated">
    <section class="navbar-brand">
      <a class="navbar-item">
        <p class="title">Finanças</p>
      </a>
      <section class="navbar-burger burger" data-target="navbarTop" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </section>
    </section>

    <section id="navbarTop" class="navbar-menu" :class="{ 'is-active': showNav }">
      <section class="navbar-start">
        <a class="navbar-item">Dashboard</a>
        <section class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">Pessoas</a>
          <section class="navbar-dropdown is-boxed">
            <a class="navbar-item">Pessoa Física</a>
            <a class="navbar-item">Pessoa Jurídica</a>
          </section>
        </section>
      </section>

      <section class="navbar-end">
        <section class="navbar-item is-hoverable avatar">
        <section class="user">
          <span>{{ usuarioLogado.nome }}</span>
          <figure class="is-hidden-touch">
            <img v-bind:src="usuarioLogado.avatar">
          </figure>
        </section>
          <section class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item">Perfil</a>
            <hr class="navbar-divider">
            <a class="navbar-item has-text-link" v-on:click="logout">Sair</a>
          </section>
        </section>
      </section>
    </section>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "BarraTop",
  data() {
    return {
      showNav: false
    };
  },
  computed: mapState({
    authenticated: state => state.authStore.authenticated,
    usuarioLogado: state => state.authStore.usuarioLogado
  }),
  methods: mapActions("authStore", ["logout"])
};
</script>

<style scoped>
.header {
  font-weight: bold;
  position: relative;
  overflow: hidden;
  padding: 1rem;
}
.title {
  color: #7957d5;
  font-weight: 900;
}
.icon {
  display: flex;
}
.avatar {
  padding: 0;
}
.avatar figure {
  margin-top: 0.4rem;
  margin-right: 1rem;
}
.avatar img {
  min-height: 40px;
  border-radius: 10rem;
}
.avatar span {
  margin: 0.9rem;
}
.user {
  display: inline-flex;
}
</style>
