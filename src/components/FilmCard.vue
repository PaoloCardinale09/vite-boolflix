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

  data() {
    return {
      isHover: false,
    };
  },

  methods: {
    getFlag(language) {
      if (language == "EN") return `${store.countryFlagUrl}US.png`;
      if (language == "JA") return `${store.countryFlagUrl}JP.png`;
      if (language == "ZH") return `${store.countryFlagUrl}CN.png`;

      return `${store.countryFlagUrl}${language}.png`;
    },

    noneDisplay() {},
  },
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="nonno" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <div class="poster" :class="isHover ? 'inactive' : 'active'">
      <img :src="poster" alt="" />
    </div>
    <div class="wrapper" :class="isHover ? 'active' : 'inactive'">
      <ul class="back">
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  width: fit-content;
  padding: 0;
  // border: 1px solid black;
}

.poster > img {
  width: 100%;

  // transition: background-color 0.2s ease;
}

// .poster {
//   z-index: 3;
// }

.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #8d8d8d;
}
.active {
  opacity: 1;
}
.inactive {
  opacity: 0;
}
</style>
