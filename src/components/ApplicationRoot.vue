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

<style>
body {
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    background-color: #fdfdfd;
}

h1,h2 { font-family: Georgia; }

p, label { font-family: Arial, sans-serif; }
</style>
