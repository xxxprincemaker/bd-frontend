<template>
  <v-card >
    <v-layout justify-center>
      <apexchart
        width="800"
        type="bar"
        :options="options"
        :series="series"
        :title="titulo"
        :id="titulo"
      ></apexchart>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Grafico",
  props: {
    titulo: String,
    optionss: [],
    seriess: []
  },
  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 150]
        }
      ]
    };
  }
};
</script>

<style scoped></style>
