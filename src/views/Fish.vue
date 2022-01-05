<template>
<div style="display: flex;flex-wrap:wrap; justify-content:center">
  <div v-for="(item,index) in fishes" :key="index">
    <div class="card" >
      <img :src="fishes[index].icon_uri" alt="icon-image" class="card-img-top" >
      <div class="card-body">
        <p class="card-text" style="margin-bottom:0;">{{ fishes[index].name["name-KRko"] }}</p>
        <router-link :to="`/fish/${fishes[index].id}`" class="card-link"></router-link>
      </div>
    </div>
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
       this.$store.dispatch('FETCH_FISHES');
            console.log(this.$route.params)
    },
    computed: {
      fishes() {
        return this.$store.state.fishes 
      }
    },

}
</script>

<style>

.card-link{
    position: absolute;top: 0;left: 0;
    width: 100%;height: 100%;
}
</style>