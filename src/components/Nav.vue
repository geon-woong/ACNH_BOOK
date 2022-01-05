<template>
  <nav class="navbar">
    <router-link class="navbar-brand" to="/">모여봐요 동물의 숲</router-link>
    <router-link class="nav-item" to="Fish" @click="moveTab('fish')">물고기</router-link>
    <router-link class="nav-item" to="bug" @click="moveTab('bug')">곤충</router-link>
    <router-link class="nav-item" to="sea" @click="moveTab('sea')">해산물</router-link>
    <router-link class="nav-item" to="fossils" @click="moveTab('fossils')">화석</router-link> 
  </nav>
  <div style="display:block; height:60px"></div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
      moveTab(param) {
        this.$router.push('/' + param)
      }
    },
}
</script>

<style scoped>

.navbar{
    background: var(--first-color) !important;
    justify-content: start;
    position: fixed;
    top: 0%;
    width: 100%;
    height: 60px;
    z-index:9999
}
.navbar-brand{
  color: var(--bg-color) !important;
}
.nav-item{
  padding: 0 20px;
  color: var(--bg-color) !important;
}
</style>