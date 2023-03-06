<script>
// import MyComponent from "./components/MyComponent.vue";
import FilmCard from "./FilmCard.vue";
import BaseSearch from "./BaseSearch.vue";
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
      language: "",
    };
  },

  components: {
    FilmCard,
    BaseSearch,
  },
};
</script>

<template>
  <h2 v-if="store.films.length">Film</h2>
  <div v-for="film in store.films">
    <FilmCard
      :poster="store.picsUrl + film.poster_path"
      :title="film.title"
      :originalTitle="film.original_title"
      :language="film.original_language.toUpperCase()"
      :rating="film.vote_average"
    />
  </div>
  <h2 v-if="store.tvSeries.length">Tv Series</h2>
  <div v-for="tvserie in store.tvSeries">
    <FilmCard
      :poster="store.picsUrl + tvserie.poster_path"
      :title="tvserie.name"
      :originalTitle="tvserie.original_name"
      :language="tvserie.original_language.toUpperCase()"
      :rating="tvserie.vote_average"
    />
  </div>
</template>

<style lang="scss" scoped></style>
