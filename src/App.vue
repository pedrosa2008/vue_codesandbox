<template>
  <section id="app">
    <section class="header">
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <section class="level-left">
          <section class="level-item">
            <section class="header-logo">
              <figure class="image is-48x48">
                <img src="https://br.vuejs.org/images/logo.png">
              </figure>
            </section>
            <p class="title">Vuejs App</p>
          </section>
        </section>

        <!-- Right side -->
        <section class="level-right">
          <p class="level-item"><a>Dashboard</a></p>
          <p class="level-item"><strong>Usuários</strong></p>
          <p class="level-item"><a>Configurações</a></p>
        </section>
      </nav>
    </section>

    <section class="column">
      <router-view />
    </section>

    <footer class="footer">
      <section class="content has-text-centered">
        <p>
          <strong>Vuejs App</strong> by <a>Fernando Pedrosa</a>.
          <strong>Versão</strong> 1.0.0
        </p>
      </section>
    </footer>
  </section>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  .section {
    padding: 1rem;
  }
  .header {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    padding: 1rem;
  }
  .header-logo {
    width: 60px;
  }
  .footer {
    padding: 1.5rem;
  }
</style>

