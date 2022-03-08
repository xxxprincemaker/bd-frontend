<template>
  <div class="filmes">
     <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
     <Grafico></Grafico>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
    <Grafico></Grafico>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
    <Grafico></Grafico>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
    <Grafico></Grafico>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
    <Grafico></Grafico>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
    <Grafico></Grafico>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> FILMES COM 3 HORAS OU MAIS DE DURAÇÃO </v-card-title>
    <Grafico></Grafico>
  </div>
</template>
<script>

import Grafico from "@/components/Grafico";

export default({
components: {
    Grafico
  },
})
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
  .v-card__title:before{
    position: absolute;
    content: "";
    height: 1.1em;
    border-left: 3px solid #fa320a;
    margin: -1px 0 0 -9px;
  }

  .v-card__title{
    font-family: 'Roboto', sans-serif;
  }
  
</style>