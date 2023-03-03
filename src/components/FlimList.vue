<script>
// import MyComponent from "./components/MyComponent.vue";
import FilmCard from "./FilmCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      films: [],
    };
  },

  components: {
    FilmCard,
  },

  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=fc223a2987b967c2dd7d6b951473a5f7&query=ritorno%20"
      )
      .then((response) => {
        console.log(response.data.results[0].title);
      });
  },
};
</script>

<template>
  <FilmCard :title="response.data.results[0].title" />
</template>

<style lang="scss" scoped></style>
