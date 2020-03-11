<template>
    <div id="app">
        <!-- <products></products> -->
        <HelloWorld msg="Hello!" />
        <counter :addNum="10"></counter>
        <toggle title="Toggle Component"></toggle>
        <notes></notes>
    </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Notes from "./components/Notes.vue";
import Toggle from "./components/Toggle.vue";
// import Products from "./components/Products.vue";

export default {
    name: "App",
    components: {
        Counter,
        HelloWorld,
        Notes,
        Toggle
        // Products
    }
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

.component-border
    border: solid 1pt grey
    margin: 5vw
    padding: 2vw

    button
        font-weight: 700
        text-transform: uppercase
</style>
