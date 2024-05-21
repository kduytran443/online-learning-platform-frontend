<script setup lang="ts">
import { mergeProps, ref } from "vue";
import SearchClass from "./SearchClass.vue";
const loading = ref(false);
const onClick = () => {
  console.log("search");
};
</script>

<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="surface-variant" text="Search" variant="flat"></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Search Classes">
        <SearchClass />

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
