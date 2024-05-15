import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import assignGlobalComponents from "./utils/importComponents";

const app = createApp(App);

app.use(createPinia());
app.use(router);

assignGlobalComponents(app);

const vuetify = createVuetify({
  components,
  directives
});

app.use(vuetify).mount("#app");
