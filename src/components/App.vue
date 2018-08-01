<template>
    <div id="app">
      <counter></counter>
    </div>
</template>

<script lang="ts">
import Counter from "./Counter.vue";

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
