<template>
<div class="centered-block">
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
  <div class="link-container">
    <router-link class="back-link" to="/media">Назад</router-link>
  </div>
</div>
</template>

<script>
export default {
    name: 'NewsArticlesPage',
    data: () => ({
        listNewsArticles: null,
        datetime: null
    }),
    methods: {
      getNews() {
        return JSON.parse(window.sessionStorage.getItem('news'))
      },
      getArticles() {
        return JSON.parse(window.sessionStorage.getItem('articles'))
      },
      getImgUrl(img) {
        return require("../assets/media/" + img).default
      }
    },
    created () {
      this.listNewsArticles = this.getNews().find(
        item => item.route === this.$route.params.route
      )
      if (! this.listNewsArticles) {
        this.listNewsArticles = this.getArticles().find(
          item => item.route === this.$route.params.route
        )
      }
      if (this.listNewsArticles) {
        const date = new Date(this.listNewsArticles.created_at)
        this.datetime = new Intl
          .DateTimeFormat('ru', {weekday: 'long', day: 'numeric', month: 'long'})
          .format(date)
      }
    }
}
</script>
<style scoped>
.centered-block {
    width: 800px;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.list-block {
    background-color: white;
    border-radius: 10px 0 10px 0;
}

.fon-img {
    object-fit: contain;
    width:100%;
    height: 370px;
    margin: 10px auto;
}

.title-text {
    text-align: center;
    font-size:16pt;
    margin:20px 20px 5px 20px;
    color:black;
}

.line-block {
    width: 100%;
    height: 3px;
    color: #eb5804;
    background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
    margin-bottom: 35px;
    margin-left:35px;
    border: none;
}

.datetime {
    color: rgb(48, 45, 45);
    font-size: 12pt;
    text-align: center;
}

.link-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.back-link {
  border: 1px solid #eb5804;
  padding: 5px 30px;
  margin: 20px 30px;
  color: #eb5804;
  transition: all 0.2s ease-in;
  text-decoration: none;
}

.back-link:hover {
  background-color: #eb5804;
  color: black;
}
</style>

<style module>
.text {
    color: black;
    font-size: 14pt;
    text-align: justify;
    margin: 20px
}
</style>
