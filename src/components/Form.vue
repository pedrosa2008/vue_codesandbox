<template>
  <section>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Bulma</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Components</a></li>
        <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
      </ul>
    </nav>
    
    <form-box message="A help message" v-on:save="onSave" @clear="onClear">
      <b-field label="Name">
        <b-input v-model="name" type="text" minlength="10" maxlength="20"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input v-model="email" type="email"></b-input>
      </b-field>
    </form-box>

    <data-table :data="dados" :columns="colunas" :selected="selecionado" @clearSelected="clearSelecionado"></data-table>
  </section>
</template>

<script>
  import FormBox from "./FormBox.vue";
  import DataTable from "./DataTable.vue";

  const dados = require('@/assets/data_test.json');

  export default {

    name: "Form",
    components: {
      FormBox,
      DataTable
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
        dados,
        colunas,
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
