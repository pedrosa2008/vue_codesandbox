<template>
  <section>
    <button class="button field is-danger" @click="onClearSelectedClick"
      :disabled="(JSON.stringify(selected) === JSON.stringify({}))">
      <span>Clear selected</span>
    </button>
    <b-table :data="data" :columns="columns" :selected.sync="selected" :loading="isLoading" striped paginated per-page="5" pagination-simple>
      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Nenhum registro encontrado.</p>
          </div>
        </section>
      </template>
    </b-table>

    <pre>{{ selected }}</pre>
  </section>
</template>

<script>
  export default {
    name: "DataTable",
    props: ["data", "columns", "selected", "isLoading"],
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
