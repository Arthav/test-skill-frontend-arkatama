export default {
  testimonials(state) {
    return state.testimonials;
  },
  hasTestimony(state) {
    return state.testimonials && state.testimonials.length > 0;
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};