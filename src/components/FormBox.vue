<template>
  <section class="box">
    <section class="media-content">
      <section class="content">
        <b-tag type="is-warning" v-show="message">{{message}}</b-tag>
        <slot></slot>
      </section>
    </section>

    <section class="media-footer">
      <hr/>
      <section class="buttons has-addons is-right">
        <a class="button is-secondary" @click="onClearClick" >Clear</a>
        <a class="button is-primary" v-on:click="$emit('save')" >Save</a>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: "FormBox",
    props: ["message"],
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
