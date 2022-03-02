<template>
  <v-img :src="findMoviePoster(550)" />
</template>

<script>
import axios from "axios";


export default {
  name: "EncarteFilme",
  data: () => {
    return {
      url: "",
      BASE_URL: "https://api.themoviedb.org/3/",
      API_KEY: "cc6013c19c9720200260a7c36d27130a",
      dataMovie: Object
    }
  },

  methods: {
    async findMoviePoster(movie_id) {
      this.url = "https://api.themoviedb.org/3/movie/{}?api_key=cc6013c19c9720200260a7c36d27130a&language=en-US".format(movie_id);
      let data = axios.get(this.url);
      data = data.json();
      let poster_path = data["poster_path"];
      return "https://image.tmdb.org/t/p/w500/" + poster_path;
    }
  }
};
</script>

<style scoped>

</style>