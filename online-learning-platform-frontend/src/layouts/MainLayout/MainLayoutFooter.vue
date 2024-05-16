<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <v-footer app
    >{{ new Date().getFullYear() }} — <strong>{{ appName }}</strong></v-footer
  >
</template>
