import { fetchFish,fetchBugs,fetchSea,fetchFossils,fetchFishDetail,fetchBugDetail,fetchSeaDetail} from '../api/index'

export default {
    async FETCH_FISHES({commit}) {
        const response = await fetchFish()
            commit('SET_FISHES',response.data);
            return response;
    },
    async FETCH_BUGS({commit}){
        const response = await fetchBugs()
        commit('SET_BUGS',response.data);
        return response;
    },
    async FETCH_FOSSILS({commit}){
        const response = await fetchFossils()
            commit('SET_FOSSILS',response.data);
            return response;
    },
    async FETCH_SEA({commit}){
        const response = await fetchSea()
            commit('SET_SEA',response.data);
            return response;
    },

   async FETCH_FISH_DETAIL({commit},contentId){
       const response = await fetchFishDetail(contentId)
            commit('SET_FISH_DETAIL',response.data);
            return response;
    },
    async FETCH_BUG_DETAIL({commit},contentId){
        const response = await fetchBugDetail(contentId)
            commit('SET_BUG_DETAIL',response.data);
            return response;
    },
    async FETCH_SEA_DETAIL({commit},contentId){
        const response = await fetchSeaDetail(contentId)
            commit('SET_SEA_DETAIL',response.data);
            return response;
    }
}