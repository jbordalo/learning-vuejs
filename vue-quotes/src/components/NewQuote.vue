<template>
  <div class="row">
    <div
      class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
    >
      <label>Quote</label>
      <textarea
        class="form-control"
        rows="3"
        v-model="quote"
        placeholder="Your quote"
        ref="quoteInput"
      ></textarea>
    </div>
    <div
      class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
    >
      <button class="btn btn-rimary" @click.prevent="createNew">
        Add Quote
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: "",
    };
  },
  methods: {
    createNew() {
      if (this.quote === "") {
        this.$refs.quoteInput.focus();
        return alert("Please type a quote!");
      }
      this.$emit("quoteAdded", this.quote);
      this.quote = "";
    },
  },
};
</script>

<style scoped>
</style>
