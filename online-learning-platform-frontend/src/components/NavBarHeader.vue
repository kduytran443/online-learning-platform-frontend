<script setup lang="ts">
import { ref } from "vue";

const { appTitle, menuItems } = {
  appTitle: import.meta.env.VITE_APP_NAME,
  menuItems: [
    { title: "Home", path: "/home", icon: "mdi-home" },
    { title: "Sign Up", path: "/signup", icon: "mdi-face-man" },
    { title: "Sign In", path: "/signin", icon: "mdi-lock" }
  ]
};
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
        <v-btn v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          <div class="tw-ml-2">{{ item.title }}</div>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
