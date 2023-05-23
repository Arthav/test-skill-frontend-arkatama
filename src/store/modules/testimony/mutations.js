export default {
  addTestimony(state, payload) {
    state.coaches.push(payload);
  },
  setTestimonials(state, payload) {
    state.testimonials = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};