<script>
// import MyComponent from "./components/MyComponent.vue";
import FilmCard from "./FilmCard.vue";
import BaseSearch from "./BaseSearch.vue";
import axios from "axios";

export default {
  data() {
    return {
      films: [],
      endpoint:
        "https://api.themoviedb.org/3/search/movie?api_key=fc223a2987b967c2dd7d6b951473a5f7&query=",
    };
  },

  components: {
    FilmCard,
    BaseSearch,
  },
  // importato
  methods: {
    fetch(url) {
      axios.get(url).then((response) => {
        this.films = response.data.results;
      });
    },

    fetchFilteredCards(term) {
      // console.log(term);
      this.fetch(`${this.endpoint} ${term}`);
    },
  },
  // fine importato

  created() {
    this.fetch(this.endpoint);
  },

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
  <BaseSearch @on-search="fetchFilteredCards" />
  <FilmCard
    :title="this.films.title"
    :originalTitle="this.films.original_title"
    :language="this.films.original_language"
    :rating="this.films.vote_average"
  />
</template>

<style lang="scss" scoped></style>
