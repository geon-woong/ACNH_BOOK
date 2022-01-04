<template>
  <div>
      <h2>
      {{ fishDetail.name["name-KRko"] }}  
      </h2>
      <img :src="fishDetail.image_uri" alt="">
  </div>
</template>

<script>
export default {
created () {
  const contentId = this.$route.params.id
  this.$store.dispatch('FETCH_FISH_DETAIL', contentId)
},
computed: {
  fishDetail() {
    return this.$store.state.fish_detail
  }
},
}
</script>

<style>

</style>