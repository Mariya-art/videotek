<template>
  <div class="film-list-container">
    <h1 class="header">{{ header }}</h1>
    <div class="line-box">
      <hr class="line"/>
    </div>
    <div class="film-list">
      <v-sheet>
        <v-slide-group show-arrows dark class="slider-style">
            <v-card>
              <v-row
                class="slider-style"
                align="center"
                justify="center"
              >
                <CardFilm
                  v-for="film in filmsList"
                  :key="film.id"
                  :film="film"
                  :img="film.img"
                />
              </v-row>
            </v-card>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
import CardFilm from './CardFilm.vue'

export default {
  name: 'ListFilms',
  props: ['header', 'filmsList'],
  components: { CardFilm }
}
</script>

<style>
:root {
  --color-D: #EB5804;
  --color-B: #d66c08;
}

.film-list-container {
  width: 1140px;
  margin: 0 auto;
}

.header {
  width: 1140px;
  margin: 40px auto 10px;
  padding-bottom: 6pt;
  font-size: 25pt;
}

.line {
  height: 3px;
  color: var(--color-B);
  background: linear-gradient(90deg, var(--color-D) 0%, black 90%);
  margin-bottom: 35px;
  border:none;
}

.line-box {
  width: 1140px;
  margin: 0 auto;
}

.film-list {
  margin: 50px auto;
}

.slider-sheet-style {
  max-width: 1140px;
  color: black;
}

.slider-style {
  background-color: black;
}

.slider-style .card:first-of-type {
  margin-left: 10px
}
.slider-style .card:last-of-type {
  margin-right: 30px
}
</style>
