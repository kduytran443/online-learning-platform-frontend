<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { RouterLink, RouterView } from "vue-router";

const route = useRoute();
const defaultLayout = "main-layout";

const layout = computed(() => route.meta.layout || defaultLayout);
</script>

<template>
  <v-app>
    <component :is="layout">
      <RouterView />
    </component>
  </v-app>
</template>
