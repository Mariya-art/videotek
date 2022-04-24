<template>
  <figure class="card">
    <router-link
      class="routerLink"
      :to="{ name: 'FilmPage', params: { route: film.route } }"
    >
      <div class="poster" @click="onClick">
        <img :src="getImgUrl(film.img)" alt="film" />
        <p class="score">{{ film.score }}</p>
      </div>
      <p class="title">{{ film.title }}</p>
    </router-link>
  </figure>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CardFilm",
  props: {
    film: {
      type: Object,
    },
  },
  methods: {
    ...mapActions(['fetchFilmToShow']),
    onClick () {
      this.fetchFilmToShow(this.film)
    },
    getImgUrl(img) {
      return require("../assets/" + img).default;
    }
  }
};
</script>

<style>
.card {
  transform: scale(0.9);
  margin: 20px 40px;
}

.card:hover {
  transform: scale(0.95);
  cursor: pointer;
}

.poster {
  margin: 0 auto;
  width: 250px;
  position: relative;
}
.poster img{
  margin: 0 auto;
}

.title {
  margin-bottom: 0;
  color: white;
  font-weight: 700;
  padding: 10px 0;
  font-size: 14pt;
  text-align: center;
}

.score {
  position: absolute;
  right: -20px;
  top: 0;
  background-color: #d66c08;
  width: 80px;
  height: 50px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px 0 10px 0;
  opacity: 0.7;
}
</style>
