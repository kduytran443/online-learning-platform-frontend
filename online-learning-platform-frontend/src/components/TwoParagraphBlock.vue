<script setup lang="ts">
const props = defineProps({
  gray: Boolean
});
console.log(props.gray);
</script>

<template>
  <div
    :class="{ 'tw-bg-gray-100': props.gray }"
    class="tw-my-8 tw-w-full md:tw-flex-row tw-flex tw-justify-around tw-p-8 tw-shadow-inner tw-flex-col-reverse"
  >
    <div class="md:tw-max-w-[50%] tw-max-w-full tw-w-full px-4"><slot name="left" /></div>
    <div class="md:tw-max-w-[50%] tw-max-w-full tw-w-full px-4"><slot name="right" /></div>
  </div>
</template>
