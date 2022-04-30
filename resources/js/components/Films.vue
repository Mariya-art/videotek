 <template>
 <div class="container-list">
    <h1 @click="show = !show">Жанр<span v-if="genre">: {{genre.toLowerCase()}}</span><span v-else>ы</span></h1>
    <hr class="line" />
    <div class="filter" v-show="show">
      <button
        class="btn"
        @click="onGenreClick(item)"
        v-for="(item, index) in genres"
        :key="index"
        v-bind:value="item"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="films-list">
      <CardFilm
        v-for="film in genreFilms ? genreFilms : allFilms"
        :key="film.id"
        :film="film"
        :img="film.img"
      />
    </div>
    <hr class="line" />
    <div class="btn-bottom">
      <button class="btn">Показать ещё</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import CardFilm from "./CardFilm.vue"

export default {
  name: "Films",
  data: () => ({
      allFilms: null,
      genres: null,
      genreFilms: null,
      show: false,
      filmsOrSerials: '',
      genre: ''
  }),
  components: { CardFilm },
  methods: {
    onGenreClick(item) {
      this.genreFilms = this.allFilms.filter(
        film => film.genres.map(genre => genre.id === item.id).reduce((a, b) => a || b)
      )
      this.genre = item.title
    },
    refreshData() {
      if (this.filmsOrSerials === 'Films') {
        axios
          .get("/api/films")
          .then((result) => {
            this.allFilms = result.data.data
            window.sessionStorage.setItem('allFilms', JSON.stringify(this.allFilms))
          })
      } else if (this.filmsOrSerials === 'Serials') {
        axios
          .get("/api/serials")
          .then((result) => {
            this.allFilms = result.data.data
            window.sessionStorage.setItem('allFilms', JSON.stringify(this.allFilms))
          })
      }
    }
  },
  watch: {
    $route (to, from) {
      this.filmsOrSerials = this.$route.name
      window.sessionStorage.setItem('filmsOrSerials', JSON.stringify(this.filmsOrSerials))
      this.refreshData()
      this.genre = ''
      this.genreFilms = null
    }
  },
  created () {
    if (this.$route.name) {
      this.filmsOrSerials = this.$route.name
    } else {
      this.filmsOrSerials = JSON.parse(window.sessionStorage.getItem('filmsOrSerials'))
    }
    window.sessionStorage.setItem('filmsOrSerials', JSON.stringify(this.filmsOrSerials))
    this.refreshData()
    axios
      .get('/api/genres')
      .then((result) => {
          this.genres = result.data.data
          window.sessionStorage.setItem('genres', JSON.stringify(this.genres))
        })
   },
};
</script>

<style scoped>
.container-list {
  width: 1140px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}
.container-list h1:hover {
  color: #eb5804;
  cursor: pointer;
}
.films-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 10px;
}
.btn {
  margin: 1px;
  padding: 0;
  border: 0;
  color: #eb5804;
  transition: all 0.3s ease-in;
}
.btn:hover {
  background: #eb5804;
  color: black;
}
.filter {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
}
.btn-bottom {
  margin: 0 auto;
}
</style>
