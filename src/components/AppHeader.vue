<script>
// import MyComponent from "./components/MyComponent.vue";
import { store } from "../data/store";
import BaseSearch from "./BaseSearch.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Boolflix",
      store,
      showSearch: false,
    };
  },

  components: {
    BaseSearch,
  },

  methods: {
    fetch(url) {
      axios.get(url).then((response) => {
        store.allMedias = response.data.results;

        store.films = store.allMedias.filter(
          (media) => media.media_type == "movie"
        );
        store.tvSeries = store.allMedias.filter(
          (media) => media.media_type == "tv"
        );
        if (store.films.length > 0 || store.tvSeries.length > 0) {
          store.resultFound = true;
        } else {
          store.resultFound = false;
        }
      });
    },

    fetchFilteredCards(term) {
      // console.log(term);
      this.fetch(`${store.endpoint} ${term}`);
    },
  },
  // fine importato

  // created() {
  //   this.fetch(store.endpoint);
  // },
};
</script>

<template>
  <header>
    <div class="container">
      <div class="header--left d-flex">
        <div class="logo">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-1.png"
            alt="logo"
          />
        </div>
        <ul class="d-flex gap-3">
          <li>Home</li>
          <li>Serie TV</li>
          <li>Film</li>
          <li>Originali</li>
          <li>Aggiunti di recente</li>
          <li>La mia lista</li>
        </ul>
      </div>
      <div class="header--right d-flex align-items-center gap-3">
        <font-awesome-icon
          @click="showSearch = !showSearch"
          icon="fa-solid fa-magnifying-glass"
          class="text-light"
        />
        <BaseSearch v-show="showSearch" @on-search="fetchFilteredCards" />
        <span>BAMBINI</span>
        <font-awesome-icon icon="fa-solid fa-bell" class="text-light" />
        <img :src="store.faceLogo" alt="" />
        <font-awesome-icon icon="fa-solid fa-caret-down" class="text-light" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #1b1b1b;
  color: #8d8d8d;
  height: 4rem;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo > img {
  height: 2rem;
}

.header--right img {
  height: 2rem;
}
</style>
