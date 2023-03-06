<script>
// import MyComponent from "./components/MyComponent.vue";
import { store } from "../data/store";
export default {
  props: {
    title: String,
    originalTitle: String,
    language: String,
    rating: Number,
    poster: String,
  },

  methods: {
    getFlag(language) {
      if (language == "EN") return `${store.countryFlagUrl}US.png`;
      if (language == "JA") return `${store.countryFlagUrl}JP.png`;
      if (language == "ZH") return `${store.countryFlagUrl}CN.png`;

      return `${store.countryFlagUrl}${language}.png`;
    },
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
      <div>
        <img :src="getFlag(language)" />
      </div>
    </li>
    <li>
      <span v-for="n in Math.round(rating / 2)" :key="n">
        <font-awesome-icon icon="fa-solid fa-star"></font-awesome-icon>
      </span>

      <span v-for="n in 5 - Math.round(rating / 2)" :key="n">
        <font-awesome-icon icon="fa-regular fa-star"></font-awesome-icon>
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  width: fit-content;
  border: 1px solid black;
}

.poster > img {
  width: 100%;
}
</style>
