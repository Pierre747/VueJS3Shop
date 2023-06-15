import home from '../views/home.vue';
import infos from '../views/infos.vue';
import errorPage from '../views/errorPage.vue'
import Details from "@/components/Details.vue";
import Categories from "@/components/Categories.vue";

export default [
    { name: 'home', path: '/', component: home },
    { name: 'infos', path: '/infos', component: infos },
    { name: 'categories', path: '/categories', component: Categories },
    { name: 'details', path: '/products/:id', component: Details },
    { name: 'errorPage', path: '/:pathMatch(.*)*', component: errorPage },
]