<template>
  <div class="filmes">
     <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
     <Grafico :optionss="this.rotaQuery1"></Grafico>
     <br>
  </div>
</template>
<script>

import Grafico from "@/components/Grafico";
import rotasService from "@/services/rotas.service";

export default({
components: {
    Grafico
  },
  data: () => {
    return {
      rotaQuery1: Object,
      rotaQuery2: Object,
      rotaQuery3: Object,
      rotaQuery4: Object,
      rotaQuery5: Object,
      rotaQuery6: Object,
      rotaQuery7: Object,
      rotaQuery8: Object,
      rotaQuery9: Object,
      rotaQuery10: Object,
    };
  },
  methods: {
    async importarQuery(rota){
      await rotasService.recuperarRota(rota).then(response => {
        this.rotaQuery1 = response.data;
      }).catch( () => {} )
    }
  },
  mounted() {
    this.importarQuery(1);
  }
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