<template>
  <Nav></Nav>
    <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    Nav
},
 
}
</script>

<style>

</style>
