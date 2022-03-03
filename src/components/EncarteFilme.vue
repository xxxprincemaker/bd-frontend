<template>
  <v-card
    class="mx-2"
    max-width="auto"
    outlined color = transparent
  >
    <v-container >
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card outlined color = transparent >
            <v-img
              :src="card.src"
              height="300px"
              width="180px"
            >
            </v-img>
            
          </v-card>
          <v-card-title v-text="card.title" ></v-card-title>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'The Batman', src: 'https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/01/Batman-Novo-Poster.jpeg', flex: 2 },
        { title: 'Tick, Tick... Boom!', src: 'https://upload.wikimedia.org/wikipedia/pt/9/91/Tick_Tick_Boom_Movie_poster.jpg', flex: 2 },

      ],
    }),
  }
</script>

<style scoped>
  .v-card__title {
    color: white;
  }
</style>