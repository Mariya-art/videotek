<template>
  <div class="film-players">
    <div v-if="filmData.trailer && filmData.type_id !== 3">
      <transition name="fade">
        <div
          v-show="isTrailerVisible"
          class="player"
        >
          <Player :src="filmData.trailer" />
        </div>
      </transition>
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
    },
    isTrailerVisible: {
      type: Boolean
    }
  }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
