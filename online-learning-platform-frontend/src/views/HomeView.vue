<script setup lang="ts">
import { mergeProps, ref } from "vue";

const tab = ref(null);
const items = ref([
  { title: "Click Me1" },
  { title: "Click Me2" },
  { title: "Click Me3" },
  { title: "Click Me4" }
]);
</script>

<template>
  <div>
    <v-carousel>
      <v-carousel-item
        cover
        src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/542775ce-985d-4103-8f86-1bfc28afb29d.jpg"
      ></v-carousel-item>

      <v-carousel-item
        cover
        src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/bb8a096a-97c7-4b5a-becc-2338078e1372.jpg"
      ></v-carousel-item>

      <v-carousel-item
        cover
        src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/3c236509-a2a2-4d7d-a448-2fedc8a2d3fc.jpg"
      ></v-carousel-item>
    </v-carousel>
  </div>
  <div class="text-center">
    abc
    <v-menu>
      <template v-slot:activator="{ props: menu }">
        <v-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <v-btn color="primary" v-bind="mergeProps(menu, tooltip)"> Dropdown w/ Tooltip </v-btn>
          </template>
          <span>I'm A Tooltip</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
