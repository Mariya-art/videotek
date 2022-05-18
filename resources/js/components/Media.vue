<template>
  <div class="container-media">
    <v-tabs
      dark
      grow
      v-model = "tab"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab><p class="text-tab">Новости</p></v-tab>
      <v-tab><p class="text-tab">Статьи</p></v-tab>
      <v-tab><p class="text-tab">Видео</p></v-tab>
      <v-tab-item class="tab-item">
        <div class="list-cardNews">
          <NewsCard
            v-for="item in news"
            :key="item.id"
            :img="item.img"
            :item="item"
          />
        </div>
      </v-tab-item>
      <v-tab-item class="tab-item">
        <div class="list-articles">
          <ArticlesCard
            v-for="item in articles"
            :key="item.id"
            :img="item.img"
            :item="item"
          />
        </div>
      </v-tab-item>
      <v-tab-item class="tab-item">
        <div class="list-video">
          <FilmCardMedia v-for="film in filmsOfType"
            :key="film.id"
            :film="film"
            :img="film.img"
          />
        </div>
      </v-tab-item>
    </v-tabs>
    <div class="line-media">
      <hr class="line" />
    </div>
  </div>
</template>

<script>
import NewsCard from '../components/NewsCard.vue'
import ArticlesCard from '../components/ArticlesCard.vue'
import FilmCardMedia from '../components/FilmCardMedia.vue'

export default {
  name: 'Media',
  components: {
    NewsCard,
    ArticlesCard,
    FilmCardMedia
  },
  data: () => ({
    filmsOfType: [],
    news: [],
    articles: [],
    tab: 0,
    tabActive: 0
  }),
  methods: {
      setNewsOrArticles(payload) {
        window.sessionStorage.setItem('newsOrArticles', JSON.stringify(payload))
      },
      getNewsOrArticles() {
        return JSON.parse(window.sessionStorage.getItem('newsOrArticles'))
      }
  },
  created () {
    this.tab = +window.sessionStorage.getItem('MediaActiveTab')
    axios
      .get('api/news')
      .then(result => {
        this.news = result.data.data
        window.sessionStorage.setItem('news', JSON.stringify(this.news))
      })
    axios
      .get('api/articles')
      .then(result => {
        this.articles = result.data.data
        window.sessionStorage.setItem('articles', JSON.stringify(this.articles))
      })
    axios
      .get('api/videos')
      .then(result => {
        this.filmsOfType = result.data.data
        window.sessionStorage.setItem('video', JSON.stringify(this.filmsOfType))
      })
  },
  beforeDestroy() {
    window.sessionStorage.setItem('MediaActiveTab', this.tab)
  }
}
</script>

<style scoped>
.container-media{
    margin: 0px auto;
}
.list-cardNews{
    width: 1140px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(1fr);
    grid-auto-flow: dense;
    grid-gap:30px;
}
.list-cardNews div:first-child{
 grid-column: span 2;
}
.list-cardNews div:nth-child(5n+1){
 grid-column: span 2;
}
.list-cardNews div:last-child{
 grid-column: span 2;
}
.text-tab{
    font-size: 13pt;
}
.text-tab:hover{
    color:#EB5804;
    cursor: pointer;
}
.v-tabs-slider{
    color:#EB5804
}
.tab-item{
    background-color: black;
}
.list-articles{
    width: 1140px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(1fr);
    grid-auto-flow: dense;
    grid-gap:30px;
}
.list-articles div:nth-child(1){
    grid-column: span 2;
}
.list-articles div:last-child{
 grid-column: span 2;
}
.list-video{
    width: 1140px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-flow: dense;
    grid-gap:10px;
}
.line-media{
    margin: 0 auto;
    width: 1140px;
}
</style>
