<template>
  <div class="carousel">
    <v-carousel cycle :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in carouselList"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>
    <div class="film-list">
      <CardFilm
        class="films"
        v-for="film in filmsList"
        :key="film.id"
        :film="film"
        :img="film.img"
      />
    </div>
  </div>
</template>

<script>
import CardFilm from "./CardFilm.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListFilms",
  components: { CardFilm },
  data() {
    return {
      filmsList: [],
    };
  },
  async mounted() {
    let result = await axios.get('/films');
    this.filmsList = result.data;
    //axios.get('/films').then( result => this.filmsList = result.data);
  },
  methods: {
    ...mapActions(["fetchCarousel"]),
  },
  computed: {
    ...mapGetters(["getCarouselList"]),
    carouselList() {
      return this.getCarouselList;
    },
  },
  created() {
    this.fetchCarousel();
  },
};
</script>

<style lang="scss" scoped>
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

.film-list {
  width: 1140px;
  margin: 200px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 270px);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15%;
  grid-row-gap: 40px;
}
</style>
