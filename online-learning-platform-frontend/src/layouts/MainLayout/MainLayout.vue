<script setup lang="ts">
import MainLayoutHeader from "./MainLayoutHeader.vue";
import MainLayoutFooter from "./MainLayoutFooter.vue";
</script>

<template>
  <MainLayoutHeader />
  <main class="tw-min-h-screen tw-mt-10 tw-flex tw-flex-col tw-justify-center">
    <slot />
  </main>
  <MainLayoutFooter />
</template>
