<template>
  <section id="app">
    <b-loading :active.sync="isGlobalLoading"></b-loading>

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
            <figure class="is-hidden-mobile">
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

    <section id="content" v-bind:class="[ authenticated ? 'content' : 'content2', 'column' ]">
      <router-view />
    </section>

    <nav class="navbar is-transparent is-fixed-bottom has-shadow is-inline-flex-mobile">
      <section class="navbar-start">
        <section class="navbar-item">
          <p>
            <strong>Finanças</strong> by <a>Parzival</a>.
          </p>
        </section>
      </section>
      <section class="navbar-end">
        <section class="navbar-item">
          <section class="tags has-addons">
            <span class="tag is-dark">versão</span>
            <span class="tag is-info">0.0.1</span>
          </section>
        </section>
      </section>
    </nav>
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
  .content2 {
    min-height: -webkit-fill-available;
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