import Vue from 'vue'
import Vuex from 'vuex'
import Varig from '../assets/media/varig.jpeg'
import Fantvar from '../assets/media/fantvar.jpeg'
import Xacer from '../assets/media/xacer.jpeg'
import Oscar from '../assets/media/oscar.jpeg'
import Keri from '../assets/media/keri.jpeg'
import Lune from '../assets/media/lune.jpeg'
import Patic from '../assets/media/patic.jpeg'
import Fokus from '../assets/media/fokus.jpeg'
import Puz from '../assets/media/puz.jpeg'
import Prestol from '../assets/media/prestol.jpeg'
import Merge from '../assets/media/merge.jpeg'
import Mir from '../assets/media/mir.jpeg'
import Vani from '../assets/media/vani.jpeg'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    serials: [],
    videos: [],
    genres: [],
    ratingItems: [],
    newItems: [],
    carouselList: [],
    personList: [],
    commentList: [],
    news:[],
    articles: [],
    isVisible: true
  },
  mutations: {
    setRatingItems(state, payload) {
      state.ratingItems = payload
    },
    setNewItems(state, payload) {
      state.newItems = payload
    },
    setFilms(state, payload) {
      state.films = payload
    },
    setSerials(state, payload) {
      state.serials = payload
    },
    setNews (state, payload) {
      state.news = payload
    },
    setArticles (state, payload) {
      state.articles = payload
    },
    setVideos(state, payload) {
      state.videos = payload
    },
    setGenres(state, payload) {
      state.genres = payload
    },
    setCarouselList(state, payload) {
      state.carouselList = payload
    },
    setIsVisible(state, payload) {
      state.isVisible = payload
    },
    setPersonList(state, payload) {
      state.personList = payload
    },
    setCommentList (state, payload) {
      state.commentList = payload
    },
    addComment (state, payload) {
      state.commentList = [payload, ...state.commentList]
    }
  },
  getters: {
    getNews: state => state.news,
    getArticles: state => state.articles,
    getRatingItems: state => state.ratingItems,
    getNewItems: state => state.newItems,
    getFilms: state => state.films,
    getSerials: state => state.serials,
    getVideos: state => state.videos,
    getGenres: state => state.genres,
    getCarouselList: state => state.carouselList,
    getIsVisible: state => state.isVisible,
    getPersonsList: state => state.personList,
    getCommentList: state => state.commentList,
  },
  actions: {
    fetchRatingItems({ commit }) {
      return axios.get('/api/main/rating').then( result => {
        commit('setRatingItems', result.data.data);
      })
    },
    fetchNewItems({ commit }) {
      return axios.get('/api/main/new').then( result => {
        commit('setNewItems', result.data.data);
      })
    },
    fetchFilms({ commit }) {
      return axios.get('/api/films').then( result => {
        commit('setFilms', result.data.data);
      })
    },
    fetchSerials({ commit }) {
      return axios.get('/api/serials').then( result => {
        commit('setSerials', result.data.data);
      })
    },
    fetchVideos({ commit }) {
      return axios.get('/api/videos').then( result => {
        commit('setVideos', result.data.data);
      })
    },
    fetchGenres({ commit }) {
      return axios.get('/api/genres').then( result => {
        commit('setGenres', result.data.data);
      })
    },
    fetchActors({ commit }, payload) {
      commit('setPersonList', payload)
    },
    fetchDirectors({ commit }, payload) {
      commit('setPersonList', [...this.state.personList, ...payload])
    },
    fetchCarousel({ commit }) {
      return commit('setCarouselList', [
        {
          src: 'sherlock.jpg'
        },
        {
          src: 'taboo.jpg'
        },
        {
          src: 'gentlemen.jpg'
        },
        {
          src: 'billions.jpg'
        }
      ])
    },
    toggleIsVisible({ commit }, payload) {
      commit('setIsVisible', payload)
    },
    fetchComments ({ commit }) {
      return commit('setCommentList', [
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
      ])
    },
    fetchAddComment ({ commit }, payload) {
      commit('addComment', payload)
    },
    fetchNews ({ commit }) {
      return commit('setNews', [{
        id: 1,
        img: Fantvar,
        route: 'fantvar',
        title: 'Что пишут критики о новых «Фантастических тварях»',
        description: 'В мировой прокат выходит фильм «Фантастические твари: Тайны Дамблдора» — третья часть приквела «Гарри Поттера».',
        datetime: '6 апреля'
      },
      {
        id: 2,
        img: Varig,
        route: 'varig',
        title: 'Варяг -потенциальный хит 2022-го. Что известно о средневековом эпосе Роберта...',
        description: 'В апреле в мировой прокат выходит «Варяг» — крупнобюджетная картина Роберта Эггерса («Маяк») о викингах, в которой снялись Александр Скарсгард, Аня Тейлор-Джой, Итан Хоук, Николь Кидман и Бьорк',
        datetime: '7 апреля'
      },
      {
        id: 3,
        img: Xacer,
        route: 'xacer',
        title: 'В конце февраля выйдет документалка Андрея Лошака «Русские хакеры: Начало». Как ее делали?',
        description: 'выйдет сериал «Русские хакеры: Начало», над которым работал документалист Андрей Лошак.',
        datetime: '28 марта'
      },
      {
        id: 4,
        img: Oscar,
        route: 'ockar',
        title: '«Приманка для „Оскара“»: что пишут об «Аллее кошмаров» Гильермо дель Торо',
        description: 'В прокат выходит неонуар Гильермо дель Торо «Аллея кошмаров» с блистательным актерским составом.',
        datetime: '22 марта'
      },
      {
        id: 5,
        img: Keri,
        route: 'keri',
        title: 'Джим Керри пародировал Брежнева и сыграл муху. Что нужно знать об актере к его 60-летию?',
        description: 'Джиму Керри, без которого сложно представить комедии 1990-х, сегодня исполняется 60 лет.',
        datetime: '2 апреля'
      },
      {
        id: 6,
        img: Lune,
        route: 'lune',
        title: 'Вышли две серии «Лунного рыцаря». Рассказываем, что в них произошло',
        description: 'Обычный лондонец Стивен Грант (Оскар Айзек) работает в сувенирной лавке в историческом музее. Единственная странность в его жизни — провалы в памяти и лунатизм, поэтому перед сном он приковывает себя к постели.',
        datetime: '30 марта'
      }
      ])
    },
    fetchArticles ({ commit }) {
      return commit('setArticles',[{
        id: 1,
        img: Patic,
        router: '',
        typetitle: 'Интервью',
        title: 'Роберт Паттинсон: «Мой Бэтмен целыми днями читает Twitter»',
        description: 'В «Бэтмене» Мэтта Ривза (российский прокат которого отложен на неопределенный срок, но цифровой релиз в мире состоялся) Темный рыцарь защищает Готэм лишь второй год и не до конца понимает, как себя вести.',
        datetime: '12 апреля'
      },
      {
        id: 2,
        img: Puz,
        router: '',
        typetitle: 'Рецензия',
        title: '«Пузырь» Джадда Апатоу: ископаемая комедия о съемках блокбастера',
        description: '1 апреля на Netflix вышел новый фильм продюсера и режиссера знаменитых кидалт-комедий нулевых — тоже комедия,  но производственная. ',
        datetime: '1 апреля'
      },
      {
        id: 3,
        img: Fokus,
        router: '',
        typetitle: 'В фокусе',
        title: '«Черный краб»: шведская антиутопия про гражданскую войну',
        description: 'Одна из самых популярных новинок Netflix — фантастическая военная драма «Черный краб» с Нуми Рапас в главной роли. В заснеженной антиутопической Швеции группа солдат перемещается по тонкому льду, чтобы доставить таинственный груз, способный переменить ход гражданской войны.',
        datetime: ' 30 марта'
      },
      {
        id: 4,
        img: Merge,
        router: '',
        typetitle: 'Рецензия',
        title: '«Мегрэ и таинственная девушка»: сумрачная картина старого Парижа с великим Депардье.',
        description: 'В новом низкобюджетном фильме Патриса Леконта, классика французского развлекательного кино, традиционная легкость вдруг уступила место меланхолии, убедительно сыгранной актером-ветераном. В общем, довольно неожиданная трактовка детектива Жоржа Сименона.',
        datetime: '1 апреля'
      },
      {
        id: 5,
        img: Prestol,
        router: '',
        typetitle: 'Сериалы',
        title: 'Приквелы «Игры престолов» и «Властелина колец» станут главными сериалами-конкурентами 2022-го. Мы их сравнили',
        description: 'HBO готовит к релизу «Дом дракона» о предыстории мира «Игры престолов». Amazon выпустит сериал «Властелин колец: Кольца власти», который может стать самым дорогим в истории. ',
        datetime: '5 апреля'
      },
      {
        id: 6,
        img: Mir,
        router: '',
        typetitle: 'Сериалы',
        title: 'Самые безумные, смешные и трогательные панчи «Миротворца»',
        description: 'Хулиганский сериал Джеймса Ганна, спин-офф его же «Отряда самоубийц», очевидно будет в списке главных хитов 2022 года. «Миротворец» продлен на второй сезон, а мы вспоминаем самые яркие моменты и сцены вышедших серий. ',
        datetime: '28 марта'
      },
      {
        id: 7,
        img: Vani,
        router: '',
        typetitle: 'Рецензия',
        title: '«Сядь за руль моей машины»: три часа «Дяди Вани» в Хиросиме',
        description: 'Получивший «международный» «Оскар» фильм японца Рюсукэ Хамагути виртуозно развивает чеховские мотивы дискоммуникации и духовной близости, усталости и житейского абсурда. При этом он экранизация совсем другого писателя — Харуки Мураками.',
        datetime: '31 марта'
      }
      ])
    }
  }
})
