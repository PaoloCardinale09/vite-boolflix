<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      term: "",
    };
  },

  emits: ["on-search"],

  methods: {
    clear() {
      this.term = "";
    },

    search() {
      this.$emit("on-search", this.term);
    },
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <form @submit.prevent="" class="py-3">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="search films"
        v-model="term"
        @keyup.enter="search"
      />
      <button class="btn btn-primary" type="button" @click="search">
        <font-awesome-icon class="my-lens" icon="fa-magnifying-glass" />
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.btn-primary {
  background-color: #8d8d8d;
  border-color: #8d8d8d;
}
.my-lens {
  background-color: inherit;
}
</style>
