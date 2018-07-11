<template>
  <section>
    <button class="button field is-danger" @click="onClearSelectedClick"
      :disabled="(JSON.stringify(selected) === JSON.stringify({}))">
      <span>Clear selected</span>
    </button>
    <b-table :data="data" :columns="columns" :selected.sync="selected"></b-table>

    <pre>{{ selected }}</pre>
  </section>
</template>

<script>
export default {
  name: "DataTable",
  props: ["data", "columns", "selected"],
  data() {
    return {};
  },
  methods: {
    onClearSelectedClick: function() {
      this.$emit("clearSelected");
    }
  }
};
</script>
