import Vue from "vue";
import ApplicationRoot from "./components/ApplicationRoot.vue";

const vm: Vue = new Vue({
    el: "#app",
    template: "<app/>",
    components: { ApplicationRoot }
});
