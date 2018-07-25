<template>
  <section>
    <button class="button field is-danger" @click="onClearSelectedClick" :disabled="disabled">
      <span>Clear selected</span>
    </button>
    <b-table :data="data" v-bind:columns="columns" :selected.sync="selected" :loading="isLoading"
      striped paginated per-page="5" pagination-simple>
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
  </section>
</template>

<script>
export default {
  name: "data-table",
  props: ["data", "columns", "isLoading"],
  data() {
    return {
      selected: {}
    };
  },
  methods: {
    onClearSelectedClick: function() {
      this.$emit("clear-selected-click");
      this.selected = {};
    }
  },
  computed: {
    disabled: function() {
      this.$emit("select-click", this.selected);
      return JSON.stringify(this.selected) === JSON.stringify({});
    }
  }
};
</script>
