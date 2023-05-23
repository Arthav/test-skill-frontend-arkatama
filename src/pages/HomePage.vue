<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadTestimony(true)"
            >Refresh</base-button
          >
          <base-button v-if="!isLoading" link to="/add-testimony"
            >Add testimony</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasTestimony">
          <testimony-item
            v-for="testimony in filteredTestimony"
            :key="testimony.id"
            :id="testimony.id"
            :name="testimony.name"
            :testimony="testimony.testimony"
          ></testimony-item>
        </ul>
        <h3 v-else>No Testimony found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import TestimonyItem from "../components/testimony/TestimonyItem.vue";

export default {
  components: {
    TestimonyItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    filteredTestimony() {
      const testimony = this.$store.getters["testimony/testimonials"];
      return testimony;
    },
    hasTestimony() {
      return !this.isLoading && this.$store.getters["testimony/hasTestimony"];
    },
  },
  created() {
    this.loadTestimony();
  },
  methods: {
    async loadTestimony(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("testimony/loadTestimony", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
