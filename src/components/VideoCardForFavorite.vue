<template>
  <div class="col-12 mb-4 h-auto position-relative">
    <button class="add-favorite btn btn-light" @click="toggleFavorite">
      <i
        :class="{
          bi: true,
          'bi-heart': !video.isFavorite,
          'bi-heart-fill': video.isFavorite,
        }"
      />
    </button>
    <div class="card h-100 flex-row" @click="goToWatch">
      <img
        :src="coverImage"
        @mouseenter="showHoverImage"
        @mouseleave="showCoverImage"
        class="card-img-top"
        :alt="video.ownerName"
      />
      <div class="card-body h-auto">
        <h5 class="card-title">{{ video.title }}</h5>
        <div class="d-flex mb-3">
          {{ video.viewCount }} viewed • {{ video.publishDateInMonth }} mounts
          ago
        </div>
        <div class="d-flex align-items-center mb-3">
          <img :src="video.ownerImage" class="owner-image" alt="" />
          <h6 class="card-text ms-2">{{ video.ownerName }}</h6>
        </div>
        <p class="card-text ms-2">{{ video.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCardForFavorite",
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
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.add-favorite {
  position: absolute;
  top: 0.5rem;
  right: 1.25rem;
  display: inline-block;
  z-index: 5;
}
</style>