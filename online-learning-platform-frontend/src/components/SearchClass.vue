<script setup lang="ts">
import { mergeProps, ref } from "vue";
const searchValue = ref("");
const loading = ref(false);
const onClick = () => {
  console.log("search", searchValue.value);
};
</script>

<template>
  <v-card-text>
    <v-text-field
      :loading="loading"
      append-inner-icon="mdi-magnify"
      density="compact"
      label="Name or content related to class"
      variant="solo"
      hide-details
      single-line
      @click:append-inner="onClick"
      v-model="searchValue"
    ></v-text-field>
  </v-card-text>
</template>
