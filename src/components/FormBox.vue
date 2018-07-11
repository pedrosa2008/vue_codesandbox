<template>
  <div class="box">
    <div class="media-content">
      <div class="content">
        <b-tag type="is-warning" v-show="message">{{message}}</b-tag>
        <slot></slot>
      </div>
    </div>

    <div class="media-footer">
      <hr/>
      <div class="buttons has-addons is-right">
        <a class="button is-secondary" @click="onClearClick" >Clear</a>
        <a class="button is-primary" v-on:click="$emit('save')" >Save</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormBox",
  props: ["title", "message"],
  data() {
    return {};
  },
  methods: {
    onClearClick: function() {
      this.$emit("clear");
    }
  }
};
</script>
