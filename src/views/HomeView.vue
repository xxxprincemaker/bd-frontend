<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Grafico></Grafico>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Grafico from "@/components/Grafico";

export default {
  name: "HomeView",
  components: {
    Grafico,
    HelloWorld,
  },
};
</script>
