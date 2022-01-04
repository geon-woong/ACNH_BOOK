<template>
  <h1>해산물</h1>
  <div style="display: flex;flex-wrap:wrap; justify-content:center">
  <div v-for="(item,index) in sea" :key="index">
    <div class="card" style="width: 10rem; padding:10px;height:250px">
      <img :src="sea[index].icon_uri" alt="icon-image" class="card-img-top" >
      <div class="card-body">
        <p class="card-text" style="margin-bottom:0;">
            {{ sea[index].name["name-KRko"] }}
        </p>
        
        <small><router-link :to="`/sea/${sea[index].id}`">details</router-link></small>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
created () {
    this.$store.dispatch('FETCH_SEA');
},
computed: {
    sea() {
        return this.$store.state.sea
    }
},
}
</script>

<style>

</style>