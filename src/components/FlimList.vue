<script>
// import MyComponent from "./components/MyComponent.vue";
import FilmCard from "./FilmCard.vue";
import BaseSearch from "./BaseSearch.vue";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  components: {
    FilmCard,
    BaseSearch,
  },
  // importato

  //   created() {
  //     axios.get(this.endpoint).then((response) => {
  //       this.film = response.data.results[0];
  //       console.log("film+" + this.film.title);
  //       console.log("endpoint" + this.endpoint);
  //     });
  //   },
};
</script>

<template>
  <div v-for="film in store.films">
    <FilmCard
      :title="film.title"
      :originalTitle="film.original_title"
      :language="film.original_language"
      :rating="film.vote_average"
    />
  </div>
</template>

<style lang="scss" scoped></style>
