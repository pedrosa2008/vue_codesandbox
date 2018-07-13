<template>
  <section id="app">
    <nav class="navbar is-transparent is-fixed-top has-shadow" v-if="authenticated">
      <section class="navbar-brand">
        <a class="navbar-item" href="#">
          <p class="title">Vuejs App</p>
        </a>
        <section class="navbar-burger burger" data-target="navbarTop" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </section>
      </section>

      <section id="navbarTop" class="navbar-menu" :class="{ 'is-active': showNav }">
        <section class="navbar-start">
          <a class="navbar-item" href="#">Dashboard</a>
          <section class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">Pessoas</a>
            <section class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">Pessoa Física</a>
              <a class="navbar-item" href="#">Pessoa Jurídica</a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">Elements</a>
              <a class="navbar-item is-active" href="#">Components</a>
            </section>
          </section>
        </section>

        <section class="navbar-end">
          <section class="navbar-item is-hoverable avatar">
          <section class="user">
            <span>{{ usuarioLogado.nome }}</span>
            <figure>
              <img v-bind:src="usuarioLogado.avatar">
            </figure>
          </section>
            <section class="navbar-dropdown is-boxed is-right">
              <a class="navbar-item" href="#">Perfil</a>
              <a class="navbar-item" href="#">Configurações</a>
              <hr class="navbar-divider">
              <a class="navbar-item is-active" v-on:click="logout">Sair</a>
            </section>
          </section>
        </section>
      </section>
    </nav>

    <section id="content" class="column content">
      <router-view />
    </section>

    <nav class="navbar is-transparent is-fixed-bottom has-shadow navbar-botton">
      <section class="navbar-start">
        <section class="navbar-item">
          <p>
            <strong>Vuejs App</strong> by <a>Fernando Pedrosa</a>.
          </p>
        </section>
      </section>
      <section class="navbar-end">
        <section class="navbar-item">
          <section class="tags has-addons">
            <span class="tag is-dark">app</span>
            <span class="tag is-info">0.0.1</span>
          </section>
        </section>
      </section>
    </nav>
    <b-loading :is-full-page="isFullPage" :active.sync="isGlobalLoading" :can-cancel="false"></b-loading>
  </section>
</template>

<script>
  import { mapState/*, mapActions */ } from "vuex";

  export default {
    name: "App",
    data() {
      return {
        showNav: false
      };
    },
    computed: mapState({
      usuarioLogado: state => state.authStore.usuarioLogado,
      authenticated: state => state.authStore.authenticated,
      isGlobalLoading: state => state.authStore.loading
    }),
    methods: {
      logout: function() {
        this.$store.dispatch("authStore/logout");
      }
    }
    /*
    methods: mapActions('authStore', [
      'logout'
    ])
    */
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
  .content {
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
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
  .navbar-botton {
    display: inline-flex;
  }
</style>