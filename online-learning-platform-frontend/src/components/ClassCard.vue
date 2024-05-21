<script setup lang="ts">
import { ref } from "vue";
import SimpleAvatarShow from "@/components/SimpleAvatarShow.vue";

const isLoading = ref(false);
const rating = ref(3);
</script>

<template>
  <v-card v-if="!isLoading" class="mx-auto">
    <v-img
      class="align-end text-white"
      height="200"
      src="https://img-c.udemycdn.com/course/480x270/4993276_3452.jpg"
      cover
    >
      <v-card-title>[NEW] Master Spring Boot 3 & Spring Framework 6 with Java</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> IT & Software / Spring Boot </v-card-subtitle>

    <v-card-text>
      <SimpleAvatarShow />
      <div class="tw-w-full tw-flex tw-items-center">
        <div class="tw-text-lg tw-font-bold">4.0</div>
        <v-rating
          v-model="rating"
          size="small"
          active-color="orange"
          color="yellow-lighten-1"
        ></v-rating>
        <div class="tw-text-lg">(254)</div>
      </div>
      <div class="tw-mt-4">[NEW] Master Spring Boot 3 & Spring Framework 6 with Java</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="info" variant="elevated" text="Explore"></v-btn>
      <v-btn color="info" text="Save"></v-btn>
    </v-card-actions>
  </v-card>
  <v-skeleton-loader
    v-if="isLoading"
    class="mx-auto border"
    type="image, article"
  ></v-skeleton-loader>
</template>
