 <template>
 <div class="container-list">
    <h1 @click="show = !show">Жанр<span v-if="genre">: {{genre.toLowerCase()}}</span><span v-else>ы</span></h1>
    <hr class="line" />
    <div class="filter" v-show="show">
      <button
        class="btn"
        @click="handlerValue(item)"
        v-for="(item, index) in genres"
        :key="index"
        v-bind:value="item"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="films-list">
      <CardFilm
        v-for="film in genreFilms ? genreFilms : filmsList"
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
import axios from "axios";
import CardFilm from "./CardFilm.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Films",
  data() {
    return {
      genreFilms: null,
      show: false,
      page: '',
      genre: '',
    };
  },
  components: { CardFilm },
  methods: {
    ...mapActions(["fetchFilms", 'fetchSerials', "fetchGenres"]),
    handlerValue(item) {
      if (this.$route.name == 'Films'){
        axios.get("/api/films/" + item.id).then((result) => {
        this.genreFilms = result.data.data;
        })
      }
      if (this.$route.name == 'Serials'){
        axios.get("/api/serials/" + item.id).then((result) => {
          this.genreFilms = result.data.data;
      })
      }
      this.genre = item.title;
    },
    clearData() {
        this.genreFilms = null
        this.show = false
        this.genre= ''
    },
    updateStore () {
      if (this.$route.name == 'Films' && this.page != 'Films'){
        this.page = 'Films'
        this.clearData()
        this.fetchFilms()
      }
      if (this.$route.name == 'Serials' && this.page != 'Serials'){
        this.page = 'Serials'
        this.clearData()
        this.fetchSerials()
      }
    }
  },
  computed: {
    ...mapGetters(["getFilms", "getGenres"]),
    filmsList() {
      return this.getFilms;
    },
    genres() {
      // Для запуска хука updated, без этого работает не каректно
      if (this.$route.name == 'Serials') {
        return this.getGenres;
      } else {
        return this.getGenres;
      }
    },
  },
  created() {
    this.updateStore ()
    this.fetchGenres();
   },
  updated () {
    this.updateStore ()
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
}
.btn-bottom {
  margin: 0 auto;
}
</style>
