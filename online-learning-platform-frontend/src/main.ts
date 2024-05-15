import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";
import router from "./router";
import "./index.css";

import assignGlobalComponents from "./utils/importComponents";

const app = createApp(App);

app.use(createPinia());
app.use(router);

assignGlobalComponents(app);

const icons = {
  defaultSet: "mdi",
  aliases,
  sets: {
    mdi
  }
};
const vuetify = createVuetify({
  icons,
  components,
  directives
});

app.use(vuetify).mount("#app");
