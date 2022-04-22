<template>
  <div>
    <div class="seasons">
      Сезоны:
      <v-btn-toggle group dark>
        <v-btn
          v-for="item in [1, 2, 3, 4, 5]"
          :key="item"
          color="#EB5804"
          variant="outlined"
          class="v-btn-style"
        >
          {{ item }}
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
                  <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
                    <div class="player-card">
                       <Player :src="serialData.link" width="215" height="96" />
                        Серия {{ item }}
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
import Player from './Player.vue';

export default {
  name: 'SerialWatchLine',
  components: { Player },
  props: {
    serialData: {
      type: Object
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
  display: flex;
  flex-direction: column;
}

.series-list {
  margin: 50px 0;
}
</style>
