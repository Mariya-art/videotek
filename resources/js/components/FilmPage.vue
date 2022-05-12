<template>
  <div class="film-page">
    <div class="film-page-content">
      <div class="film-data-block">
        <div class="left-column" v-if="filmData">
          <img :src="getImgUrl(filmData.img)" alt="film data" />
          <button class="btn">В избранное</button>
          <button
            v-if="filmData.trailer && filmData.type_id !== 3"
            class="btn"
            @click="isTrailer = !isTrailer"
          >
            Трейлер
            <span v-show="isTrailer" class="btn-flag">▾</span>
          </button>
        </div>
        <div class="film-data">
          <h1>{{ filmData.title }}</h1>
          <div class="score-block" v-if="filmData.score">
            Рейтинг: <strong>{{ filmData.score }}</strong>
          </div>
          <hr class="line" />
          <p v-if="filmData.age" class="age-boundary">{{ filmData.age }}+</p>
          <div v-if="filmData.description" v-html="filmData.description" class="film-page-description"></div>
          <h1 v-if="isVideo">Об этом видео</h1>
          <h1 v-if="isSerial">О сериале</h1>
          <h1 v-if="isFilm">О фильме</h1>
          <hr class="line" />
          <p v-if="filmData.country">
            <em class="parameter">Страна:</em> {{ filmData.country }}
          </p>
          <p v-if="filmData.year">
            <em class="parameter">Год выпуска:</em> {{ filmData.year }}
          </p>
          <p v-if="filmData.genres && filmData.genres.length > 0">
            <em class="parameter">Жанр:</em> {{ filmCategories }}
          </p>
          <div v-if="filmData.directors && filmData.directors.length > 0">
            <em class="parameter">Режиссёр:</em>
            <ul class="inline-ul">
              <li
                v-for="director in filmData.directors"
                :key="director.id"
                class="liName"
              >
                <router-link
                  class="routerLink"
                  :to="'/person/' + director.route"
                >{{ director.name }}</router-link>
              </li>
            </ul>
          </div>
          <div v-if="filmData.actors && filmData.actors.length > 0">
            <em class="parameter">В главных ролях:</em>
            <ul class="inline-ul">
              <li
                v-for="actor in filmData.actors"
                :key="actor.id"
                class="liName"
              >
                <router-link
                  class="routerLink"
                  :to="'/person/' + actor.route"
                  >{{ actor.name }}</router-link>
              </li>
            </ul>
          </div>
          <hr class="line" />
        </div>
      </div>
      <div>
        <SerialWatchLine v-if="isSerial" :serialData="filmData" />
        <FilmPlayers v-else
          :filmData="filmData"
          :isTrailerVisible="isTrailer"
        />
      </div>
      <h1 v-if="isVideo">Оцените видео</h1>
      <h1 v-if="isSerial">Оцените сериал</h1>
      <h1 v-if="isFilm">Оцените фильм</h1>
      <hr class="line" />
      <div class="btn-toggle">
        <v-btn-toggle group dark>
          <v-btn
            v-for="item in score"
            :key="item"
            color="#EB5804"
            variant="outlined"
            class="v-btn-style"
            :disabled="isVoteDisabled"
            @click="vote(item)"
          >
            {{ item }}
          </v-btn>
        </v-btn-toggle>
      </div>
      <Comment :filmId="filmData.id" />
    </div>
  </div>
</template>

<script>
import Comment from './Comment.vue'
import SerialWatchLine from './SerialWatchLine.vue'
import FilmPlayers from './FilmPlayers.vue'

