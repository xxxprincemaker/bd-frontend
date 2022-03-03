<template>
  <div class="home">
    <EncarteFilme ></EncarteFilme>
  </div>
</template>

<script>
// @ is an alias to /src
import EncarteFilme from "@/components/EncarteFilme";

export default {
  name: "HomeView",
  components: {
    EncarteFilme,
    // eslint-disable-next-line vue/no-unused-components
  },
};
</script>
