<template>
  <div class="film-players">
    <div
        v-if="filmData.trailer"
        class="player-text"
        @click="isTrailerVisible = !isTrailerVisible"
      >
        Трейлер
      </div>
      <div
        v-if="filmData.trailer"
        v-show="isTrailerVisible"
        class="player trailer-show"
      >
       <Player :src="filmData.trailer" />
      </div>
      <div class="centered player-margins">
        <Player :src="filmData.link" />
      </div>
  </div>
</template>

<script>
import Player from './Player.vue';

export default {
  name: 'FilmPlayers',
  components: { Player },
  props: {
    filmData: {
      type: Object
    }
  },
  data: () => ({
      isTrailerVisible: false
  })
}
</script>

<style>
.centered {
  display: flex;
  justify-content: center;
}

.player-margins {
  margin: 50px 0;
}
</style>
