<template>
  <div class="seasons-comp">
    <div class="seasons">
      Сезоны:
      <button
        v-for="season in serialData.seasons"
        :key="season.number"
        :class="getVBclass(season)"
        @click="activate(season)"
      >{{ season.number }}</button>
    </div>
    <div class="series-list">
      <v-sheet>
        <v-slide-group show-arrows dark class="slider-style">
            <v-card>
              <v-row
                class="slider-style"
                align="center"
                justify="center"
              >
                  <div v-for="item in getSeries" :key="item.number">
                    <div class="player-card">
                        <Player :src="item.link" width="215" height="96" :key="item.number + activeSeason"/>
                        Серия {{ item.number }}: {{item.title}}
                    </div>
                  </div>
              </v-row>
            </v-card>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import Player from './Player.vue'

export default {
  name: 'SerialWatchLine',
  components: { Player },
  props: {
    serialData: {
      type: Object
    }
  },
  data: () => ({
    activeSeason: 1
  }),
  methods: {
    activate (item) {
      this.activeSeason = item.number
      this.$forceUpdate()
    },
    getVBclass(season) {
      if (this.activeSeason === season.number) return 'season-btn season-btn--active'
      return 'season-btn'
    }
  },
  computed: {
    getSeries () {
      return this.serialData.seasons[this.activeSeason - 1].series
    }
  }
}
</script>

<style>
.seasons {
  font-size: 15pt;
  font-weight: bold;
  text-indent: 270px;
}

.player-card {
  padding: 0 40px;
  margin: 20px 0;
  width: 300px;
  display: flex;
  flex-direction: column;
}

.series-list {
  margin: 80px 0;
}

.season-btn {
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border: 1px solid #eb5804;
  font-weight: normal;
}
.season-btn:hover {
  background-color: #eb5804;
  opacity: .5;
  color: black;
}
.season-btn--active {
  background-color: orangered;
  color: black;
}

.seasons-comp {
  margin-top: -80px;
}
</style>
