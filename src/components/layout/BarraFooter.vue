<template>
  <nav class="navbar is-transparent is-fixed-bottom has-shadow is-inline-flex-touch">
    <section class="navbar-start start">
      <section class="navbar-item">
        <p>
          <strong>Finanças</strong> by <a>Parzival</a>.
        </p>
      </section>
    </section>
    <section class="navbar-end end">
      <section class="navbar-item">
        <section class="tags has-addons">
          <span class="tag is-dark">versão</span>
          <span class="tag is-info">0.0.1</span>
        </section>
      </section>
    </section>
  </nav>
</template>

<script>
export default {
  name: "BarraFooter"
};
</script>

<style scoped>
.start {
  width: 50%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.end {
  width: 50%;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
