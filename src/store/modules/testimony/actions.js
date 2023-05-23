export default {
  async addTestimony(context, data) {
    const userId = context.rootGetters.userId;
    const testimonyData = {
      name: data.name,
      testimony: data.testimony,
    };

    const response = await fetch(
      `https://646c21af7b42c06c3b2abf71.mockapi.io/testimonials`,
      {
        method: 'POST',
        body: JSON.stringify(testimonyData),
      }
    );

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to post!');
      throw error;
    }

    context.commit('addTestimony', {
      ...testimonyData,
      id: userId,
    });
  },
  async loadTestimony(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }

    const response = await fetch(
      `https://646c21af7b42c06c3b2abf71.mockapi.io/testimonials`
    );
    console.log({response})
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const testimonials = [];

    for (const key in responseData) {
      const testimony = {
        id: key,
        name: responseData[key].name,
        testimony: responseData[key].testimony,
      };
      testimonials.push(testimony);
    }

    context.commit('setTestimonials', testimonials);
    context.commit('setFetchTimestamp');
  },
};
