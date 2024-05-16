import type { App } from "vue";
import { defineAsyncComponent } from "vue";

export default function assignGlobalComponents(app: App) {
  app.component(
    "main-layout",
    defineAsyncComponent(() => import("@/layouts/MainLayout/MainLayout.vue"))
  );
}
