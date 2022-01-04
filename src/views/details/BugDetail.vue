<template>
  <p>{{bugDetail.name["name-KRko"]}}</p>
  <img :src="bugDetail.image_uri" alt="">
</template>

<script>
export default {
created () {
  const contentId = this.$route.params.id
  this.$store.dispatch('FETCH_BUG_DETAIL', contentId)
},
computed: {
    bugDetail() {
        return this.$store.state.bug_detail 
    }
},
}
</script>

<style>

</style>