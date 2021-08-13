<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
        <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    </div>
    <router-view />
  </div>
</template>
<script>
import axios from "axios"
export default {
  data(){
    return {
      users:[]
    }
  },
  mounted(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.users = response.data;
    })
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
