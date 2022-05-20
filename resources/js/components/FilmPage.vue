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
          <button class="backbtn" @click="$router.go(-1)">➔</button>
        </div>
        <div class="film-data">
          <div class="underlined position">
            <h1>{{ filmData.title }}</h1>
            <div class="score-block" v-if="filmData.score">
              Рейтинг: <strong>{{ filmData.score }}</strong>
            </div>
          </div>
          <p v-if="filmData.age" class="age-boundary">{{ filmData.age }}+</p>
          <div v-if="filmData.description" v-html="filmData.description" class="film-page-description"></div>
          <h2 class="underlined">
            <span v-if="isFilm">О фильме</span>
            <span v-if="isSerial">О сериале</span>
            <span v-if="isVideo">Об этом видео</span>
          </h2>
          <p v-if="filmData.country">
            <em class="parameter">Страна:</em> {{ filmData.country }}
          </p>
          <p v-if="filmData.year">
            <em class="parameter">Год выпуска:</em> {{ filmData.year }}
          </p>
          <p v-if="filmData.genres && filmData.genres.length > 0">
            <em class="parameter">Жанр<span v-if="filmData.genres.length > 1">ы</span>:</em> {{ filmCategories }}
          </p>
          <div v-if="filmData.directors && filmData.directors.length > 0" class="actors-paragraph">
            <em class="param-paragraph parameter">Режиссёр<span v-if="filmData.directors.length > 1">ы</span>:</em>
            <ul class="directors-list inline-ul">
              <li
                v-for="director in filmData.directors"
                :key="director.id"
                class="inline-li"
              >
                <router-link
                  class="routerLink"
                  :to="'/person/' + director.route"
                >{{ director.name }}</router-link>
              </li>
            </ul>
          </div>
          <div v-if="filmData.actors && filmData.actors.length > 0" class="actors-paragraph">
            <p class="param-paragraph parameter">В главных ролях:</p>
            <ul class="actors-list inline-ul">
              <li
                v-for="actor in filmData.actors"
                :key="actor.id"
                class="inline-li"
              >
                <router-link
                  class="routerLink"
                  :to="'/person/' + actor.route"
                  >{{ actor.name }}</router-link>
              </li>
            </ul>
          </div>
          <FilmPlayers v-if="isFilm || isVideo"
            :filmData="filmData"
            :isTrailerVisible="isTrailer"
          />
        </div>
      </div>
      <SerialWatchLine v-if="isSerial" :serialData="filmData" />
      <div class="film-page-vote">
        <div class="vote-text">
          <span v-if="isVideo">Оцените видео: </span>
          <span v-if="isSerial">Оцените сериал: </span>
          <span v-if="isFilm">Оцените фильм: </span>
        </div>
        <span>
          <button
            v-for="item in score"
            :key="item"
            :disabled="isVoteDisabled"
            :class="getVBclass(item)"
            @click="vote(item)"
          >{{ item }}</button>
        </span>
      </div>
      <h2 class="underlined">Отзывы</h2>
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
      film: null,
      filmDirectors: [],
      filmCategories: [],
      isTrailer: false,
      isVoteDisabled: false,
      isSerial: false,
      isFilm: false,
      isVideo: false,
      voted: null
  }),
  methods: {
    pushVote(voteStruct) {
      let votedArray = JSON.parse(window.localStorage.getItem('votedfor'))
      console.log('votedArray: ', votedArray)
      if (!votedArray) votedArray = []
      votedArray.push(voteStruct)
      localStorage.setItem('votedfor', JSON.stringify(votedArray))
    },
    vote (item) {
      const data = { rating: item, film_id: this.filmData.id }
      this.voted = +item
      this.pushVote(data)
      this.isVoteDisabled = true
      axios
        .post('/api/ratings', data)
        .then(response => {
          axios
            .get('/api/filmRating/' + this.filmData.id)
            .then((result) => {
              this.filmData.score = (+result.data.data.score).toPrecision(2)
              window.sessionStorage.setItem('filmData', JSON.stringify(this.filmData))
              axios
                .get('/api/main/rating')
                .then(result => {
                  const ratingFilms = result.data.data
                  if (ratingFilms) {
                    window.sessionStorage.setItem('ratingFilms', JSON.stringify(ratingFilms))
                  }
                })
              axios
                .get('/api/main/new')
                .then(result => {
                  const newVideo = result.data.data
                  if (newVideo) {
                    window.sessionStorage.setItem('newVideo', JSON.stringify(newVideo))
                  }
                })
              axios
                .get('/api/films')
                .then(result => {
                  const allFilms = result.data.data
                  if (allFilms) {
                    window.sessionStorage.setItem('allFilms', JSON.stringify(allFilms))
                  }
                })
              axios
                .get('/api/main')
                .then(result => {
                  const video = result.data.data
                  if (video) {
                    window.sessionStorage.setItem('video', JSON.stringify(video))
                  }
                })
            })
        })
    },
    getVBclass(item) {
      if (this.voted === +item) return 'vote-btn vote-dis-btn'
      return 'vote-btn'
    },
    searchFilmData() {
      const filmRoute = this.$route.params.route
      const ratingFilms = JSON.parse(window.sessionStorage.getItem('ratingFilms'))
      if (ratingFilms) {
        this.film = ratingFilms.find( (item) => item.route === filmRoute )
      }
      if (! this.film) {
        const newVideo = JSON.parse(window.sessionStorage.getItem('newVideo'))
        if (newVideo) {
          this.film = newVideo.find( (item) => item.route === filmRoute )
        }
      }
      if (! this.film) {
        const allFilms = JSON.parse(window.sessionStorage.getItem('allFilms'))
        if (allFilms) {
          this.film = allFilms.find( (item) => item.route === filmRoute )
        }
      }
      if (! this.film) {
        const video = JSON.parse(window.sessionStorage.getItem('video'))
        if (video) {
          this.film = video.find( (item) => item.route === filmRoute )
        }
      }
    },
    refreshFilmData() {
      axios
        .get('/api/main')
        .then((result) => {
          const video = result.data.data
          window.sessionStorage.setItem('video', JSON.stringify(video))
          this.film = video.find( (item) => item.route === this.$route.params.route )
          this.finalPrepare()
        })
    },
    getImgUrl(img) {
      return require("../assets/" + img).default;
    },
    restoreVoteStruct() {
      const voteData = JSON.parse(localStorage.getItem('votedfor'))
      if (voteData) {
        const thisVote = voteData.find(elem => elem.film_id === this.film.id)
        if (thisVote) {
          this.voted = +thisVote.rating
          this.isVoteDisabled = true
        }
      }
    },
    finalPrepare() {
      this.filmCategories = this.film.genres.map((item) => item.title.toLowerCase()).join(', ')
      document.title = 'VIDEOTEK - ' + this.film.title
      this.isSerial = Boolean(+this.film.type_id === 2)
      this.isFilm = Boolean(+this.film.type_id === 1)
      this.isVideo = Boolean(+this.film.type_id === 3)
      this.restoreVoteStruct()
      console.log(this.isVoteDisabled)
    }
  },
  computed: {
    score: () => {
      const array = []
      for (let i = 1; i < 11; i++) array.push(i)
      return array
    },
    filmData() {
      return this.film
    }
  },
  created() {
    this.searchFilmData()
    if (! this.film) {
      this.refreshFilmData()
      this.searchFilmData()
    }
    if (this.film) {
      window.sessionStorage.setItem('filmData', JSON.stringify(this.film))
    } else {
      const filmCandidate = JSON.parse(window.sessionStorage.getItem('filmData'))
      if (this.$route.params.route === filmCandidate.route) {
        this.film = filmCandidate
      } else {
        this.$router.push('/404')
      }
    }
    if (this.film) {
      this.finalPrepare()
    }
  }
};
</script>

