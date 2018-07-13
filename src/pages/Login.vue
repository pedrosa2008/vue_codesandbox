<template>
  <section class="box login-box">
    <section class="media-content">
      <section class="content">
        <b-tag type="is-warning" v-if="erro">
          Não foi possível autenticar! {{ erro }}
        </b-tag>
        <hr v-if="erro" />
        <b-field label="Login">
          <b-input v-model="usuario.login" type="text" minlength="5" maxlength="20"></b-input>
        </b-field>
        <b-field label="Senha">
          <b-input v-model="usuario.senha" type="password"></b-input>
        </b-field>
      </section>
    </section>

    <section class="media-footer">
      <hr/>
      <section class="buttons has-addons is-right">
        <a class="button is-secondary" v-on:click="onCancelarClick" >Cancelar</a>
        <a class="button is-primary" @click="onLogarClick" >Logar</a>
      </section>
    </section>
  </section>
</template>

<script>
  import { mapState} from "vuex";

  export default {
    name: "Login",
    data() {
      return {
        usuario: {
          login: '',
          senha: ''
        }
      }
    },
    computed: mapState({
      erro: state => state.authStore.usuarioLogado.erro
    }),
    methods: {
      onLogarClick: function() {
        this.$store.dispatch("authStore/authenticate", this.usuario);
      },
      onCancelarClick: function() {
       this.usuario = {
          login: '',
          senha: ''
        }
      }
    }
  };
</script>

<style scoped>
  .login-box {
    position:fixed;
    top: 50%;
    left: 50%;
    width: 30em;
    margin-top: -9em; /*set to a negative number 1/2 of your height*/
    margin-left: -15em; /*set to a negative number 1/2 of your width*/
  }
</style>