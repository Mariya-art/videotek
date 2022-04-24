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

export default {
  name: 'MainPage',
  components: {
    FilmCarousel,
    ListFilms
  },
  data: () => ({
    ratingItems: [],
    newItems: []
  }),
  created () {
      axios
        .get('/api/main/rating')
        .then( result => { this.ratingItems = result.data.data })
      axios
        .get('/api/main/new')
        .then( result => { this.newItems = result.data.data })
  }
}
</script>
