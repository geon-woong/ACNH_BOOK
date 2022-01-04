<template>
  <div>해산물디테일</div>
  <p>
  {{seaDetail.name["name-KRko"]}}
  </p>
  <img :src="seaDetail.image_uri" alt="">
</template>

<script>
export default {
  created () {
    const contentId = this.$route.params.id
    this.$store.dispatch("FETCH_SEA_DETAIL", contentId);
  },
  computed: {
    seaDetail() {
      return this.$store.state.sea_detail;
    }
  },
}
</script>

<style>

</style>