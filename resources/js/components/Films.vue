<template>
    <div class="container-list">
        <h1 @click="show=!show">Жанры кино</h1>
          <hr class="line" />
        <div class="filter" v-show="show">
            <button class="btn" @click="handlerValue(item)" v-for="(item,index) in genres"
              :key="index" v-bind:value='item'>{{item.title}}
            </button>
        </div>
        <div class="films-list">
          <CardFilm
            v-for="film in (genreFilms? genreFilms: filmsList)"
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
import CardFilm from './CardFilm.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Films',
  data () {
    return {
      genreFilms: null,
      show: false
    }
  },
  components: { CardFilm },
  methods: {
    ...mapActions([
      'fetchFilms', 
      'fetchGenres',
    ]),
    handlerValue (item) {
      axios
        .get("/api/films/" + item.id)
        .then((result) => {
          this.genreFilms = result.data.data;
        });
    }
  },
  computed: {
    ...mapGetters([
      'getFilms', 
      'getGenres',
    ]),
    filmsList () {
      return this.getFilms
    },
    genres () {
      return this.getGenres
    }
  },
  created () {
    this.fetchFilms()
    this.fetchGenres()
  }
};
</script>

<style scoped>
.container-list{
  width: 1140px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}
.container-list h1:hover{
  color:#EB5804;
  cursor: pointer;
}
.films-list{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5%;
  grid-row-gap: 10px;
}
.btn {
  border: 1px solid #EB5804;
  padding: 5px 30px;
  margin: 20px 30px;
  color: #EB5804;
}

.btn:hover {
  border: none;
  background: #EB5804;
  color: black;
}
.filter{
  display: grid;
  grid-template-columns: repeat(4,1fr);
}
.btn-bottom{
  margin: 0 auto;
}

</style>
