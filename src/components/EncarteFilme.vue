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
          <v-card outlined color="transparent" v-if="card.poster_path" @click="buscarFilmeSelecionado(card)">
            <v-img
              :src="urlImage(card.poster_path)"
              height="300px"
              width="180px"
            >
            </v-img>
            <v-container>
              <v-row class="pt-2">
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

                <span v-if="card.vote_average*10 > 0"
                      style="color: white; padding-left: 3px; letter-spacing: .016em; line-height:1;"> {{ card.vote_average * 10
                  }}%</span>
                <span v-else
                      style="color: white; padding-left: 3px; letter-spacing: .016em; line-height:1;"> -- </span>

                <v-card-text v-text="card.title" />
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-dialog v-model="maisInformacoes" max-width="800" max-height="800" transition>
          <v-card color="black" max-width="800" max-height="400px">
            <v-col>
              <v-row>     
                <v-img class="justify-top"
                  :src="urlImage(this.filmeSelecionado.poster_path)"
                  max-height="400px"
                  max-width="280px"
                > 
                </v-img>

              <v-container style="width:64%">
                <v-card-title style="color: whitesmoke;" class="justify-center" >
                  {{ this.filmeSelecionado.title }}
                </v-card-title> 
                <br>
                <center>
                <v-img v-if="this.filmeSelecionado.vote_average*10 > 60"
                       src="https://i.imgur.com/umG4jLw.png"
                       max-width="48px"
                       max-height="48px"
                />
                <v-img v-else-if="this.filmeSelecionado.vote_average*10 > 0"
                       src="https://i.imgur.com/NzQK8zJ.png"
                       max-width="48px"
                       max-height="48px"
                />

                <v-img v-else
                       src="https://i.imgur.com/TSbgElk.png"
                       max-width="48px"
                       max-height="48px"
                />

                <span v-if="this.filmeSelecionado.vote_average*10 > 0"
                      style="font-size: 2em; color: white; padding-left: 5px; letter-spacing: .016em; line-height:1;"> {{ this.filmeSelecionado.vote_average * 10
                  }}%</span>
                <span v-else
                      style="font-size: 2em; color: white; padding-left: 3px; letter-spacing: .016em; line-height:1;"> -- </span>
                </center>
                <br>
            <v-card-text style="color: whitesmoke; animation-fill-mode: revert">
              {{ this.filmeSelecionado.overview }}
            </v-card-text>               
                </v-container>
                
              </v-row>
              
            </v-col>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

import axios from "axios";

export default {
  data: () => {
    return {
      maisInformacoes: false,
      filmeSelecionado: Object,
      reviews: Object
    };
  },
  methods: {
    urlImage(url) {
      return "https://image.tmdb.org/t/p/w500" + url;
    },
    buscarFilmeSelecionado(filme) {
      this.filmeSelecionado = filme;
      this.encontrarReviewsPorFilmeId(filme.id)
      this.maisInformacoes = !this.maisInformacoes;
    },
    async encontrarReviewsPorFilmeId(filmeId) {
      await axios.get(`https://api.themoviedb.org/3/movie/${filmeId}/reviews?api_key=cc6013c19c9720200260a7c36d27130a&language=en-US&page=1`)
        .then(response => {
          this.reviews = response.data.results;
        });
    },
  },
  computed: {
    cardss() {
      if(this.$store.state.upcomingMovies){
        return this.$store.state.upcomingMovies
      }
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

  .v-card__title{
    margin: 0;
    text-transform: uppercase;
    font-family: Neusa,Impact,Helvetica Neue,Arial,Sans-Serif;
    font-size: 1.625em;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: .92;
    letter-spacing: normal;
    text-align: center;
    color: #2a2c32;
  }
</style>