<template>
  <div class="card" @click="$router.push({name: 'filmPage' , params: { route: film.route }})">
    <img :src="film.img" alt="film" />
    <p class="score">{{ film.score }}</p>
    <p class="title">{{ film.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'CardFilm',
  props: {
    film: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
}
.card:hover {
  transform: scale(1.09);
  cursor: pointer;
}
img {
  border-radius: 0 10px 0 10px;
  width: 250px;
  height: 370px;
}
.title {
  margin-bottom: 0;
  color: #ffffff;
  font-weight: 700;
  padding: 10px;
  font-size: 14pt;
  text-align: center;
}
.score {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #d66c08;
  width: 80px;
  height: 50px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 0 10px 0 10px;
  opacity: 0.7;
}
</style>
