<template>
<div class="list-block">
  <h1 class="title-text">{{listNewsArticles.title}}</h1>
  <p class="datetime">{{this.datetime}}</p>
  <hr class="line-block" />
<div class="block-img">
  <img class="fon-img" :src="getImgUrl(listNewsArticles.img)"/>
</div>
<div v-if="listNewsArticles.text" v-html="listNewsArticles.text" :class="$style.text">
  <p>{{listNewsArticles.text}}</p>
</div>
<hr class="line-block" />
</div>
</template>

<script>
import { mapGetters} from 'vuex'
export default({
    name: 'NewsArticlesPage',
    data:()=>({
        listNewsArticles:null,
        datetime:null
    }),
    methods: {
      getImgUrl(img) {
        return require("../assets/media/" + img).default
      },
      async getNews() {
        return await this.news
      }
    },
    computed: {
        ...mapGetters(['getNews','getArticles']),
      news () {
        return this.getNews
      },
      articles() {
        return this.getArticles
      }
    },
    created () {
      let listNewsArticles = this.getNews.find(item=>item.route===this.$route.params.route)
      console.log(listNewsArticles)
      if( listNewsArticles ) {
          this.listNewsArticles = listNewsArticles
      } else {
          let listNewsArticles = this.articles.find(item=>item.route===this.$route.params.route)
          this.listNewsArticles = istNewsArticles
      }
      console.log(listNewsArticles)

      const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
      "июля", "августа", "сентября", "октября", "ноября", "декабря"];
      let date = new Date(Date.parse(this.listNewsArticles.created_at))
      let day = date.getDate()
      let month = monthNames[date.getMonth()]
      return this.datetime = `${day} ${month}`
    }
})
</script>
<style scoped>
.list-block{
    width: 800px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px 0 10px 0;
}
.fon-img{
    object-fit: contain;
    width:100%;
    height: 370px;
    margin: 10px auto;
}
.title-text{
    text-align: center;
    font-size:16pt;
    margin:20px 20px 5px 20px;
    color:black;
}
.line-block{
    width: 100%;
    height: 3px;
    color: #eb5804;
    background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
    margin-bottom: 35px;
    margin-left:35px;
    border: none;
}
.datetime{
    color: rgb(48, 45, 45);
    font-size: 12pt;
    text-align: left;
}
</style>

<style module>
.text {
    color:black;
    font-size: 14pt;
    text-align: justify;
    margin:20px
}
</style>
