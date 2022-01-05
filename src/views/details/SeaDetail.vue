<template>
  <div class="detail-wrap">
      <router-link to="/sea" >
        <i class="fas fa-arrow-left"></i>
        돌아가기
      </router-link>
      <div class="row mt-2">
        <div class="col-6">
          <h5>
          {{ seaDetail.name["name-KRko"] }}  
          </h5>
          <img :src="seaDetail.image_uri" alt="fish-detail" style="width:inherit;height:377px;padding:50px">
        </div>
        <div class="col-6">
          <p> 북반구 출현 기간 : {{ seaAvailability["month-northern"]}} 월</p>
          <p> 남반구 출현 기간 : {{ seaAvailability["month-southern"]}} 월</p>
          <p> 시간대 : {{ seaAvailability["time"]}} </p>
          <p> 크기 : {{ seaDetail["shadow"]}}</p>
          <p> 가격 : {{ seaDetail["price"]}}벨</p>
        </div>
      </div>
  </div>
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
    },
    seaAvailability() {
      return this.$store.state.sea_detail.availability;
    },
  },
}
</script>

<style>

</style>