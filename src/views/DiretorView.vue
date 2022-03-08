<template>
  <div>
    <v-card-title class="justify-left; pl-9" style="color: whitesmoke;"> OS FILMES DIRIGIDOS PELO STEVEN SPIELBERG DE
      AÇÃO
      E AVENTURA
    </v-card-title>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in rota6"
          :key="item.title"
        >
          <td>{{ item.title }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import rotasService from "@/services/rotas.service";

export default {
  name: "DiretorView",
  data () {
    return {
      rota6: [],
    }
  },
  methods: {
    async importarQuery(){
      await rotasService.recuperarRota(6).then(response => {
        this.rota6 = response.data;
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