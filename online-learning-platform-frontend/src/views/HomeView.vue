<script setup lang="ts">
import { ref } from "vue";
import TwoParagraphBlock from "@/components/TwoParagraphBlock.vue";
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
  <div class="text-center tw-flex tw-justify-center tw-my-16 tw-p-4">
    <div class="tw-max-w-[500px] tw-text-justify">
      <p class="tw-text-2xl tw-font-bold">
        Unlock Your Potential: Empower Yourself Through Education.
      </p>
      <p>
        Seize Your Potential: Transform your aspirations into achievements by enrolling in our
        courses today. Empower yourself with knowledge and take charge of your future. Start your
        journey of growth and success now.
      </p>
    </div>
  </div>
  <TwoParagraphBlock gray>
    <template #left
      ><div class="w-full tw-text-flex">
        <p class="tw-text-2xl tw-font-bold mb-4">
          Unlock Your Potential: Empower Yourself Through Education.
        </p>
        <p>
          Seize Your Potential: Transform your aspirations into achievements by enrolling in our
          courses today. Empower yourself with knowledge and take charge of your future. Start your
          journey of growth and success now.
        </p>
      </div></template
    >
    <template #right>
      <iframe
        class="video-block"
        height="300px"
        src="https://www.youtube.com/embed/9JSYB59QmZw"
        title="Introducing the Udemy app"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </template>
  </TwoParagraphBlock>
  <TwoParagraphBlock gray>
    <template #left
      ><div class="w-full tw-text-flex">
        <p class="tw-text-2xl tw-font-bold mb-4">
          Join us on our journey to empower individuals through education
        </p>
        <p>
          Whether you're a student eager to explore new horizons or a teacher ready to share your
          expertise, our platform has something for you. Take the next step in your educational
          journey.
        </p>
      </div>
      <div class="tw-flex tw-justify-center mt-4">
        <v-col cols="20" md="4" sm="6">
          <v-btn variant="tonal" rounded="xl" block>LOG IN</v-btn>
        </v-col>
        <v-col cols="20" md="4" sm="6">
          <v-btn rounded="xl" block>SIGN UP</v-btn>
        </v-col>
      </div>
    </template>
    <template #right>
      <div class="introduction-image-background tw-flex tw-justify-center tw-items-center">
        <v-col cols="20" md="6" sm="6">
          <v-btn color="indigo-darken-3" rounded="xl" size="x-large" block>Explore Classes</v-btn>
        </v-col>
      </div>
    </template>
  </TwoParagraphBlock>
</template>

<style>
.video-block {
  width: 100%;
}

.introduction-image-background {
  background: url("https://images.ctfassets.net/81iqaqpfd8fy/41KiNVEWQM6MgY8QEGkoco/44b9952239085ad2c731b3dcef4cc94f/selfcareguide-02.jpg?fm=webp&h=620&w=1440");
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 320px;
}
</style>
