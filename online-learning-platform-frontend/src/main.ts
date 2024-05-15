import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import assignGlobalComponents from "./utils/importComponents";

const app = createApp(App);

app.use(createPinia());
app.use(router);

assignGlobalComponents(app);

app.mount("#app");
