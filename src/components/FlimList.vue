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
  <h2 v-if="store.films.length">
    Film
    <font-awesome-icon icon="fa-regular fa-star" />
    <font-awesome-icon icon="fa-solid fa-star" />
  </h2>
  <div v-for="film in store.films">
    <FilmCard
      :poster="store.picsUrl + film.poster_path"
      :title="film.title"
      :originalTitle="film.original_title"
      :language="
        store.countryFlagUrl + film.original_language.toUpperCase() + '.png'
      "
      :rating="film.vote_average"
    />

    <FilmCard
      :poster="store.picsUrl + film.poster_path"
      :title="film.title"
      :originalTitle="film.original_title"
      :language="
        store.countryFlagUrl + film.original_language.toUpperCase() + '.png'
      "
      :rating="film.vote_average"
    />
  </div>
  <h2 v-if="store.tvSeries.length">Tv Series</h2>
  <div v-for="tvserie in store.tvSeries">
    <FilmCard
      :poster="store.picsUrl + tvserie.poster_path"
      :title="tvserie.name"
      :originalTitle="tvserie.original_name"
      :language="
        store.countryFlagUrl + tvserie.origin_country[0].toUpperCase() + '.png'
      "
      :rating="tvserie.vote_average"
    />
  </div>
</template>

<style lang="scss" scoped></style>
