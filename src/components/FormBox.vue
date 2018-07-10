<template>
  <div>
      <b-message :title="title" :closable="false">
        <b-tag type="is-warning" v-show="message">{{message}}</b-tag>
        <slot></slot>
        <hr/>
        <p class="buttons is-pulled-right">
          <a class="button is-primary" v-on:click="$emit('save')" >Save</a>
          <a class="button is-secondary" @click="onClearClick" >Clear</a>
        </p>
      </b-message>
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
