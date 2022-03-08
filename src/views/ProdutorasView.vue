<template>
  <div>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> A QUANTIDADE TOTAL DE FILMES DAS 10 PRODUTORAS
      QUE PRODUZIRAM MAIS FILMES
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Quantidade de Filmes
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in rota9"
          :key="item.fk_Produtora_name"
        >
          <td>{{ item.fk_Produtora_name }}</td>
          <td>{{ item.num_films }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> AS 10 PRODUTORAS COM MAIS REVIEWS "Rotten"
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Reviews
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in rota7"
          :key="item.rotten_reviews"
        >
          <td>{{ item.publisher_name }}</td>
          <td>{{ item.rotten_reviews }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> AS 10 MELHORES AVALIAÇÕES MÉDIAS DE TODAS AS
      PRODUTORAS COM PELO MENOS 5 FILMES
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Rating
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in rota10"
          :key="item.fk_Produtora_name"
        >
          <td>{{ item.fk_Produtora_name }}</td>
          <td>{{ item.average_rating }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import rotasService from "@/services/rotas.service";

export default {
  name: "ProdutorasView",
  data () {
    return {
      rota6: [],
      rota7: [],
      rota8: [],
      rota9: [],
      rota10: []
    }
  },
  methods: {
    async importarQuery(){
      await rotasService.recuperarRota(6).then(response => {
        this.rota6 = response.data;
      }).catch( () => {} )
      await rotasService.recuperarRota(7).then(response => {
        this.rota7 = response.data;
      }).catch( () => {} )
      await rotasService.recuperarRota(8).then(response => {
        this.rota8 = response.data;
      }).catch( () => {} )
      await rotasService.recuperarRota(9).then(response => {
        this.rota9 = response.data;
      }).catch( () => {} )
      await rotasService.recuperarRota(10).then(response => {
        this.rota10 = response.data;
      }).catch( () => {} )
    }
  },
  mounted() {
    this.importarQuery();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

.v-card__title::before {
  background-color: #940000;
  content: ' ';
  min-width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
  margin-left: 10px;
}

.v-card__title {
  font-family: 'Roboto', sans-serif;
  float: initial;
  padding-left: 25px;
}
</style>