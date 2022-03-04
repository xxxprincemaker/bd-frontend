<template>
  <nav>
    <v-app-bar app flat color="primary" dark>
      <v-toolbar-items>
        <v-btn @click="showSideBar()" icon>
          <v-icon> mdi-menu</v-icon>
        </v-btn>
      </v-toolbar-items>
      <div class="d-flex align-center">
        <v-card to="/" @click="popularData(null)">
          <v-col>
            <v-row>
              <v-img
                alt="Rotten Tomatoes Img"
                class="shrink mr-2"
                contain
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1200px-Rotten_Tomatoes.svg.png"
                transition="scale-transition"
                width="40"
              />

              <v-img
                alt="Rotten Tomatoes Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rotten_Tomatoes_logo.svg/1200px-Rotten_Tomatoes_logo.svg.png"
                width="100"

              />
            </v-row>
          </v-col>
        </v-card>
      </div>

      <transition name="scale-transition">
        <v-btn icon class="pl-3" @click="showBuscar" v-if="!showBusca">
          <v-icon>
            mdi-magnify
          </v-icon>
        </v-btn>
      </transition>
      <transition name="scroll-x-reverse-transition">
        <v-text-field v-if="showBusca" v-model="buscarElemento" clearable label="Buscar" solo dense rounded
                      light v-click-outside="showBuscar" style="max-width: 350px" class="pt-5 pl-6"
                      @keyup.enter.native="findMovieOrSeries()" />
      </transition>
    </v-app-bar>
    <v-navigation-drawer color="secondary" v-model="showBar" app>
      <v-list>
        <v-divider />
        <v-list-item
          v-for="([icon, text, rout], i) in items"
          :key="i"
          link
          :to="rout"
        >
          <v-list-item-icon>
            <v-icon style="color: whitesmoke">{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color: whitesmoke"
            >{{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>

</template>

<script>
import axios from "axios";
import rotasService from "@/services/rotas.service";

export default {
  name: "NavBar",
  data: () => ({
    showBar: false,
    showBusca: false,
    buscarElemento: "",
    elemento: Object,
    results: Object,
    items: [
      ["mdi-popcorn", "Filmes", "/movies"],
      ["mdi-account-supervisor-circle", "Diretor", "/directors"],
      ["mdi-account", "Atores", "/actors"]
    ]
  }),

  methods: {
    showSideBar() {
      this.showBar = !this.showBar;
    },
    showBuscar() {
      this.showBusca = !this.showBusca;
    },
    async importarRota(rotaId){
      await rotasService.recuperarRota(rotaId).then( response => {
        this.elemento = response.data;
      })
      console.log(this.elemento);
    },
    async findMovieOrSeries() {
      let query = this.buscarElemento.replaceAll(" ", "%20");
      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cc6013c19c9720200260a7c36d27130a&language=en-US&query=${query}&include_adult=false`)
        .then(response => {
          this.results = response.data.results;
        });
      console.log(this.results);
      this.popularData(this.results);
      await this.importarRota(5);
    },
    popularData(data) {
      this.$store.commit("popularSearchDataTMDBAP", data);
    }
  }
};
</script>

<style scoped></style>
