<template>
  <section class="box">
    {{ pageName }}
    
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">One</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">One</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">One</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">One</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">One</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Dashboard",
    data() {
      return {
        pageName: "Dashboard Page"
      }
    }
  };
</script>