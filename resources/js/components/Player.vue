<template>
  <div class="video">
    <video
      ref="videoPlayer"
      class="video-js vjs-big-play-centered"
      controls
      width="537"
      height="240">
      <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'Player',
  props: {
    options: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data () {
    return {
      player: null
    }
  },
  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
      console.log('onPlayerReady', this)
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped>
  @import "video.js/dist/video-js.css";
  .video {
    margin-left: 50px;
    padding: 5px;
    width: 549px;
    border: 1px solid white;
  }
</style>