export default {
  name: "FilmPage",
  components: { Comment, SerialWatchLine, FilmPlayers},
  data: () => ({
      filmData: null,
      filmDirectors: [],
      filmCategories: [],
      isTrailer: false,
      isVoteDisabled: false,
      isSerial: false,
      isFilm: false,
      isVideo: false
  }),
  methods: {
    vote (item) {
      const data = { vote: item, id: this.filmData.id }
      localStorage.setItem(this.filmData.id, JSON.stringify(data))
      this.isVoteDisabled = true
    },
    searchFilmData() {
      const filmRoute = this.$route.params.route
      const ratingFilms = JSON.parse(window.sessionStorage.getItem('ratingFilms'))
      if (ratingFilms) {
        this.filmData = ratingFilms.find( (item) => item.route === filmRoute )
      }
      if (! this.filmData) {
        const newVideo = JSON.parse(window.sessionStorage.getItem('newVideo'))
        if (newVideo) {
          this.filmData = newVideo.find( (item) => item.route === filmRoute )
        }
      }
      if (! this.filmData) {
        const video = JSON.parse(window.sessionStorage.getItem('video'))
        if (video) {
          this.filmData = video.find( (item) => item.route === filmRoute )
        }
      }
    },
    refreshFilmData() {
      axios
        .get('/api/main') // Здесь должен быть запрос именно на всё, либо на конкретный фильм
        .then((result) => {
          window.sessionStorage.setItem('video', JSON.stringify(result.data.data))
          window.location.reload()
        })
    },
    getImgUrl(img) {
      return require("../assets/" + img).default;
    },
  },
  computed: {
    score: () => {
      const array = [];
      for (let i = 1; i < 11; i++) array.push(i);
      return array;
    }
  },
  created() {
    this.searchFilmData()
    if (! this.filmData) {
      this.refreshFilmData()
      this.searchFilmData()
    }
    if (this.filmData) {
      window.sessionStorage.setItem('filmData', JSON.stringify(this.filmData))
    } else {
      const filmCandidate = JSON.parse(window.sessionStorage.getItem('filmData'))
      if (this.$route.params.route === filmCandidate.route) {
        this.filmData = filmCandidate
      } else {
        this.$router.push('/404')
      }
    }
    if (this.filmData) {
      this.filmCategories = this.filmData.genres.map((item) => item.title.toLowerCase()).join(', ')
      document.title = 'VIDEOTEK - ' + this.filmData.title;
      this.isSerial = Boolean(+this.filmData.type_id === 2)
      this.isFilm = Boolean(+this.filmData.type_id === 1)
      this.isVideo = Boolean(+this.filmData.type_id === 3)

      const voteData = JSON.parse(localStorage.getItem(this.filmData.id) || '[]')
      this.isVoteDisabled = Boolean(voteData.id === this.filmData.id)
    }
  }
};
</script>

<style>
.liName {
  list-style-type: none;
  display: inline;
  margin-top: 10px;
  margin-bottom: 10px;
}
.liName:not(:last-of-type)::after {
  content: ", ";
}

.inline-ul {
  display: inline;
}
.inline-ul::before {
  content: " ";
}

.line {
  width: 100%;
  height: 3px;
  color: #eb5804;
  background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
  margin-bottom: 35px;
  border: none;
}

.listButton {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.film-data {
  margin: 15px 0;
  position: relative;
}

.film-data h1 {
  max-width: 60%;
  font-size: 25pt;
  padding-bottom: 6pt;
}
.film-data .parameter {
  font-size: 15pt;
  font-style: normal;
  font-weight: bold;
}
.film-data p {
  font-size: 12pt;
  line-height: 1.5;
}
.film-page-description {
  margin-top: 12pt;
  margin-bottom: 12pt;
  text-align: justify;
  line-height: 1.5;
}

.data-block {
  display: flex;
  align-items: flex-end;
}

.data-block p {
  margin-left: 5px;
}

.left-column {
  margin-top: 30px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
}

.btn {
  border: 1px solid #eb5804;
  padding: 5px 30px;
  margin: 20px 30px 10px;
  color: #eb5804;
  position: relative;
  transition: all 0.3s ease-in;
}
.btn:hover {
  background: #eb5804;
  color: black;
}

.film-page-content {
  margin: 20px auto;
  padding: 10px 15px;
  width: 1140px;
}

.film-data-block {
  display: flex;
}

.age-boundary {
  width: 50px;
  text-align: center;
  font-weight: 900;
  color: white;
  background-color: #eb5804;
  padding: 8px 8px;
  font-size: 10pt;
  border-radius: 2px;
  margin-bottom: 10px;
}

.routerLink {
  text-decoration: none;
  color: white;
}
.routerLink:hover {
  color: #eb5804;
}

.score-block {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 18pt;
}

.btn-toggle {
  display: flex;
  justify-content: center;
}

.btn-flag {
  position: absolute;
  right: 10px;
}
</style>
