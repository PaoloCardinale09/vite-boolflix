<script>
// import MyComponent from "./components/MyComponent.vue";
import FilmList from "./FlimList.vue";

export default {
  data() {
    return {};
  },

  // components: {
  //   MyComponent,
  // },
  components: {
    FilmList,
  },
};
</script>

<template>
  <FilmList />
</template>

<style lang="scss" scoped>
* {
  height: calc(100vh - 4rem);
}
</style>
