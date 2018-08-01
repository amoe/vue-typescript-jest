import Vue from "vue";
import ApplicationRoot from "./components/ApplicationRoot.vue";
import store from './vuex/store';
import mymodule from './mymodule';
import * as log from 'loglevel';

log.setLevel('debug');

function getRenderingMode() {
    let result: string;

    if (document.compatMode === 'CSS1Compat') {
        result = "STANDARDS_COMPLIANCE";
    } else {
        result = "QUIRKS";
    }

    return result;
}

document.addEventListener("DOMContentLoaded", e => {
    console.log("Rendering mode: %o", getRenderingMode());
    console.log("The answer is: %o", mymodule.meaningOfLife());

});


document.addEventListener("DOMContentLoaded", e => {
    const vueInstance = new Vue({
        render: h => h(ApplicationRoot),
        store: store
    });
    vueInstance.$mount('#vue-outlet');
});
