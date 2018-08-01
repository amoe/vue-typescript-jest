import Vue from "vue";
import ApplicationRoot from "./components/ApplicationRoot.vue";
import store from './vuex/store';

document.addEventListener("DOMContentLoaded", e => {
    const vueInstance = new Vue({
        render: h => h(ApplicationRoot),
        //        store: store
    });
    vueInstance.$mount('#vue-outlet');
});
