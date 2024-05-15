<script setup lang="ts">
import { mergeProps, ref } from "vue";

const { appTitle, menuItems } = {
  appTitle: import.meta.env.VITE_APP_NAME,
  menuItems: [
    { title: "Home", path: "/home", icon: "mdi-home" },
    { title: "Sign Up", path: "/signup", icon: "mdi-face-man" },
    { title: "Sign In", path: "/signin", icon: "mdi-lock" }
  ]
};

const items = ref([
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
]);
const sidebar = ref(false);
</script>

<template>
  <div class="tw-shadow-inner tw-shadow-sm">
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
    <v-toolbar app>
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
            <v-list-item v-for="(item, index) in items" :key="index" :to="`/category/${item.code}`">
              <v-list-item-action>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          <div class="tw-ml-2">{{ item.title }}</div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
