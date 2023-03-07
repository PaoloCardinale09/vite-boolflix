<script>
// import MyComponent from "./components/MyComponent.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
  components: { AppHeader, AppMain },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
* {
  list-style-type: none;
  background-color: #1b1b1b;
}
</style>
