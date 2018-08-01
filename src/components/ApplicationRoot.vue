<template>
  <div>
    <h1>New Project from amoe-vue-template</h1>

    <p>Hi there!</p>
    <p>The value is: <code>{{count}}</code></p>
    <button v-on:click="greet">Greet</button>
    <button v-on:click="doIncrement">Inc</button>
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
