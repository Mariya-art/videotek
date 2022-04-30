<template>
  <div class="main-page">
    <FilmCarousel />
    <ListFilms header="По рейтингу" :filmsList="ratingFilms" />
    <ListFilms header="Новые" :filmsList="newVideo" />
  </div>
</template>

<script>
import axios from 'axios'
import FilmCarousel from './FilmCarousel.vue'
import ListFilms from './ListFilms.vue'

export default {
  name: 'MainPage',
  components: {
    FilmCarousel,
    ListFilms
  },
  data: () => ({
    newVideo: null,
    ratingFilms: null
  }),
  methods: {
    flatenPersona(videoDataArray) {
      const persona = []
      videoDataArray.forEach(video => {
          video.directors.forEach(director => persona.push(director))
          video.actors.forEach(actor => persona.push(actor))
      })
      return persona
    },
    addPersonaToStorage(persona) {
      window.sessionStorage.setItem('persona',
        JSON.stringify([
          ...JSON.parse(window.sessionStorage.getItem('persona')),
          ...persona
        ])
      )
    }
  },
  created () {
    window.sessionStorage.setItem('persona', JSON.stringify([]))
    axios
      .get('/api/main/new')
      .then( result => {
        this.newVideo = result.data.data
        if (this.newVideo) {
          window.sessionStorage.setItem('newVideo', JSON.stringify(this.newVideo))
          this.addPersonaToStorage(this.flatenPersona(this.newVideo))
        }
      })
    axios
      .get('/api/main/rating')
      .then( result => {
        this.ratingFilms = result.data.data
        if (this.ratingFilms) {
          window.sessionStorage.setItem('ratingFilms', JSON.stringify(this.ratingFilms))
          this.addPersonaToStorage(this.flatenPersona(this.ratingFilms))
        }
      })
  }
}
</script>
