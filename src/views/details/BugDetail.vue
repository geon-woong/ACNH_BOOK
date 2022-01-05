<template>
  <div class="detail-wrap">
      <router-link to="/bug" >
        <i class="fas fa-arrow-left"></i>
        돌아가기
      </router-link>
      <div class="row mt-2">
        <div class="col-6">
          <h5>
          {{ bugDetail.name["name-KRko"] }}  
          </h5>
          <img :src="bugDetail.image_uri" alt="fish-detail" style="width:inherit;height:377px;padding:50px">
        </div>
        <div class="col-6">
          <p> 북반구 출현 기간 : {{ bugAvailability["month-northern"]}} 월</p>
          <p> 남반구 출현 기간 : {{ bugAvailability["month-southern"]}} 월</p>
          <p> 시간대 : {{ bugAvailability["time"]}} </p>
          <p> 장소 : {{ bugAvailability["location"]}}</p>
          <p> 희귀도 : {{ bugAvailability["rarity"]}}</p>
          <p> 크기 : {{ bugDetail["shadow"]}}</p>
          <p> 가격 : {{ bugDetail["price"]}}벨</p>
        </div>
      </div>
  </div>
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
    },
    bugAvailability (){
        return this.$store.state.bug_detail.availability
    }
},
}
</script>

<style>

</style>