<template>
    <div>
       <router-link class="routerLink" :to="{ name: 'NewsArticlesPage', params: { route: item.route } }">
      <div class="articles-card">
      <img  class="img-articles" :src="getImgUrl(item.img)"/>
       <div class="article-block"><h2 class="articles-title">{{item.title}}</h2></div>
      <div><p class="articles-date">{{this.datetime}}</p></div>
      </div>
       </router-link>
    </div>
</template>
<script>

export default {
  name: 'ArticlesCard',
  props: {
    item: {
      type: Object
    }
  },
  data:()=>({
    datetime:null
  }),
   methods: {
    getImgUrl(img) {
      return require("../assets/media/" + img).default
    },
  },
   created(){
    const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"];
   let date =new Date(Date.parse(this.item.created_at))
    let day=date.getDate()
    let month=monthNames[date.getMonth()]
    return this.datetime=`${day} ${month}`
}
}
</script>
<style scoped>
.articles-card{
    position: relative;
    width: auto;
    height: 420px;
    background-color:#DCDCDC;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px 0 10px 0;
}
.img-articles{
    width: 100%;
    object-fit: contain;
    height:auto;
    margin: 0 auto;
    border-radius: 10px 0  0;
}
.article-block{
  margin:10px;
}
.articles-title{
    color: black;
    font-size: 13pt;
    text-align: left;
}
.articles-title:hover{
  color:#EB5804;
}
.articles-date{
    position: absolute;
    color: rgb(48, 45, 45);
    font-size: 12pt;
    bottom: 4px;
    left:15px;
}
.articles-card:hover{
    transform: scale(1.02);
    cursor: pointer;
}
</style>
