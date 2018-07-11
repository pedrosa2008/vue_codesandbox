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

    <data-table :data="usuarios" :columns="colunas" :selected="selecionado" :loading="loading" @clearSelected="clearSelecionado"></data-table>
  </section>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import FormBox from "./FormBox.vue";
  import DataTable from "./DataTable.vue";

  export default {
    name: "Form",
    components: {
      FormBox,
      DataTable
    },
    computed: mapState({
      usuarios: state => state.usuarios.all
    }),
    created () {
      this.loading = true;
      this.$store.dispatch('usuarios/getAllUsuarios');
      this.loading = false;
    },
    data() {
      const colunas = [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true
        },
        {
          field: "first_name",
          label: "First Name"
        },
        {
          field: "last_name",
          label: "Last Name"
        },
        {
          field: "date",
          label: "Date",
          centered: true
        },
        {
          field: "gender",
          label: "Gender"
        }
      ];

      return {
        name: "",
        email: "",
        colunas,
        loading: false,
        selecionado: {}
      };
    },
    methods: {
      onSave: function() {
        console.log("Save", this.name, this.email);
      },
      onClear: function() {
        alert("clear");
      },
      clearSelecionado: function() {
        this.selecionado = {};
      }
    }
  };
</script>