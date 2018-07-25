<template>
  <section>
    <form-box message="A help message" v-on:save-click="onSave" @clear-click="onClear">
      <b-field label="Name">
        <b-input v-model="name" type="text" minlength="10" maxlength="20"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input v-model="email" type="email"></b-input>
      </b-field>
    </form-box>

    <form-box :displayButtons="false">
      <data-table v-bind:data="lista" :columns="colunas" :isLoading="loading"
        @clear-selected-click="clearSelecionado" v-on:select-click="selecionar">
      </data-table>
      
      <pre style="border-radius: 0.5rem">{{ itemSelecionado }}</pre>
    </form-box>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import FormBox from "@/components/FormBox.vue";
import DataTable from "@/components/DataTable.vue";

export default {
  components: {
    FormBox,
    DataTable
  },
  created() {
    this.$store.dispatch("testStore/getAll");
  },
  data() {
    return {
      name: "",
      email: "",
      itemSelecionado: {},
      colunas
    };
  },
  computed: {
    ...mapGetters("testStore", {
      lista: "lista",
      loading: "loading"
    })
  },
  methods: {
    onSave: function() {
      console.log("Save", this.name, this.email);
    },
    onClear: function() {
      alert("clear");
    },
    clearSelecionado: function() {
      this.itemSelecionado = {};
    },
    selecionar: function(itemSelecionado) {
      this.itemSelecionado = itemSelecionado;
    }
  }
};

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
</script>