<style>
.inline-li {
  list-style-type: none;
  display: inline;
  margin-top: 10px;
  margin-bottom: 10px;
}
.inline-li:not(:last-of-type)::after {
  content: ", ";
}

.inline-ul {
  display: inline;
  line-height: 150%;
}
.inline-ul::before {
  content: " ";
}

.underlined {
    border-bottom: 4px solid transparent;
    border-image: linear-gradient(to right, #eb5804 0%, black 90%);
    border-image-slice: 1;
    padding-bottom: 6pt;
    margin-bottom: 6pt;
}

.position {
  position: relative;
}

.listButton {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.film-data {
  margin: 15px 0;
}

.film-page h1 {
  max-width: 80%;
  font-size: 25pt;
}
.film-page h2 {
  font-size: 25pt;
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
  white-space: nowrap;
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

.backbtn {
  font-size: 28pt;
  color: #eb5804;
  border: 2px solid #eb5804;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 30px auto;
  transform: rotate(180deg);
  transition: all 0.3s ease-in;
}
.backbtn:hover {
  color: black;
  background-color: #eb5804;
}

.film-page-vote {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.vote-text {
  font-size: 15pt;
  padding-right: 30px;
}

.vote-btn {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border: 1px solid #eb5804;
}
.vote-btn:hover:not(:disabled) {
  background-color: #eb5804;
  color: black;
}
.vote-btn:disabled {
  opacity: .5;
}

.vote-dis-btn {
  background-color: orangered;
  color: black;
}

.actors-paragraph {
  display: flex;
  align-items: flex-start;
}

.param-paragraph {
  white-space: nowrap;
  padding-right: 10px;
}

.actors-list {
  margin-top: 5px;
}

.directors-list {
  margin-top: 2px;
}
</style>
