<template>
    <div id="watch" class="container">
        <Header :favorite-count="favoriteCount"/>
        <div v-if="!video" class="centered">
            <h3>404 - Video Not Found</h3>
        </div>
        <div v-else-if="video === true" class="centered">
            <h3>Loading...</h3>
        </div>
        <div v-else class="video">
            <iframe
                    :src="youtubeId"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "Watch",
    data() {
        return {
            video: true
        }
    },
    computed: {
        favoriteCount() {
            return this.getFavoriteCount()
        },
        youtubeId() {
            let parts = this.video.videoAddress.split('v=');
            parts = parts[1].split('&')
            const youtubeId = parts[0]
            return `https://www.youtube.com/embed/${youtubeId}`
        }
    },
    async created() {
        const {id} = this.$route.query
        const {data: videos} = await this.service.get("", {params: {id}})
        if (!videos.length) {
            this.video = null
            return;
        }
        const video = videos[0];
        console.log(video)
        const favorites = this.getFavorites()
        video.isFavorite = favorites.some(x => x.id === video.id);
        this.video = video
    }
}
</script>

<style scoped>
.video {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    width: 100%;
}

iframe {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 600px;
}
</style>