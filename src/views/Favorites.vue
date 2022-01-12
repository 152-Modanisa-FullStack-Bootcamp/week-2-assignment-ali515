<template>
    <div id="favorites" class="container">
        <Header :favorite-count="favoriteCount" @search="search"/>
        <div class="row mt-5" v-if="videos.length">
            <VideoCardForFavorite
                    v-for="video in searchedVideos"
                    :key="video.id"
                    :video="video"
                    @change="change"
                    :for-fovorite-page="true"
            />
        </div>
        <div v-else class="centered">
            <h3>Not Added Any Video in Favorites</h3>
        </div>
    </div>
</template>

<script>
import VideoCardForFavorite from "@/components/VideoCardForFavorite";

export default {
    name: "Favorites",
    components: {VideoCardForFavorite},
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
            this.videos = this.getFavorites()
        },
        search(searchText) {
            this.searchText = searchText
        }
    },
    created() {
        this.videos = this.getFavorites()
    }
}
</script>

<style scoped>

</style>