<script setup lang="ts">
const backendUrl = import.meta.env.VITE_BACKEND_API;
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ backendUrl }}
  </div>
</template>
