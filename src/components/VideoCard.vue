<template>
  <div class="col-6 col-md-4 col-lg-3 mb-4 h-auto position-relative">
    <button class="add-favorite btn btn-light" @click="toggleFavorite">
      <i
        :class="{
          bi: true,
          'bi-heart': !video.isFavorite,
          'bi-heart-fill': video.isFavorite,
        }"
      />
    </button>
    <div class="card h-100" @click="goToWatch">
      <img
        :src="coverImage"
        @mouseenter="showHoverImage"
        @mouseleave="showCoverImage"
        class="card-img-top"
        :alt="video.ownerName"
      />
      <div class="card-body d-flex h-auto">
        <img :src="video.ownerImage" class="owner-image" alt="" />
        <div class="info ms-3 h-100 w-100">
          <h6 class="card-title">{{ video.title }}</h6>
          <p class="card-text">{{ video.ownerName }}</p>
          <div class="d-flex view-info">
            {{ video.viewCount }} viewed • {{ video.publishDateInMonth }} mounts
            ago
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    video: {
      coverImage: String,
      description: String,
      hoverImage: String,
      id: Number,
      ownerImage: String,
      ownerName: String,
      publishDateInMonth: Number,
      title: String,
      videoAddress: String,
      viewCount: Number,
      isFavorite: Boolean,
    },
  },
  data() {
    return {
      coverImage: this.video.coverImage,
    };
  },
  methods: {
    showHoverImage() {
      this.coverImage = this.video.hoverImage;
    },
    showCoverImage() {
      this.coverImage = this.video.coverImage;
    },
    goToWatch() {
      this.$router.push({ name: "Watch", query: { id: this.video.id } });
    },
    toggleFavorite() {
      this.video.isFavorite = !this.video.isFavorite;
      this.$emit("change");
    },
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}

.card-img-top {
  display: block;
  max-width: 100%;
  width: 360px;
  height: 200px;
}

.card-img-top:hover {
  cursor: pointer;
}

.owner-image {
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}

.info {
  position: relative;
  padding-bottom: 2rem;
}

.view-info {
  position: absolute;
  bottom: 0;
}

.add-favorite {
  position: absolute;
  top: 0.5rem;
  right: 1.25rem;
  display: inline-block;
  z-index: 5;
}
</style>