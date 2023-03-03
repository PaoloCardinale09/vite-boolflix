<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    title: String,
    originalTitle: String,
    language: String,
    rating: Number,
  },
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <ul>
    <li>{{ title }}</li>
    <li>{{ originalTitle }}</li>
    <li>{{ language }}</li>
    <li>{{ rating }}</li>
  </ul>
</template>

<style lang="scss" scoped></style>
