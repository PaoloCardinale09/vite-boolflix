<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  props: {
    title: String,
    originalTitle: String,
    language: String,
    rating: Number,
    poster: String,
  },
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="poster">
    <img :src="poster" alt="" />
  </div>
  <ul>
    <li>{{ title }}</li>
    <li>{{ originalTitle }}</li>
    <li>
      <img :src="language" alt="" />
    </li>
    <li>
      <span v-for="n in 5" :key="n">
        <i
          :icon="{
            'fa-solid fa-star': n <= Math.round(rating / 2),
            'fa-solid fa-star': n > Math.round(rating / 2),
          }"
        ></i>
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  width: fit-content;
  border: 1px solid black;
}
</style>
