<template>
<div style="display: flex;flex-wrap:wrap; justify-content:center">
  <div v-for="(item,index) in bugs" :key="index">
    <div class="card" >
      <img :src="bugs[index].icon_uri" alt="icon-image" class="card-img-top" >
      <div class="card-body">
        <p class="card-text">
            {{ bugs[index].name["name-KRko"] }}
        </p>
        <router-link :to="`/bug/${bugs[index].id}`" class="card-link"></router-link>
      </div>
    </div>
      <!-- <img :src="fishes[index].image_uri" alt=""> -->
  </div>
</div>
  
</template>

<script>
export default {
    data() {
        return {
        }
    },
    created(){
        this.$store.dispatch('FETCH_BUGS');
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },

}
</script>

<style>

</style>