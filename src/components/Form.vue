<template>
  <div>
    <!--
    criar componente para o breadcrumb
    -->
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Bulma</a></li>
        <li><a href="#">Documentation</a></li>
        <li><a href="#">Components</a></li>
        <li class="is-active"><a href="#" aria-current="page">Breadcrumb</a></li>
      </ul>
    </nav>
    
    <form-box title="Hello Form Box" message="A help message" v-on:save="onSave" @clear="onClear">
        <b-field label="Name">
            <b-input v-model="name" type="text" minlength="10" maxlength="20"></b-input>
        </b-field>
        <b-field label="Email">
            <b-input v-model="email" type="email"></b-input>
        </b-field>
    </form-box>
  </div>
</template>

<script>
import FormBox from './FormBox.vue';

export default {
  name: 'Form',
  components: {
    FormBox
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      email: ''
    }
  },
  methods: {
    onSave: function () {
      console.log('Save', this.name, this.email)
    },
    onClear: function () {
      alert('clear')
    }
  }
}
</script>