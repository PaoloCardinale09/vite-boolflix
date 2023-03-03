<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Boolflix",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <header>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="input-group w-50">
        <input
          type="text"
          class="form-control"
          placeholder="ricerca film"
          aria-label="Recipient's username with two button addons"
        />
        <button class="btn btn-outline-secondary" type="button">Search</button>
        <button class="btn btn-outline-secondary" type="button">Reset</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: aliceblue;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
