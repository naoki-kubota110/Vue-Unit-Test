<template>
    <nav>
      <a id="profile" href="/profile">My Profile</a>
      <a v-if="admin" id="admin" href="/admin">Admin</a>
      <a v-show="show" id="show" href="/admin">v-show</a>
    </nav>
</template>
<script>
export default {
  data(){
    return {
      admin: false,
      show: false
    }
  }
}
</script>