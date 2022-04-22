<template>
  <div class="main-page">
    <FilmCarousel />
    <ListFilms header="По рейтингу" :filmsList="ratingItems" />
    <ListFilms header="Новые" :filmsList="newItems" />
  </div>
</template>

<script>
import FilmCarousel from './FilmCarousel.vue'
import ListFilms from './ListFilms.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainPage',
  components: {
    FilmCarousel,
    ListFilms
  },
  computed: {
    ...mapGetters(['getNewItems', 'getRatingItems']),
    ratingItems () {
      return this.getRatingItems
    },
    newItems () {
      return this.getNewItems
    }
  }
}
</script>
