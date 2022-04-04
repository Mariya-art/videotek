<template>
  <div class="film-page">
    <div class="film-page-content" >
      <div class="film-data-block">
        <div class="poster">
          <img :src="filmData.img"/>
          <p v-if="filmData.age" class="age-boundary">{{ filmData.age }}+</p>
        </div>
        <div class="film-data">
          <h1>{{ filmData.title }}</h1>
          <p v-if="filmData.country">
            <strong>Страна:</strong> {{ filmData.country }}
          </p>
          <p v-if="filmData.year">
            <strong>Год выпуска:</strong> {{ filmData.year }}
          </p>
          <p v-if="filmData.genre">
            <strong>Жанр:</strong> {{ filmData.genre }}
          </p>
          <p v-if="filmData.director">
            <strong>Режиссёр:</strong> {{ filmData.director }}
          </p>
          <p v-if="filmData.actors">
            <strong>В главных ролях:</strong> {{ filmData.actors }}
          </p>
          <p v-if="filmData.description" class="film-page-description">
            {{ filmData.description }}
          </p>
        </div>
      </div>
      <div v-if="filmData.route === 'matrix'" class="player-text">Трейлер</div>
      <div v-if="filmData.route === 'matrix'" class="player">
        <iframe
          width="560"
          height="315"
          src="https://ok.ru/videoembed/1978843204301"
          frameborder="0"
          allow="autoplay"
          allowfullscreen
        ></iframe>
      </div>
      <!--
      <div class="player-text">Тест локального плеера</div>
      <div class="player"><player /></div>
      -->
    </div>
  </div>
</template>

<script>
// import Player from './Player.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'FilmPages',
  // components: { Player },
  data () {
    return {
      filmData: null
    }
  },
  computed: {
    ...mapGetters(['getFilmsList']),
    filmsList () {
      return this.getFilmsList
    }
  },
  created () {
    /* eslint-disable */
    const filmData = this.filmsList.find(filmData => filmData.route == this.$route.params.route);
    if (filmData) {
      this.filmData = filmData;
      document.title = 'VIDEOTEK - ' + filmData.title;
    }
  }
}
</script>

<style>
.film-data {
  margin: 15px 0;
}

.film-data h1 {
  font-size: 25pt;
  padding-bottom: 6pt;
}
.film-data strong { font-size: 14pt; }
.film-data p { font-size: 13pt; }
.film-page-description {
  margin-top: 12pt;
  text-align: justify;
}

.data-block {
  display: flex;
  align-items: flex-end;
}

.data-block p { margin-left: 5px; }

.poster {
  margin-right: 20px;
  position: relative;
}

.film-page-content {
  margin: 0 auto;
  padding: 10px 15px;
  width: 1140px;
}

.film-data-block {
  display: flex;
}

.age-boundary {
  font-weight: 900;
  color: white;
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: red;
  border-radius: 50%;
  padding: 8px 8px;
  font-size: 10pt;
}

.player-text {
  display: flex;
  justify-content: center;
  margin: 15px 5px;
  font-size: 18pt;
}

.player {
  display: flex;
  justify-content: center;
}
</style>
