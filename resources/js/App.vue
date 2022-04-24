<template>
  <div class="app wrapper">
    <div class="main-wrapper">
    <v-navigation-drawer
      app
      left
      dark
      absolute
      temporary
      height="50%"
      v-model="drawer"
    >
      <div class="listLink">
        <router-link class="logo link" to="/main"
          ><h1>VIDEOTEK</h1></router-link
        >
        <hr class="line" />
        <router-link class="link" to="/films"
          ><p><img :src="filmicon" class="iconList" />Фильмы</p></router-link
        >
        <hr class="line" />
        <router-link class="link" to="/serials"
          ><p><img :src="serials" class="iconList" />Сериалы</p></router-link
        >
        <hr class="line" />
        <router-link class="link" to="/media"
          ><p><img :src="newfilm" class="iconList" />Медиа</p></router-link
        >
        <hr class="line" />
        <router-link class="link" to="/"
          ><p>
            <img :src="zvezda" class="iconList" />Ваша подборка
          </p></router-link
        >
        <hr class="line" />
        <router-link class="link" to="/"
          ><p><img :src="media" class="iconList" />Медиа</p></router-link
        >
        <hr class="line" />
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

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
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
import logo from './assets/videotek.jpg'
import filmicon from "./assets/filmicon.png";
import serials from "./assets/serials.png";
import zvezda from "./assets/zvezda.png";
import media from "./assets/media.png";
import newfilm from "./assets/newfilm.png";
import { mapActions } from "vuex";

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
    logo,
    filmicon,
    serials,
    zvezda,
    media,
    newfilm,
    icons: ["mdi-odnoklassniki", "mdi-github", "mdi-trello", "mdi-discord"],
    comments: [
        {
          filmRoute: 'avatar',
          username: 'Гость 1',
          comment: 'Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1,Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1, Текст коментария 1.',
          datetime: '18.04.2022, 18:30',
          id: '1'
        },
        {
          filmRoute: 'hurrypotter-azkaban',
          username: 'Гость 8',
          comment: 'Текст коментария 2, Текст коментария 2, Текст коментария 2, Текст коментария 2',
          datetime: '18.04.2022, 18:30',
          id: '2'
        },
        {
          filmRoute: 'avatar',
          username: 'Гость 2',
          comment: 'Текст коментария3',
          datetime: '18.04.2022, 19:00',
          id: '3'
        },
        {
          filmRoute: 'snowwhite',
          username: 'Гость 2',
          comment: 'Текст коментария 4, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
          datetime: '18.04.2022, 18:30',
          id: '4'
        },
        {
          filmRoute: 'matrix',
          username: 'Гость 4',
          comment: 'Текст коментария 5, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария, Текст коментария',
          datetime: '18.04.2022, 19:00',
          id: '5'
        },
        {
          filmRoute: 'everest',
          username: 'Гость 2',
          comment: 'Текст коментария 6',
          datetime: '18.04.2022, 19:00',
          id: '6'
        },
        {
          filmRoute: 'hurrypotter-azkaban',
          username: 'Гость 1',
          comment: 'Текст коментария 7',
          datetime: '18.04.2022, 19:00',
          id: '7'
        }
      ]
  }),
    methods: {
      ...mapActions(['fetchFilms', 'fetchComments'])
    },
    beforeCreate () {
      document.body.className = 'app'
    },
    created() {
        this.fetchComments(this.comments)
        this.fetchFilms()
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  font-family: 'Roboto', serif;
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
</style>
