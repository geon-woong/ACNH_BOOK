export default {
        SET_FISHES(state, fishes) {
            state.fishes = fishes;
        },
        SET_BUGS(state, bugs) {
            state.bugs = bugs;
        },
        SET_SEA(state, sea) {
            state.sea = sea;
        },
        SET_FOSSILS(state, fossils) {
            state.fossils = fossils;
        },
        SET_FISH_DETAIL(state, id){
            state.fish_detail = id;
        },
        SET_BUG_DETAIL(state, id){
            state.bug_detail = id;
        },
        SET_SEA_DETAIL(state, id){
            state.sea_detail = id;
        }
}
