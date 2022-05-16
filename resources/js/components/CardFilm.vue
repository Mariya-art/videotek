<template>
  <figure class="card">
    <router-link
      class="router-link-card"
      :to="{ name: 'filmPage', params: { route: film.route } }"
    >
      <div class="poster">
        <img :src="getImgUrl(film.img)" alt="film" class="poster-img" />
        <p class="score" v-if="film.score">{{ film.score }}</p>
      </div>
      <p class="title">{{ film.title }}</p>
    </router-link>
  </figure>
</template>

<script>
export default {
  name: "CardFilm",
  props: {
    film: {
      type: Object,
    },
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img).default
    },
  },
};
</script>

<style>
.card {
  transform: scale(0.9);
  width: 250px;
  margin: 20px 55px;
}

.card:hover {
  transform: scale(0.95);
  cursor: pointer;
}

.poster {
  margin: 0 auto;
  position: relative;
}
.poster img{
  margin: 0 auto;
}

.poster-img {
  width: 250px;
  height: 370px;
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
.router-link-card{
  text-decoration: none;
  color: white;
}
</style>
