<template>
  <div class="home">
    <Grafico titulo="Grafico 1"></Grafico>
  </div>
</template>

<script>
// @ is an alias to /src
import Grafico from "@/components/Grafico";

export default {
  name: "HomeView",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Grafico,
  },
};
</script>
