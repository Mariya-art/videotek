<template>
  <v-carousel cycle :show-arrows="false">
    <v-carousel-item
        v-for="(item, i) in carouselList"
        :key="i"
        :src="item.src"
        cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FilmCarousel',
  methods: {
    ...mapActions(['fetchCarousel'])
  },
  computed: {
    ...mapGetters(['getCarouselList']),
    carouselList () {
      return this.getCarouselList
    }
  },
  created () {
    this.fetchCarousel()
  }
}
</script>

<style>
.carouselImg {
  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 600px;
  margin-bottom: 10vh;
}

.carousel {
  margin: 0 auto;
}
</style>
