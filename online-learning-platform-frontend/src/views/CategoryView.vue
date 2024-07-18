<script setup lang="ts">
import ClassCard from "@/components/ClassCard.vue";
import { categoryService } from "@/services/categoryService";
import { classQueryService } from "@/services/classQueryService";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const page = ref<number>(parseInt(route.query.page as string) || 1);
const size = ref<number>(parseInt(route.query.size as string) || 2);
const selectedSubCategories = ref<string[]>(
  Array.isArray(route.query.categories)
    ? route.query.categories.map((cat: any) => cat as string).filter((item) => !!item)
    : [route.query.categories as string].filter((item) => !!item)
);

const pageDetails = ref({});
const sorter = ref(route.query.sort || "Hottest");

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
    categories: [] as string[],
    sortBy: null,
    direction: null
  };
  requestDTO.categories.push(category.value.id);
  if (chipList.value.indexOf("all") == -1) {
    requestDTO.categories.push(...chipList.value);
  } else {
    const subCategoryIds = category.value.subCategories.map((item) => item.id);
    requestDTO.categories.push(...subCategoryIds);
  }
  if (sorter.value === "Hottest") {
    //
  } else if (sorter.value === "Newest") {
    requestDTO.sortBy = "startAt";
    requestDTO.direction = "DESC";
  } else if (sorter.value === "Oldest") {
    requestDTO.sortBy = "startAt";
    requestDTO.direction = "ASC";
  }
  return requestDTO;
};

const callAPIClassList = async () => {
  const classResponse = await classQueryService.searchByCategory(makeRequestDTO());
  pageDetails.value = classResponse.data;
  console.log("classResponse", classResponse);
};

onMounted(async () => {
  const response = await categoryService.getCategoryByCode(route.params.categoryCode as string);
  category.value = response.data as CategoryModel;
  console.log(category.value);
  callAPIClassList();
});

const generateSelectedList = (arr: string[]) => {
  const tempArr = removeElement(arr, "all");
  if (tempArr.length === 0 || tempArr.length === category.value.subCategories.length) {
    return ["all"];
  } else {
    return tempArr;
  }
};

const chipList = computed(() => {
  return generateSelectedList(selectedSubCategories.value);
});

const removeElement = (arr: string[], removeValue: any) => {
  return arr.filter((item) => item != removeValue);
};

watch(chipList, () => {
  console.log(chipList.value);
  const query = {
    ...route.query,
    page: 1,
    categories: chipList.value.length ? chipList.value : undefined
  };
  router.push({ query }).catch((err) => console.log(err));
  page.value = 1;
  callAPIClassList();
});

const handleClickChip = (value: string) => {
  let tempArr: string[] = [];
  if (value === "all") {
    selectedSubCategories.value = tempArr;
  } else {
    tempArr = [...selectedSubCategories.value];
    const index = tempArr.indexOf(value);
    if (index == -1) {
      tempArr = [...tempArr, value];
    } else {
      tempArr = tempArr.filter((item) => item != value);
    }
    if (tempArr.length === category.value.subCategories.length) {
      selectedSubCategories.value = [];
    } else {
      selectedSubCategories.value = tempArr;
    }
  }
};

watch(sorter, () => {
  const query = {
    ...route.query,
    page: 1,
    sort: sorter.value
  };
  router.push({ query }).catch((err) => console.log(err));
  page.value = 1;
  callAPIClassList();
});
watch(page, () => {
  const query = {
    ...route.query,
    page: page.value
  };
  router.push({ query }).catch((err) => console.log(err));
  callAPIClassList();
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
        <v-chip-group v-model="chipList" column multiple>
          <v-chip
            text="All"
            value="all"
            variant="outlined"
            color="primary"
            filter
            @click="
              () => {
                handleClickChip('all');
              }
            "
          ></v-chip>
          <v-chip
            v-for="item in category.subCategories"
            :key="item.code"
            :text="item.name"
            :value="item.id"
            variant="outlined"
            color="primary"
            filter
            @click="
              () => {
                handleClickChip(item.id);
              }
            "
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
      <v-col v-for="item in pageDetails.items" :key="item.id" cols="12" md="4">
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
                :length="pageDetails.totalPages"
                class="my-4"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
