<template>
  <nav>
    <v-app-bar app flat color="primary" dark>
      <v-toolbar-items>
        <v-btn @click="showSideBar()" icon>
          <v-icon> mdi-menu </v-icon>
        </v-btn>
      </v-toolbar-items>
      <div class="d-flex align-center">
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
      </div>
    </v-app-bar>
    <v-navigation-drawer color="secondary" v-model="showBar" app>
      <v-list>
        <v-list-item
          v-for="([icon, text], i) in items"
          :key="i"
          link
          color="text"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    showBar: false,
    items: [
      ["mdi-email", "Inbox"],
      ["mdi-account-supervisor-circle", "Supervisors"],
      ["mdi-clock-start", "Clock-in"],
    ],
  }),

  methods: {
    showSideBar() {
      this.showBar = !this.showBar;
    },
  },
};
</script>

<style scoped></style>
