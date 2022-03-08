<template>
  <div class="filmes">
     <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
     <Grafico :optionss="this.rotaQuery1"></Grafico>
     <br>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> A QUANTIDADE DE FILMES QUE SAIRAM EM CADA ANO
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Ano de Lançamento
          </th>
          <th class="text-left">
            Quantidade de Filmes
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in rota8"
          :key="item.release_year"
        >
          <td>{{ item.release_year }}</td>
          <td>{{ item.qtdFilmes }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>

import Grafico from "@/components/Grafico";
import rotasService from "@/services/rotas.service";

export default({
components: {
    Grafico
  },
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
})
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
  .v-card__title::before{
    background-color: #940000;
    content: ' ';
    min-width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    margin-left: 10px;
  }
  .v-card__title::after{
    position: absolute;
    margin-left: 451px;
    content: '';
    width: 100%;
    background-color: #940000;
    min-width: 20px;
    height: 20px;
  }
  .v-card__title{
    font-family: 'Roboto', sans-serif;
    float: initial;
    padding-left: 25px;
  }
  
</style>