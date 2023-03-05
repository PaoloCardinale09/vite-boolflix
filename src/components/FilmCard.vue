<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    title: String,
    originalTitle: String,
    language: String,
    rating: String,
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
    <li>
      <img :src="language" alt="" />
    </li>
    <li>{{ rating }}</li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  width: fit-content;
  border: 1px solid black;
}
</style>
