<script setup lang="ts">
import { mergeProps, ref } from "vue";

const props = defineProps<{
  categoryList: any;
}>();

/*
[
  { code: "code", name: "Development" },
  { code: "code", name: "Business" },
  { code: "code", name: "Finance & Accounting" },
  { code: "code", name: "IT & Software" },
  { code: "code", name: "Office Productivity" },
  { code: "code", name: "Personal Development" },
  { code: "code", name: "Design" },
  { code: "code", name: "Marketing" },
  { code: "code", name: "Health & Fitness" },
  { code: "code", name: "Music" }
]
*/
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props: menu }">
      <v-tooltip location="top">
        <template v-slot:activator="{ props: tooltip }">
          <v-btn v-bind="mergeProps(menu, tooltip)"
            ><v-icon left dark>mdi-shape</v-icon>
            <div class="tw-ml-2">Category</div>
          </v-btn>
        </template>
        <span>Show all categories</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in props.categoryList"
        :key="index"
        :to="`/category/${item.code}`"
      >
        <v-list-item-action>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
