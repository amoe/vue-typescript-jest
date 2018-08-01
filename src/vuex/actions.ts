// actions.ts

import axios from 'axios';

const API_PREFIX = "/api";

const actions = {
    increment(context: any) {
        context.commit('increment')
    }
};

export default actions;
