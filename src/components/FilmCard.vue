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
      isShow: true,
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
  <div
    class="poster"
    :class="isHover ? 'inactive' : 'active'"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <img :src="poster" alt="" />
    <div
      class="wrapper"
      :class="isShow ? 'reactive' : 'reinactive'"
      @mouseenter="isShow = false"
      @mouseleave="isShow = true"
    >
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
  border: 1px solid black;
}
.active {
  opacity: 1;
}
.inactive {
  opacity: 0;
}

.poster > img {
  width: 100%;

  // transition: background-color 0.2s ease;
}

.poster {
  position: relative;
}

.wrapper {
  position: absolute;
  top: 0;
  opacity: 0;
}
.reactive {
  opacity: 1;
}

reinactive {
  opacity: 0;
}
</style>
