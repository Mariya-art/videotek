<template>
  <v-carousel cycle :show-arrows="false" height="60vh">
    <v-carousel-item
        v-for="(item, i) in carouselList"
        :key="i"
    ><img :src="item.src" class="carouselImg">
    </v-carousel-item>
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
  width: 100%;
  height: 100%;
  object-fit:contain;
}

.carousel {
  margin: 0 auto;
}
</style>
