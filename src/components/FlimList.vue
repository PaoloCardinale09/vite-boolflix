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
  <div class="container">
    <h2 class="p-2" v-if="store.films.length">Films</h2>
    <div
      class="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 flex-nowrap overflow-auto"
    >
      <div class="col" v-for="film in store.films">
        <FilmCard
          :poster="store.picsUrl + film.poster_path"
          :title="film.title"
          :originalTitle="film.original_title"
          :language="film.original_language.toUpperCase()"
          :rating="film.vote_average"
        />
      </div>
    </div>
    <h2 class="p-2 pt-5" v-if="store.tvSeries.length">Tv Series</h2>
    <div
      class="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 flex-nowrap overflow-auto"
    >
      <div class="col" v-for="tvserie in store.tvSeries">
        <FilmCard
          :poster="store.picsUrl + tvserie.poster_path"
          :title="tvserie.name"
          :originalTitle="tvserie.original_name"
          :language="tvserie.original_language.toUpperCase()"
          :rating="tvserie.vote_average"
        />
      </div>
    </div>
    <p
      class="text-danger h3 py-5"
      v-if="store.resultFound !== null && store.resultFound === false"
    >
      No results found.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.col {
  overflow: auto;
  position: relative;
  cursor: pointer;
}
h2 {
  color: #8d8d8d;
}
</style>
