<template>
  <div class="container-list">
    <h1 v-if="this.filmsOrSerials === 'Films'">Фильмы от VIDEOTEK</h1>
     <h1 v-else>Сериалы от VIDEOTEK</h1>
      <hr class="line"/>
    <button @click="show = !show" class="btn-genre">{{ this.genre }}<span class="flag">▾</span></button>
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
    <hr class="line" v-if="showPagination"/>
    <div v-if="showPagination">
      <v-pagination
        v-model="page"
        :length="paginationLength"
        dark
        color="#eb5804"
        :total-visible="7"
      ></v-pagination>
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
    genre: 'Жанры',
    page: 1,
    paginationLength: 1,
    showPagination: false,
    genreId: null,
  }),
  components: {CardFilm},
  methods: {
    onGenreClick(item) {
      if (item.id === 0) {
        this.genreFilms = null
        this.genre = 'Жанры'
        this.page = 1
        this.refreshData()
        axios
            .get('/api/filmsPageCount')
            .then(result => {
                this.paginationLength = +result.data
            })
      } else {
          this.genreId = item.id
          this.genre = item.title
          this.page = 1
          this.refreshData()
      }
    },
    updateAllFilms(result) {
      this.allFilms = result.data.data
      window.sessionStorage.setItem('allFilms', JSON.stringify(this.allFilms))
    },
    updateGenres(result) {
      this.genres = result.data.data
      this.genres.push({
        id: 0,
        title: 'Все',
        route: ''
      })
      window.sessionStorage.setItem('genres', JSON.stringify(this.genres))
    },
    refreshData() {
      this.showPagination = this.paginationLength > 0 && this.filmsOrSerials === 'Films'
      if (this.filmsOrSerials === 'Films') {
        axios
          .get('/api/filmsGenres')
          .then((result) => {
            this.updateGenres(result)
          })
        if(this.genre === 'Жанры'){
          axios
          .get('/api/films?page=' + this.page)
          .then((result) => {
            this.updateAllFilms(result)
          })
        } else {
          axios
        .get('api/filmsPageCount/' + this.genreId)
        .then(result => {
          this.paginationLength = +result.data
        })
         axios
        .get('api/films/genres/' + this.genreId + '?page=' + this.page)
        .then((result) => {
          this.genreFilms = result.data.data
        })
        }
      } else if (this.filmsOrSerials === 'Serials') {
        axios
          .get('/api/serialsGenres')
          .then((result) => {
            this.updateGenres(result)
          })
        axios
          .get('/api/serials')
          .then((result) => {
            this.updateAllFilms(result)
          })
          if(this.genreId != null){
        axios
        .get('api/serials/genres/' + this.genreId )
        .then((result) => {
          this.genreFilms = result.data.data
        })
      }
      }
    }
  },
  watch: {
    $route(to, from) {
      this.filmsOrSerials = this.$route.name
      window.sessionStorage.setItem('filmsOrSerials', JSON.stringify(this.filmsOrSerials))
      this.genre = 'Жанры'
      this.genreId = null
      this.refreshData()
      this.show = false
      this.genreFilms = null
    },
    page: function() {
      this.refreshData()
      window.scrollTo(0,0)
    }
  },
  created() {
    if (this.$route.name) {
      this.filmsOrSerials = this.$route.name
    } else {
      this.filmsOrSerials = JSON.parse(window.sessionStorage.getItem('filmsOrSerials'))
    }
    window.sessionStorage.setItem('filmsOrSerials', JSON.stringify(this.filmsOrSerials))
    this.refreshData()
    axios
      .get('/api/filmsPageCount')
      .then(result => {
        this.paginationLength = +result.data
        window.sessionStorage.setItem('paginationLength', JSON.stringify(this.paginationLength))
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

.films-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 10px;
}
.container-list h1 {
  font-size: 24pt;
  padding-bottom: 5px;
}
.btn {
  margin: 3px 10px;
  padding: 0;
  border: 1px solid #2c1101;
  border-radius: 10px 0 10px 0;
  color: #eb5804;
  transition: all 0.3s ease-in;
}

.btn:hover {
  background: #eb5804;
  color: black;
}
.btn-genre{
  border: 1px solid #eb5804;
  padding: 2px 4px;
  width: 15%;
  margin-bottom: 10px;
  color: #eb5804;
  transition: all 0.3s ease-in;
}
.btn-genre:hover {
  background: #eb5804;
  color: black;
}
.filter {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
}

.btn-bottom {
  margin: 0 auto;
}
.flag{
  margin-left:10px;
}
</style>
