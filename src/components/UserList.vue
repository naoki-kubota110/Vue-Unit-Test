<template>
<div>
  <h2>ユーザ一覧</h2>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
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