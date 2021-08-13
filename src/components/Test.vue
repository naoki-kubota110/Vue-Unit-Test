<template>
<div>
  <div>Hello {{ msg }}</div>
  <div>{{ upperCaseName }}</div>
</div>
</template>
<script>
export default {
  props:{
    msg:{
      type:String
    }
  },
  data(){
    return{
      name: "John"
    }
  },
  computed: {
    upperCaseName(){
      return this.name.toUpperCase()
    }
  }
}
</script>