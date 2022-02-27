import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import pt from "vuetify/src/locale/pt.ts";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#89c79e",
        secondary: "#C4E3CE",
        accent: "#f28c00",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFB300",
        anchor: "#ff8c00",
        shade: "#08100B",
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
});
