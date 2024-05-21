<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <div class="tw-mt-6"></div>
  <v-footer
    >{{ new Date().getFullYear() }} — <strong>{{ appName }}</strong></v-footer
  >
</template>
