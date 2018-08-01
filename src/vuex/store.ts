import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state: any) {
            state.count++;
        }
    },
    actions
});

export default store;
