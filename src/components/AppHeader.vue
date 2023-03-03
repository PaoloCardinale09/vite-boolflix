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
        store.films = response.data.results;
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
