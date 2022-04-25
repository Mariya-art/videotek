<template>
    <div>
       <router-link class="routerLink" to='/'>
      <div class="articles-card">
      <img  class="img-articles" :src="getImgUrl(item.img)"/>
      <p class="type-title">{{item.typetitle}}</p>
      <h2 class="articles-title">{{item.title}}</h2>
      <p class="articles-date">{{this.datetime}}</p>
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
   transform: scale(0.90);
    width: auto;
    height: 400px;
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
.articles-title{
  position: relative;
  color: black;
  font-size: 13pt;
  padding-bottom: 6pt;
  padding-top: 6pt;
  text-align: center;
}
.type-title{
  color: #EB5804;
  font-size: 11pt;
  padding-bottom: 6pt;
}
.articles-date{
  color: rgb(48, 45, 45);
  position: absolute;
  right: 15px;
  bottom: 4px;
  font-size: 10pt;
}
.articles-card:hover{
    transform: scale(0.95);
    cursor: pointer;
}
</style>
