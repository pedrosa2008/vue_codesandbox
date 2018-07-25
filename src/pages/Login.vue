<template>
  <section class="columns is-mobile is-centered is-vcentered">
    <section class="column is-3-fullhd is-5-widescreen is-7-tablet is-10-mobile is-narrow">
      <section class="box">
        <form v-on:submit.prevent="authenticate(usuario)">
          <section class="media-content">
            <section class="content">
              <h1 class="is-size-1 has-text-primary">Finanças</h1>
              <b-tag type="is-warning" class="field" v-if="erro">Não foi possível autenticar! {{ erro }}</b-tag>
              <b-field>
                <b-input v-model="usuario.login" type="text" placeholder="Login" required minlength="5" maxlength="20" ></b-input>
              </b-field>
              <b-field>
                  <b-input v-model="usuario.senha" type="password" placeholder="Senha" password-reveal required></b-input>
              </b-field>
            </section>
          </section>

          <section class="media-footer">
            <hr/>
            <section class="buttons has-addons is-right">
              <a class="button is-secondary" v-on:click="onCancelarClick" >Cancelar</a>
              <button type="submit" class="button is-primary">Logar</button>
            </section>
          </section>
        </form>
      </section>
    </section>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      usuario: {
        login: "",
        senha: ""
      }
    };
  },
  computed: {
    ...mapGetters("authStore", {
      erro: "erro"
    })
  },
  methods: {
    ...mapActions("authStore", ["authenticate"]),
    onCancelarClick: function() {
      this.$store.dispatch("authStore/limparFormLogin");

      this.usuario = {
        login: "",
        senha: ""
      };
    }
  }
};
</script>

<style scoped>
.is-vcentered {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: -webkit-fill-available;
}
</style>
