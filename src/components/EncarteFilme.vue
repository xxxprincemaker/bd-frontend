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
              <v-row class='pt-2'>
                <v-img v-if="card.vote_average*10 > 60"
                  src="https://i.imgur.com/umG4jLw.png"
                  max-width="18px"
                />
                <v-img v-else-if="card.vote_average*10 > 0"
                  src="https://i.imgur.com/NzQK8zJ.png"
                  max-width="18px"
                />

                <v-img v-else
                  src="https://i.imgur.com/TSbgElk.png"
                  max-width="18px"
                />

                <span v-if="card.vote_average*10 > 0" style="color: white; padding-left: 3px; letter-spacing: .016em; line-height:1;"> {{card.vote_average*10}}%</span>
                <span v-else style="color: white; padding-left: 3px; letter-spacing: .016em; line-height:1;"> -- </span>

                <v-card-text v-text="card.title"  />
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
  font-size: .875rem;
  line-height: 1.4;
  margin-bottom: 0.625rem;
  padding-left: 5px;
}
</style>