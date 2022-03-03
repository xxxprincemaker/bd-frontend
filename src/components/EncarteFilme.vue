<template>
  <v-card
    class="mx-2"
    max-width="auto"
    outlined color="transparent"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="card in cardss"
          :key="card.original_name"
        >
          <v-card outlined color="transparent" v-if="card.poster_path">
            <v-img
              :src="urlImage(card.poster_path)"
              height="300px"
              width="180px"
            >
            </v-img>
            <v-container >
              <v-row>
                <v-img
                  src="https://freesvg.org/img/Gerald-G-Simple-Fruit-FF-Menu-5.png"
                  max-width="18px"
                />
                <span style="color: white; padding-left: 3px;"> 100% </span>
                <v-card-text v-text="card.title" />
              </v-row>

            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  data: () => ({
    cards: [
      {
        title: "The Batman",
        src: "https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/01/Batman-Novo-Poster.jpeg",
        flex: 2
      },
      {
        title: "Tick, Tick... Boom!",
        src: "https://upload.wikimedia.org/wikipedia/pt/9/91/Tick_Tick_Boom_Movie_poster.jpg",
        flex: 2
      }
    ]
  }),
  methods: {
    urlImage(url) {
      return "https://image.tmdb.org/t/p/w500" + url;
    }
  },
  computed: {
    cardss() {
      return this.$store.state.searchDataTMDBAPI;
    }
  }
};
</script>

<style scoped>
.v-card__text {
  color: white;
}
</style>