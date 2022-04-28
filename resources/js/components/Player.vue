<template>
  <div class="video">
    <video
      ref="videoPlayer"
      class="video-js vjs-big-play-centered"
      controls
      :width="width"
      :height="height"
    >
      <source :src="src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: 'Player',
  props: {
    options: {
      type: Object,
      default () {
        return {};
      },
    },
    src: null,
    width: {
      default: 537,
    },
    height: {
      default: 240,
    }
  },
  data () {
    return {
      player: null,
    };
  },
  mounted () {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady () {
      // console.log('onPlayerReady', this);
      }
    )
    // console.log(this.src)
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style scoped>
  @import "video.js/dist/video-js.css";
  .video {
    border: 3px solid #EB5804;
  }
</style>
