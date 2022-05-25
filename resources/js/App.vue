<template>
  <div class="app wrapper">
    <div class="main-wrapper">
      <v-navigation-drawer
        app
        left
        dark
        absolute
        temporary
        height="100%"
        v-model="drawer"
      >
        <div class="listLink">
          <router-link class="logo link" to="/main"
            ><h1>VIDEOTEK</h1></router-link
          >
          <hr class="line" />
          <router-link class="link" to="/films"
            ><p><img :src="filmIcon" class="iconList" />Фильмы</p></router-link
          >
          <hr class="line" />
          <router-link class="link" to="/serials"
            ><p><img :src="serials" class="iconList" />Сериалы</p></router-link
          >
          <hr class="line" />
          <router-link class="link" to="/media"
            ><p><img :src="media" class="iconList" />Медиа</p></router-link
          >
          <!-- <router-link class="link" to="/"
          ><p><img :src="newfilm" class="iconList" />Новинки</p></router-link
        > -->
          <hr class="line" />
         <!-- <router-link class="link" to="/"
            ><p>
              <img :src="zvezda" class="iconList" />Ваша подборка
            </p></router-link
          >
          <hr class="line" /> -->
        </div>
      </v-navigation-drawer>
      <v-main>
        <v-app-bar color="deep-purple accent-4" dense dark height="60vh">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <router-link to="/main"
            ><img :src="logo" alt="logo" class="nav-logo"
          /></router-link>
          <v-toolbar-title>
            <router-link to="/main" class="logo">VIDEOTEK</router-link>
          </v-toolbar-title>

          <v-spacer />
          <Search />
          <LoginButton />
          <!-- v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn -->
        </v-app-bar>
        <router-view />
      </v-main>
    </div>
    <v-footer dark padless>
      <v-card class="lighten-1 white--text text-center flex" flat tile>
        <div class="footer">
          <div class="buttonIcon">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </div>
          <div class="footerText">
            <p>Вакансии</p>
            <p></p>
            <p>Реклама</p>
            <p></p>
            <p>Соглашение</p>
            <p></p>
            <p>Предложения</p>
            <p>Служба поддержки</p>
          </div>
          <hr />
          <div class="foterTextbottom">
            <p>&#169;2022-Videotek</p>
          </div>
        </div>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import logo from "./assets/videotek.jpg"
import filmIcon from "./assets/filmicon.png"
import serials from "./assets/serials.png"
import zvezda from "./assets/zvezda.png"
import media from "./assets/media.png"
import newFilm from "./assets/newfilm.png"
import Search from "./components/Search"
import LoginButton from "./components/LoginButton"

export default {
  name: "App",
  components: { Search, LoginButton },
  data: () => ({
    drawer: false,
    group: null,
    logo,
    filmIcon,
    serials,
    zvezda,
    media,
    newFilm,
    icons: ["mdi-odnoklassniki", "mdi-github", "mdi-trello", "mdi-discord"],
    show: false,
    search:'',
    filmsAndSerials:[],
    userName: ''
  }),
  beforeCreate() {
    document.body.className = "app"
  }
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main-wrapper {
  flex-grow: 1;
}
.app {
  font-family: 'Helvetica Neue', 'Arial', sans-serif;
  background-color: black;
  color: white;
}
.nav-logo {
  width: 50px;
  height: 50px;
}
.iconList {
  padding-right: 10px;
  width: 30px;
  height: 20px;
}
.logo {
  font-family: "Roboto", serif;
  font-weight: 900;
  text-decoration: none;
  color: white;
}
.line {
  width: 100%;
  height: 3px;
  color: #eb5804;
  background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
  margin-bottom: 35px;
  border: none;
}
.listLink {
  margin: 20px 10px;
}
.link {
  text-decoration: none;
  color: white;
}
.link p {
  font-size: 15pt;
  line-height: 1.5;
}
.link:hover {
  color: #eb5804;
}
.v-navigation-drawer {
  border-radius: 10px 0 10px 0;
}
.footer {
  margin: 0 auto;
  width: 1140px;
}
.buttonIcon {
  margin: 7px auto;
  display: flex;
  justify-content: center;
}
.footerText {
  display: flex;
  justify-content: space-around;
}
.footerText p {
  padding: 5px;
  font-size: 12pt;
  opacity: 0.5;
}
.foterTextbottom {
  margin: 0 auto;
}
.foterTextbottom p {
  text-align: center;
  font-size: 12pt;
  opacity: 0.5;
  padding: 10px;
}
.footer hr {
  opacity: 0.03;
}
.v-text-field{
  margin-top: 25px !important;
  border-color:transparent !important;
  margin-right: 10px !important;
}

::-webkit-scrollbar {
  width: 16px;
  background-color: #464544;
}

::-webkit-scrollbar-thumb {
  background-color: #eb5804;
  border-radius: 9em;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #ff4d00;
}

::-webkit-scrollbar-button:vertical:start:decrement {
  background: linear-gradient(120deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
  linear-gradient(240deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
  linear-gradient(0deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
  background-color: #eb5804;
}

::-webkit-scrollbar-button:vertical:end:increment {
  background: linear-gradient(300deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
  linear-gradient(60deg, #02141a 40%, rgba(0, 0, 0, 0) 41%),
  linear-gradient(180deg, #02141a 30%, rgba(0, 0, 0, 0) 31%);
  background-color: #eb5804;
}

* { /* For Mozilla Firefox: */
  scrollbar-color: #eb5804 #464544;
}
*:hover {
  scrollbar-color: #ff4d00 #464544;
}
</style>
