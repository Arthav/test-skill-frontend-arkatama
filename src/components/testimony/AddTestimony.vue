<template>
  <section>
    <base-card>
      <h2>Add your testimony</h2>
      <testimony-form @save-data="saveData"></testimony-form>
    </base-card>
  </section>
</template>

<script>
import TestimonyForm from './TestimonyForm.vue';

export default {
  components: {
    TestimonyForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('testimony/addTestomony', data);
      this.$router.replace('/testimony');
    }
  }
};
</script>