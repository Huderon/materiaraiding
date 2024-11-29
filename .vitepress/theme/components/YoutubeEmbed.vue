<template>
  <div class="youtube-container">
    <iframe
        :src="`https://www.youtube.com/embed/${videoId}${timestamp ? `?start=${timestamp}` : ''}`"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="youtube-iframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.youtube-container {
  aspect-ratio: 16 / 9;
}

.youtube-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
