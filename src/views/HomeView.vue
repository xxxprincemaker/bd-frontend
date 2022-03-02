<template>
  <div class="home">
    <Grafico titulo="Grafico 1"></Grafico>
    <EncarteFilme></EncarteFilme>
  </div>
</template>

<script>
// @ is an alias to /src
import Grafico from "@/components/Grafico";
import EncarteFilme from "@/components/EncarteFilme";

export default {
  name: "HomeView",
  components: {
    EncarteFilme,
    // eslint-disable-next-line vue/no-unused-components
    Grafico,
  },
};
</script>
