<template>
  <nav class="navbar navbar-light bg-light" style="justify-content:start" >
  <router-link class="navbar-brand" to="/">모여봐요 동물의 숲</router-link>
  <router-link class="nav-item" to="Fish">물고기</router-link>
  <router-link class="nav-item" to="bug">곤충</router-link>
  <router-link class="nav-item" to="sea">해산물</router-link>
  <router-link class="nav-item" to="fossils">화석</router-link>
</nav>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style scoped>
  .nav-item{
    padding: 0 20px;
  }
</style>