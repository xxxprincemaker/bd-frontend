<template>
  <div class="home">
    <v-card-title  class="justify-center " style="color: whitesmoke"> Upcoming Movies </v-card-title>
    <EncarteFilme></EncarteFilme>
  </div>
</template>

<script>
// @ is an alias to /src
import EncarteFilme from "@/components/EncarteFilme";
import axios from "axios";

export default {
  name: "HomeView",
  data: () => {
    return {
      upcomingMovies: Object
    };
  },
  components: {
    EncarteFilme
    // eslint-disable-next-line vue/no-unused-components
  },
  methods: {
    async upcoming() {
      await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=cc6013c19c9720200260a7c36d27130a&language=en-US&page=1`)
        .then((response) => {
          this.upcomingMovies = response.data.results;
        });
      this.$store.commit("popularSearchDataTMDBAP", this.upcomingMovies);
    }
  },
  mounted() {
    this.upcoming();
  }
};
</script>
