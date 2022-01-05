<template>
  <div class="detail-wrap">
      <router-link to="/fish" >
        <i class="fas fa-arrow-left"></i>
        돌아가기
      </router-link>
      <div class="row mt-2">
        <div class="col-6">
          <h5>
          {{ fishDetail.name["name-KRko"] }}  
          </h5>
          <img :src="fishDetail.image_uri" alt="fish-detail" style="width:inherit">
        </div>
        <div class="col-6">
          <p> 북반구 출현 기간 : {{ fishAvailability["month-northern"]}} 월</p>
          <p> 남반구 출현 기간 : {{ fishAvailability["month-southern"]}} 월</p>
          <p> 시간대 : {{ fishAvailability["time"]}} </p>
          <p> 장소 : {{ fishAvailability["location"]}}</p>
          <p> 희귀도 : {{ fishAvailability["rarity"]}}</p>
          <p> 크기 : {{ fishDetail["shadow"]}}</p>
          <p> 가격 : {{ fishDetail["price"]}}벨</p>
        </div>
      </div>
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
  },
  fishAvailability (){
    return this.$store.state.fish_detail.availability
  },
},
methods: {

},
}
</script>

<style>

</style>