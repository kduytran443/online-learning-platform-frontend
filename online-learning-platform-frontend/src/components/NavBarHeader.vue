<script setup lang="ts">
import { onMounted, ref } from "vue";
import CategoryListMenuButton from "./CategoryListMenuButton.vue";
import SearchInHeader from "./SearchInHeader.vue";
import urlConstant from "@/constants/urlConstant";
import { categoryService } from "@/services/categoryService";

const { appTitle, menuItems } = {
  appTitle: import.meta.env.VITE_APP_NAME,
  menuItems: [
    { title: "Sign Up", path: urlConstant.SIGN_UP, icon: "mdi-face-man" },
    { title: "Log In", path: urlConstant.LOGIN_URL, icon: "mdi-lock" }
  ]
};

const sidebar = ref(false);
const categoryList = ref([]);

onMounted(async () => {
  const response = await categoryService.getRootList();
  const categoryListResponse = response.data;
  categoryList.value = categoryListResponse;
  console.log("categoryListResponse", categoryListResponse);
});
</script>

<template>
  <div class="tw-shadow-inner tw-shadow-sm tw-mb-10">
    <v-navigation-drawer v-model="sidebar">
      <v-app-bar-nav-icon @click="sidebar = !sidebar"
        ><v-icon>mdi-close</v-icon></v-app-bar-nav-icon
      >
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
          <div class="tw-flex">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title class="tw-ml-2">{{ item.title }}</v-list-item-title>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dense fixed app>
      <span class="tw-block sm:tw-hidden">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" style="cursor: pointer">
          <div>
            <v-avatar>
              <img alt="App Logo" src="@\assets\logo.png" />
            </v-avatar>
            {{ appTitle }}
          </div>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="tw-hidden sm:tw-block">
        <SearchInHeader />
        <CategoryListMenuButton :category-list="categoryList" />
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          <div class="tw-ml-2">{{ item.title }}</div>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
