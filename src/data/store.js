import { reactive } from "vue";

export const store = reactive({
  films: [],
  endpoint:
    "https://api.themoviedb.org/3/search/movie?api_key=fc223a2987b967c2dd7d6b951473a5f7&query=",
});
