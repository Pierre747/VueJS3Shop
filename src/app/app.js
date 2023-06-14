import '@fortawesome/fontawesome-free/js/all' // Je vais utiliser la librairie d'icônes de FontAwesome
import '../assets/css/loader.css' // Je charge mon loader de CSS
import { createApp } from 'vue'
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import routes from '../routes/routes'
import store from '../store/store'

const app_store = createStore(store);

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
    scrollBehavior() {
        window.scrollTo(0,0);
    },
});

createApp(App)
    .use(app_store)
    .use(router)
    .mount('#app')