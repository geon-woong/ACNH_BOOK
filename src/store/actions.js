import { fetchFish,fetchBugs,fetchSea,fetchFossils,fetchFishDetail,fetchBugDetail,fetchSeaDetail} from '../api/index'

export default {
    FETCH_FISHES({commit}) {
        fetchFish()
        .then(({data}) =>{
            commit('SET_FISHES',data);
        })
        .catch(error=>{
            console.log(error)
        });
    },
    FETCH_BUGS({commit}){
        fetchBugs()
        .then(({data}) => {
            commit('SET_BUGS',data);
        })
        .catch(error =>{
            console.log(error)
        });
    },
    FETCH_FOSSILS({commit}){
        fetchFossils()
        .then(({data}) => {
            console.log('성공')
            commit('SET_FOSSILS',data);
        })
        .catch(error =>{
            console.log(error)
        });
    },
    FETCH_SEA({commit}){
        fetchSea()
        .then(({data}) => {
            console.log('성공')
            commit('SET_SEA',data);
        })
        .catch(error =>{
            console.log(error)
        });
    },

    FETCH_FISH_DETAIL({commit},contentId){
        fetchFishDetail(contentId)
        .then(({data}) => {
            commit('SET_FISH_DETAIL',data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_BUG_DETAIL({commit},contentId){
        fetchBugDetail(contentId)
        .then(({data}) => {
            commit('SET_BUG_DETAIL',data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_SEA_DETAIL({commit},contentId){
        fetchSeaDetail(contentId)
        .then(({data}) => {
            commit('SET_SEA_DETAIL',data);
        })
        .catch(error => {
            console.log(error)
        })
    }
}