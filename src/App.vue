<template>
  <section id="app">
    <section class="header">
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <section class="header-logo">
              <figure class="image is-48x48">
                <img src="https://br.vuejs.org/images/logo.png">
              </figure>
            </section>
            <p class="title">Vuejs App</p>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item"><strong>Dashboard</strong></p>
          <p class="level-item"><a>Usuários</a></p>
          <p class="level-item"><a>Configurações</a></p>
        </div>
      </nav>
    </section>

    <section class="column">
      <router-view />
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Vuejs App</strong> by <a href="#">Fernando Pedrosa</a>.
          <strong>Versão</strong> 1.0.0
        </p>
      </div>
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

