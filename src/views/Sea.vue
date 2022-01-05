<template>
  <div style="display: flex;flex-wrap:wrap; justify-content:center">
  <div v-for="(item,index) in sea" :key="index">
    <div class="card">
      <img :src="sea[index].icon_uri" alt="icon-image" class="card-img-top" >
      <div class="card-body">
        <p class="card-text" >
            {{ sea[index].name["name-KRko"] }}
        </p>
        <router-link :to="`/sea/${sea[index].id}`" class="card-link"></router-link>
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