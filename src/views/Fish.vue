<template>
<div style="display: flex;flex-wrap:wrap; justify-content:center">
  <div v-for="(item,index) in fishes" :key="index">
    <div class="card" style="width: 10rem; padding:10px;height:250px">
      <img :src="fishes[index].icon_uri" alt="icon-image" class="card-img-top" >
      <div class="card-body">
        <p class="card-text" style="margin-bottom:0;">
            {{ fishes[index].name["name-KRko"] }}
        </p>
        
        <small><router-link :to="`/fish/${fishes[index].id}`">details</router-link></small>
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

</style>