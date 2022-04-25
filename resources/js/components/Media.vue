<template>
    <div class="container-media">
    <v-tabs
      dark
      grow>
      <v-tabs-slider></v-tabs-slider>
   <v-tab><p class="text-tab">Новости</p></v-tab>
    <v-tab><p class="text-tab">Статьи</p></v-tab>
   <v-tab><p class="text-tab">Видео</p></v-tab>
<v-tab-item class="tab-item">
<div class="list-cardNews">
<NewsCard
v-for='item in news'
:key='item.id'
:img='item.img'
:item=item
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
<Player v-for = "item in films" :key= "item.id" :src="item.trailer"/>
    </div>
</v-tab-item>
        </v-tabs>
<div class="line-media">
<hr class="line" />
</div>
    <div class="btn-bottom-media">
        <button class="btn">Показать ещё</button>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import NewsCard from '../components/NewsCard.vue'
import ArticlesCard from '../components/ArticlesCard.vue'
import Player from '../components/Player.vue'
export default {
  name: 'Media',
  components: { NewsCard, ArticlesCard,Player },
  methods: {
    ...mapActions(['fetchNews', 'fetchArticles'])
  },
  computed: {
    ...mapGetters(['getNews', 'getArticles','getFilms']),
    news () {
      return this.getNews
    },
    articles () {
      return this.getArticles
    },
    films () {
        return this.getFilms
    }
  },
  created () {
    this.fetchNews()
    this.fetchArticles()
  }
}
</script>

<style scoped>
.container-media{
    margin: 0px auto;
}
.list-cardNews{
    width: 1140px;
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(1fr);
    grid-auto-flow: dense;
    grid-gap: 0.5rem;
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
.btn-bottom-media{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin: 10px auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(1fr);
    grid-auto-flow: dense;
    grid-gap: 0.5rem;
}
.list-articles div:nth-child(1){
    grid-column: span 2;
}
.list-articles div:last-child{
 grid-column: span 2;
}
.list-video{
    width: 1140px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-flow: dense;
    grid-gap: 1rem;
}
.line-media{
    margin: 0 auto;
    width: 1140px;
}
</style>
