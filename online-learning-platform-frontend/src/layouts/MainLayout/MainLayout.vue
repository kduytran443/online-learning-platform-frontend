<script setup lang="ts">
import MainLayoutHeader from "./MainLayoutHeader.vue";
import MainLayoutFooter from "./MainLayoutFooter.vue";
</script>

<template>
  <MainLayoutHeader />
  <main>
    <slot />
  </main>
  <MainLayoutFooter />
</template>
