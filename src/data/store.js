import { reactive } from "vue";

export const store = reactive({
  films: [],
  tvSeries: [],
  allMedias: [],
  resultFound: false,
  endpoint:
    "https://api.themoviedb.org/3/search/multi?api_key=fc223a2987b967c2dd7d6b951473a5f7&query=",
  countryFlagUrl: "https://www.countryflagicons.com/FLAT/32/",
  picsUrl: "https://image.tmdb.org/t/p/w342",
});
