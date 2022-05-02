<template>
  <div class="film-players">
    <div v-if="filmData.trailer && filmData.type_id !== 3">
      <div class="player-text" @click="isTrailerVisible = !isTrailerVisible">
        Трейлер
      </div>
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
    }
  },
  data: () => ({
      isTrailerVisible: false
  }),
  methods: {
    onToggleShow() {
      if (this.isTrailerVisible) {
        this.className = 'player trailer-hide'
      } else {
        this.className = 'player trailer-show'
        this.isTrailerVisible = true;
      }
      // this.isTrailerVisible = ! this.isTrailerVisible
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

.player-text {
  display: flex;
  justify-content: center;
  margin: 15px 5px;
  font-size: 18pt;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
