<template>
  <div class="alert alert-danger text-center">
    <h1>That's not correct!</h1>
    <hr />
    <button class="btn btn-primary" @click="onNextQuestion">
      Next Question
    </button>
  </div>
</template>
<style>
</style>
<script>
export default {
  methods: {
    onNextQuestion() {
      this.$emit("confirmed");
    },
  },
};
</script>
