<template>
    <div>
      <router-link class="routerLink" to='/'>
    <div class="news-card">
            <img class="news-img" :src="getImgUrl(item.img)" alt="news"/>
        <h2 class="title-news">{{item.title}}</h2>
        <p class="date-news">{{this.datetime}}</p>
    </div>
      </router-link>
    </div>
</template>
<script>
export default {
  name: 'NewsCard',
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
.news-card{
    transform: scale(0.90);
    width: auto;
    height: 390px;
    background-color:#DCDCDC;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px 0 10px 0;
}
.title-news{
    position: relative;
    color: black;
    font-size: 13pt;
    padding-top: 6pt;
    padding-bottom: 6pt;
    text-align: center;
}
.date-news{
    color: rgb(48, 45, 45);
    position: absolute;
    right: 15px;
    bottom: 4px;
    font-size: 10pt;
}
.news-img{
    width: 100%;
    object-fit: contain;
    height:auto;
    margin: 0px auto;
    border-radius: 10px 0  0;
}
.news-card:hover{
    transform: scale(0.95);
    cursor: pointer;
}
</style>
