<template>
  <section id="app">
    <section class="header">
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
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
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
  .header {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    padding: 2rem 1.5rem 2rem;
  }
  .footer {
    padding: 2rem 1.5rem 2rem;
  }
</style>

