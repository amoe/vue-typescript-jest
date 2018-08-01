import Vuex from 'vuex';
import actions from './actions';

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
