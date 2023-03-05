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
        console.log("sono le serie " + store.tvSeries);
        console.log("sono i films " + store.films);
      });
    },

    fetchFilteredCards(term) {
      // console.log(term);
      this.fetch(`${store.endpoint} ${term}`);
    },
  },
  // fine importato

  created() {
    this.fetch(store.endpoint);
  },
};
</script>

<template>
  <header>
    <div class="container">
      <h1>{{ title }}</h1>
      <BaseSearch @on-search="fetchFilteredCards" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: aliceblue;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
