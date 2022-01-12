<template>
    <div id="home" class="container">
        <Header :favorite-count="favoriteCount" @search="search"/>
        <div class="row mt-5">
            <VideoCard v-for="video in searchedVideos" :key="video.id" :video="video" @change="change"/>
        </div>
    </div>
</template>

<script>
import VideoCard from "@/components/VideoCard";

export default {
    name: 'Home',
    components: {VideoCard},
    data() {
        return {
            videos: [],
            searchText: ""
        }
    },
    computed: {
        favoriteCount() {
            return this.videos.filter(x => x.isFavorite).length
        },
        searchedVideos() {
            if (!this.searchText)
                return this.videos
            return this.videos.filter(x => x.title.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    },
    methods: {
        change() {
            this.saveFavorites(this.videos)
        },
        search(searchText) {
            this.searchText = searchText
        }
    },
    async created() {
        const {data: videos} = await this.service.get("");
        const favoriteVideos = this.getFavorites()
        this.videos = videos.map(x => ({...x, isFavorite: favoriteVideos.some(y => y.id === x.id)}))
    }
}
</script>
