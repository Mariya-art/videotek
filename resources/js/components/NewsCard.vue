<template>
    <div>
      <router-link class="routerLink" to='/'>
    <div class="news-card">
            <img class="news-img" :src="item.img" alt="news"/>
        <h2 class="title-news">{{item.title}}</h2>
        <p class="date-news">{{item.datetime}}</p>
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
  }
}
</script>
<style scoped>
.news-card{
    transform: scale(0.90);
    width: auto;
    height: 380px;
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
    padding-top: 2pt;
    padding-bottom: 6pt;
    text-align: center;
}
.date-news{
    color: black;
    position: absolute;
    right: 15px;
    bottom: 4px;
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
