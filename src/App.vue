<template>
  <section id="app">
    <nav class="navbar is-transparent is-fixed-top has-shadow">
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
            <figure>
              <img src="https://media.licdn.com/dms/image/C4E03AQFp9TcCnUmrFQ/profile-displayphoto-shrink_100_100/0?e=1536796800&v=beta&t=1qWDuWwrow24Odl7T2rgG-if_fC_2fG7Zqo4MnFA-20">
            </figure>
            <section class="field is-grouped">
              <section class="navbar-dropdown is-boxed is-right">
                <a class="navbar-item" href="#">Perfil</a>
                <a class="navbar-item" href="#">Configurações</a>
                <hr class="navbar-divider">
                <a class="navbar-item is-active" href="#">Sair</a>
              </section>
            </section>
          </section>
        </section>
      </section>
    </nav>

    <section class="column content">
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
  </section>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        showNav: false
      };
    }
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
  .navbar-botton {
    display: inline-flex;
  }
</style>
