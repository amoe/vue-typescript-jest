<template>
    <div id="app">
      <counter></counter>
    </div>
</template>

<script lang="ts">
import Counter from "./components/Counter.vue";

export default {
    data () { 
        return {
            message: "Hello world!",
            prop: "!" 
        };
    },
    components: {
        Counter
    }
}
</script>
