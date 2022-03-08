<template>
  <div class="home">
    <v-card-title  v-if="this.$store.state.searchDataTMDBAPI.length === 0" class="justify-left; pl-9" style="color: whitesmoke;"> UPCOMING MOVIES </v-card-title>
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
      this.$store.commit("pupularUpcomingMovies", this.upcomingMovies);
    }
  },
  mounted() {
    this.upcoming();
  }
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
  .v-card__title:before{
    position: absolute;
    content: "";
    height: 1.1em;
    border-left: 3px solid #940000;
    margin: -1px 0 0 -9px;
  }

  .v-card__title{
    font-family: 'Roboto', sans-serif;
  }
  
</style>
