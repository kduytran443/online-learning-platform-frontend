<script setup lang="ts">
import ClassCard from "@/components/ClassCard.vue";
import { categoryService } from "@/services/categoryService";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const page = ref(0);

const selectedSubCategories = ref([]);

const category = ref<CategoryModel>({
  code: "",
  description: "",
  id: "",
  name: "",
  parentCategory: "",
  subCategories: []
});

onMounted(async () => {
  const response = await categoryService.getCategoryByCode(route.params.categoryCode as string);
  category.value = response.data as CategoryModel;
  console.log("response", response);
});

watch(selectedSubCategories, () => {
  console.log(selectedSubCategories.value);
});
</script>

<template>
  <div>
    <div class="my-4">
      <h1 class="tw-text-4xl tw-mb-3">{{ category.name }}</h1>
      <p>{{ category.description }}</p>
    </div>
    <div class="tw-flex tw-w-full tw-justify-between">
      <div>
        <v-chip-group v-model="selectedSubCategories" column multiple>
          <v-for></v-for>
          <v-chip
            v-for="item in category.subCategories"
            :key="item.code"
            :text="item.name"
            :value="item.code"
            variant="outlined"
            color="primary"
            filter
          ></v-chip>
        </v-chip-group>
      </div>
      <div>
        <v-select
          label="Sorting"
          class="tw-min-w-[120px]"
          :items="['Hottest', 'Newest', 'Oldest']"
        ></v-select>
      </div>
    </div>
    <v-row>
      <v-col cols="12" md="4">
        <ClassCard />
      </v-col>
      <v-col cols="12" md="4">
        <ClassCard />
      </v-col>
      <v-col cols="12" md="4">
        <ClassCard />
      </v-col>
      <v-col cols="12" md="4">
        <ClassCard />
      </v-col>
      <v-col cols="12" md="4"> </v-col>
    </v-row>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                color="secondary"
                v-model="page"
                :length="15"
                class="my-4"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
