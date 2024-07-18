<script setup lang="ts">
import { ref } from "vue";
import SimpleAvatarShow from "@/components/SimpleAvatarShow.vue";
import { getDiffDays, getTimeAgoString } from "@/utils/dateUtils";

const props = defineProps({
  classModel: {
    type: Object as () => ClassModel,
    required: true
  }
});

const isLoading = ref(false);
const rating = ref(props.classModel.averageRating);

const diffDays = getDiffDays(props.classModel.startAt as string);
const timeAgoString = getTimeAgoString(props.classModel.startAt as string);
</script>

<template>
  <v-card v-if="!isLoading" class="mx-auto">
    <v-img class="align-end text-white" height="200" cover :src="props.classModel.image">
      <v-card-title class="text-shadow-custom">{{ props.classModel.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> {{ props.classModel.categoryName }} </v-card-subtitle>

    <v-card-text>
      <SimpleAvatarShow />
      <div
        v-if="(props.classModel.numberOfReviews as number) > 0"
        class="tw-w-full tw-flex tw-items-center"
      >
        <div class="tw-text-lg tw-font-bold">{{ props.classModel.averageRating }}</div>
        <v-rating
          v-model="rating"
          size="small"
          active-color="orange"
          color="yellow-lighten-1"
        ></v-rating>
        <div class="tw-text-lg">{{ props.classModel.numberOfReviews }}</div>
      </div>
      <div v-if="diffDays < 28" class="tw-mt-4">
        <v-alert
          :text="timeAgoString"
          :type="diffDays > 0 ? 'info' : 'warning'"
          variant="tonal"
        ></v-alert>
      </div>
      <div v-else class="tw-mt-4">
        {{ timeAgoString }}
      </div>
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

<style scoped>
.text-shadow-custom {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
}
</style>
