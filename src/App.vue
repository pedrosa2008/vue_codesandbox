<template>
  <section id="app">
    <section class="header">
      <section class="header-logo">
        <img src="./assets/logo.png">
      </section>
      <!-- Main container -->
      <nav class="level">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <p class="title">Vuejs App</p>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <p class="level-item"><strong>All</strong></p>
          <p class="level-item"><a>Published</a></p>
          <p class="level-item"><a>Drafts</a></p>
          <p class="level-item"><a>Deleted</a></p>
        </div>
      </nav>
    </section>

    <section class="section">
      <section class="container is-fluid">
        <router-view />
      </section>
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
    padding: 2rem 1.5rem 2rem;
  }
  .header-logo{
    width: 100px;
    color: #fff;
    border-radius: 3px;
    float: left;
    position: relative;
    left: 20px;
  }
  .footer {
    padding: 1.5rem;
  }
</style>

