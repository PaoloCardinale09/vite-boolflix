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
  <h2 v-if="store.films.length">Film</h2>
  <div v-for="film in store.films">
    <FilmCard
      :title="film.title"
      :originalTitle="film.original_title"
      :language="
        'https://www.countryflagicons.com/FLAT/32/' +
        film.original_language.toUpperCase() +
        '.png'
      "
      :rating="film.media_type"
    />
  </div>
  <h2 v-if="store.tvSeries.length">Tv Series</h2>
  <div v-for="film in store.tvSeries">
    <FilmCard
      :title="film.name"
      :originalTitle="film.original_name"
      :language="
        'https://www.countryflagicons.com/FLAT/32/' +
        film.origin_country[0].toUpperCase() +
        '.png'
      "
      :rating="film.media_type"
    />
  </div>
</template>

<style lang="scss" scoped></style>
