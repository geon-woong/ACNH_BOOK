<template>
  <div style="display: flex;flex-wrap:wrap; justify-content:center">
  <div v-for="(item,index) in fossils" :key="index">
    <div class="card">
      <img :src="fossils[index].image_uri" alt="image" class="card-img-top" >
      <div class="card-body">
        <p class="card-text" style="text-align:center;margin-bottom:0;">
            {{ fossils[index].name["name-KRko"] }}
        </p>
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
        this.$store.dispatch('FETCH_FOSSILS')
    },
    computed: {
      fossils() {
        return this.$store.state.fossils 
      }
    },

}
</script>

<style>

</style>