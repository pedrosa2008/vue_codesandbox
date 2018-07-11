<template>
  <section>
    <form-box message="A help message" v-on:save="onSave" @clear="onClear">
      <b-field label="Name">
        <b-input v-model="name" type="text" minlength="10" maxlength="20"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input v-model="email" type="email"></b-input>
      </b-field>
    </form-box>

    <data-table v-bind:data="lista" :columns="colunas" :isLoading="loading" @clearSelected="clearSelecionado" v-on:select="selecionar"></data-table>
    
    <pre>{{ usuarioSelecionado }}</pre>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  import FormBox from "./FormBox.vue";
  import DataTable from "./DataTable.vue";

  export default {
    name: "Form",
    components: {
      FormBox,
      DataTable
    },
    created () {
      this.$store.dispatch('usuarios/getAllUsuarios');
    },
    data() {
      return {
        name: "",
        email: "",
        colunas
      };
    },
    computed: mapState({
      lista: state => state.usuarios.lista,
      loading: state => state.usuarios.loading,
      usuarioSelecionado: state => state.usuarios.itemSelecionado
    }),
    methods: {
      onSave: function() {
        console.log("Save", this.name, this.email);
      },
      onClear: function() {
        alert("clear");
      },
      clearSelecionado: function() {
        this.$store.dispatch('usuarios/setUsuarioSelecionado', {});
      },
      selecionar: function(item) {
        //console.log(item);
        this.$store.dispatch('usuarios/setUsuarioSelecionado', item);
      }
    }
  };
  
  const colunas = [
    {
      field: "id",
      label: "ID",
      width: "40",
      numeric: true
    }, {
      field: "first_name",
      label: "First Name"
    }, {
      field: "last_name",
      label: "Last Name"
    }, {
      field: "date",
      label: "Date",
      centered: true
    }, {
      field: "gender",
      label: "Gender"
    }
  ];
</script>