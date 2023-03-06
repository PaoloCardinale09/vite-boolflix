import { reactive } from "vue";

export const store = reactive({
  films: [],
  tvSeries: [],
  allMedias: [],
  resultFound: null,
  faceLogo:
    "https://preview.redd.it/me-what-happened-to-netflix-face-icon-wasnt-the-smile-v0-ty54wbejild91.jpg?auto=webp&s=60f30f84482606de64d9630154c9c0a3f32aca05",
  endpoint:
    "https://api.themoviedb.org/3/search/multi?api_key=fc223a2987b967c2dd7d6b951473a5f7&query=",
  countryFlagUrl: "https://www.countryflagicons.com/FLAT/32/",
  picsUrl: "https://image.tmdb.org/t/p/w342",
});
