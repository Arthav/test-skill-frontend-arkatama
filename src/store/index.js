import { createStore } from 'vuex';

import testimonyModule from './modules/testimony/index.js';

const store = createStore({
  modules: {
    testimony: testimonyModule,
  },
});

export default store;
