import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from "@/components/Header";


Vue.config.productionTip = false

Vue.component('Header', Header);

const keyFavorite = 'favorites';

Vue.mixin({
    data() {
        return {
            service: axios.create({
                baseURL: 'https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos'
            })
        }
    },
    methods: {
        saveFavorites(videos) {
            localStorage.setItem(keyFavorite, JSON.stringify(videos.filter(x => x.isFavorite)))
        },
        getFavorites() {
            const json = localStorage.getItem(keyFavorite)
            return JSON.parse(json)
        },
        getFavoriteCount() {
            const json = localStorage.getItem(keyFavorite)
            return JSON.parse(json).length
        }
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
