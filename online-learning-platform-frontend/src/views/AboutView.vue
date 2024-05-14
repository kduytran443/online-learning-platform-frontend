<script setup lang="ts">
const backendUrl = import.meta.env.VITE_BACKEND_API;
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ backendUrl }}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
