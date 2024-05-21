<script setup lang="ts">
import ClassCard from "@/components/ClassCard.vue";
</script>

<template>
  <div>
    <div class="my-4">
      <h1 class="tw-text-4xl">Category name</h1>
      <p>category description</p>
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
