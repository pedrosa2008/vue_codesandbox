<template>
  <section class="box">
    {{ pageName }}
    
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Entradas</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Saídas</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Saldo</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Cartão MasterCard</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Cartão Visa</p>
              <p class="subtitle">Subtitle</p>
            </article>
          </div>
        </div>
      </div>
    </div>
    
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Datatable de Histórico</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Datatable de Histórico</p>
          <p class="subtitle">Subtitle</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pageName: "Dashboard Page"
    };
  }
};
</script>
