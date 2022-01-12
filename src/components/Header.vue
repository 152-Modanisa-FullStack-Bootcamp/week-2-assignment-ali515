<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Bootcamp</router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div id="search" class="d-flex mx-auto">
                    <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search by title in videos..."
                            v-model="searchText"
                    />
                </div>
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link
                                :class="{
                                        'nav-link': true,
                                        'active': $route.name === 'Favorites'
                                    }"
                                :to="{name: 'Favorites', params: {userid:'bootcamp'}}"
                        >
                            Favorites ({{ favoriteCount }})
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header",
    props: {
        favoriteCount: Number
    },
    data() {
        return {
            searchText: ""
        }
    },
    watch: {
        searchText(searchText) {
            console.log(arguments)
            this.$emit('search', searchText)
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
#search {
    max-width: 30rem;
    width: 100%;
}
</style>