<template>
  <div>
    <div class="seasons">
      Сезоны:
      <v-btn-toggle group dark>
        <v-btn
          v-for="season in serialData.seasons"
          :key="season.number"
          color="#EB5804"
          variant="outlined"
          class="v-btn-style"
          @click="activate(season)"
        >
          {{ season.number }}
        </v-btn>
      </v-btn-toggle>
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
    }
  },
  computed: {
    getSeries () {
      /* const linklog = this.serialData.seasons[this.activeSeason - 1].series.map(s => s.link)
      console.log(linklog) */
      return this.serialData.seasons[this.activeSeason - 1].series
    }
  }
}
</script>

<style>
.seasons {
  font-size: 15pt;
  font-weight: bold;
}

.player-card {
  padding: 0 40px;
  margin: 20px 0;
  width: 300px;
  display: flex;
  flex-direction: column;
}

.series-list {
  margin: 50px 0;
}
</style>
