// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App)
  .use(store)  // Integrar Vuex
  .mount('#app');
