import Vue from 'vue'
import Vuex from 'vuex'
import Avatar from '../assets/avatar.jpeg'
import Hurry from '../assets/garri.jpeg'
import Everest from '../assets/everest.jpeg'
import SnowWhite from '../assets/belo.jpeg'
import Matrix from '../assets/matrica.jpeg'
import Spiderman from '../assets/chel.jpeg'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filmsList: [],
    carouselList: [],
    isVisible: true
  },
  mutations: {
    setFilmsList(state, payload) {
      state.filmsList = payload
    },
    setCarouselList(state, payload) {
      state.carouselList = payload
    },
    setIsVisible(state, payload) {
      state.isVisible = payload
    }
  },
  getters: {
    getFilmsList: state => state.filmsList,
    getCarouselList: state => state.carouselList,
    getIsVisible: state => state.isVisible
  },
  actions: {
    fetchFilms({ commit }) {
      return commit('setFilmsList', [
        {
          id: 1,
          img: Avatar,
          title: 'Аватар',
          route: 'avatar',
          score: '7.9',
          age: 18,
          year: 2009,
          country: 'США',
          genre: 'Фантастика',
          director: 'Джеймс Кэмерон',
          actors: 'Зои Салданой, Сэм Уортингтон,Зои Салдана,Сигурни Уивер',
          description: 'По сюжету ресурсодобывающая корпорация угрожает существованию местного племени человекоподобных разумных существ — на’ви.'
        },
        {
          id: 2,
          img: Hurry,
          title: 'Гарри Поттер и узник азкабана',
          route: 'hurrypotter-azkaban',
          score: '8.6',
          age: 6,
          year: 2004,
          country: 'США, Великобритания',
          genre: 'Фэнтези',
          director: 'Альфонсо Куарон',
          actors: 'Дэниел Рэдклифф, Руперт Гринт,Эмма Уотсон',
          description: 'Третий год учёбы Гарри и его друзей в Хогвартсе.'
        },
        {
          id: 3,
          img: Everest,
          title: 'Эверест',
          route: 'everest',
          score: '7.2',
          age: 18,
          year: 2015,
          country: 'США, Великобритания',
          genre: 'Фильм-катастрофа',
          director: 'Балтазар Кормакур',
          actors: 'Джейсон Кларк, Джош Бролин, Джейк Джилленхол',
          description: 'В основе фильма лежат реальные события, произошедшие в Гималаях в мае 1996 года.'
        },
        {
          id: 4,
          img: SnowWhite,
          title: 'Белоснежка и охотник',
          route: 'snowwhite',
          score: '8.0',
          age: 16,
          year: 2012,
          country: 'США',
          genre: 'Фэнтези',
          director: 'Руперт Сандерс',
          actors: 'Кристен Стюарт,Шарлиз Терон,Крис Хемсворт',
          description: 'В королевство Табор вторгается армия стеклянных солдат.Король Магнус разбивает врагов, освобождает прекрасную пленницу.'
        },
        {
          id: 5,
          img: Matrix,
          title: 'Матрица',
          route: 'matrix',
          score: '8.9',
          age: 16,
          year: 1999,
          country: 'США,Австралия',
          genre: 'Фантастика',
          director: 'братья Вачовски',
          actors: 'Киану Ривз, Лоуренс Фишборн, Керри-Энн Мосс, Хьюго Уивинг, Джо Пантолиано',
          description: 'Фильм изображает будущее, в котором реальность, существующая для большинства людей, в действительности является симуляцией, созданной разумными машинами, чтобы подчинить и усмирить человечество, в то время как тепло и электрическая активность их тел используются машинами в качестве источника энергии. Немногие люди, высвободившиеся из «мира снов» и выбравшиеся в реальность, вступают в партизанскую войну против машин…'
        },
        {
          id: 6,
          img: Spiderman,
          title: 'Человек паук',
          route: 'spiderman',
          score: '8.5',
          age: 16,
          year: 2002,
          country: 'США',
          genre: 'Фантастика',
          director: 'Йен Брайс',
          actors: 'Тоби Магуайр,Клифф Робертсон,Кирстен Данст.',
          description: 'Школьник-неудачник Питер Паркер становится супергероем. Тоби Магуайр в культовом кинокомиксе Сэма Рэйми.'
        }
      ])
    },
    fetchCarousel({ commit }) {
      return commit('setCarouselList', [
        {
          src: 'https://nigelclarkepresenter.co.uk/reviews/wp-content/uploads/2018/02/BP-08-copy.jpg'
        },
        {
          src: 'https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm209-movie-film-poster-batman-begins_5b951e0b-1000x1000.jpg'
        },
        {
          src: 'https://avatars.mds.yandex.net/get-zen_doc/1888829/pub_5d8c753179c26e00ae002ede_5d8cd9120ce57b00ade9d04d/scale_1200'
        },
        {
          src: 'https://www2.bfi.org.uk/sites/bfi.org.uk/files/styles/full/public/image/silent-running-1971-002-poster.jpg?itok=Ho6VqqL5'
        }
      ])
    },
    toggleIsVisible({ commit }, payload) {
      commit('setIsVisible', payload)
    }
  }
})
