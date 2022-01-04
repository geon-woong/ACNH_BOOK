import { createStore } from 'vuex'
import mutations from './mutation.js'
import actions from './actions'

const store =createStore({
	state(){
		return {
                fishes : [],
                bugs : [],
                sea : [],
                fossils : [],
                fish_detail : {},
                bug_detail : {},
                sea_detail : {},
                }},
        mutations,
        actions,
           
        
})

export default store