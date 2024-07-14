<script setup lang="ts">
import ClassCard from "@/components/ClassCard.vue";
import { categoryService } from "@/services/categoryService";
import { classQueryService } from "@/services/classQueryService";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const page = ref<number>(parseInt(route.query.page as string) || 1);
const size = ref<number>(parseInt(route.query.size as string) || 8);
const categories = ref<string[]>(
  Array.isArray(route.query.categories)
    ? route.query.categories.map((cat: any) => cat as string).filter((item) => !!item)
    : [route.query.categories as string].filter((item) => !!item)
);

const selectedSubCategories = ref<string[]>([]);

const classList = ref([]);
const sorter = ref("Hottest");

const category = ref<CategoryModel>({
  code: "web-development",
  description:
    "Master web development essentials, from HTML and CSS to JavaScript frameworks like React and Vue.js. Build responsive websites, delve into front-end and back-end technologies, and gain practical skills with Bootstrap and Sass. Perfect for beginners and seasoned developers alike, these courses provide the tools and projects needed to thrive in web development.",
  id: "",
  name: "Web Development",
  parentCategory: "",
  subCategories: []
});

const makeRequestDTO = () => {
  const requestDTO = {
    page: page.value,
    size: size.value,
    categories: [] as string[]
  };
  requestDTO.categories.push(category.value.id);
  if (categories.value.length == 0) {
    const subCategoryIds = category.value.subCategories.map((item) => item.id);
    requestDTO.categories.push(...subCategoryIds);
  } else if (categories.value.length >= 1) {
    requestDTO.categories.push(...categories.value);
  }
  console.log(requestDTO);
  return requestDTO;
};

onMounted(async () => {
  const response = await categoryService.getCategoryByCode(route.params.categoryCode as string);
  category.value = response.data as CategoryModel;
  selectedSubCategories.value = (category.value.subCategories || []).map(
    (item) => item.id as string
  );
  console.log(category.value);

  const classResponse = await classQueryService.searchByCategory(makeRequestDTO());
  classList.value = classResponse.data.items;
  console.log("classResponse", classResponse);
});

watch(selectedSubCategories, () => {
  console.log(selectedSubCategories.value);
});

watch(sorter, () => {
  console.log(sorter.value);
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
            :value="item.id"
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
          v-model="sorter"
          :items="['Hottest', 'Newest', 'Oldest']"
        ></v-select>
      </div>
    </div>
    <v-row>
      <v-col v-for="(item, index) in classList" :key="index" cols="12" md="4">
        <ClassCard :class-model="item" />
      </v-col>
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
