<template>
  <v-app style="background: linear-gradient(to bottom, #1e1e1e, #2d0101 800px)">
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: { NavBar },
};
</script>
