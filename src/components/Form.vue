<template>
  <form @submit.prevent="submitForm">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    submitForm() {
      this.$emit('submitted', { name: this.name })
    }
  }
}
</script>