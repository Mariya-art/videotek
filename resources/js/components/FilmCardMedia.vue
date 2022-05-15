<template>
  <div>
    <router-link
      class="router-link-video"
      :to="{ name: 'filmPage', params: { route: film.route } }"
    >
      <div class="poster-block">
        <img  class="poster-video" :src="getImgUrl(film.img)" alt="film" />
        <div class="block-title"><p class="title-video"><em>Видео</em> &#8226; {{ film.title }}</p></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FilmCardMedia",
  props: {
    film: {
      type: Object,
    },
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img).default
    },
  },
};
</script>

<style scoped>

.poster-block{
    margin: 0 auto;
    width: 250px;
    height: 400px;
    background-color:#DCDCDC;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px 0 10px 0;
}
.poster-video{
    width: 100%;
    object-fit: contain;
    height:300px;
    margin: 10px auto 5px;
    border-radius: 10px 0  0;
}
.block-title{
    margin:0 auto ;
}
.title-video {
    padding: 0 20px;
    color:black;
    font-weight: 500;
    font-size: 13pt;
    text-align: left;
}
.title-video:hover{
    color:#EB5804;
}
.router-link-video{
  text-decoration: none;
  color: white;
}

</style>