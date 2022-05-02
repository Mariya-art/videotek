<template>
  <div class="c">
    <h1>Отзывы</h1>
    <hr class="line"/>
    <div class="comment-box">
      <div class="h-block">
        <v-col cols="12" md="12">
          <v-text-field
            dark
            v-model="username"
            name="username"
            autocomplete="off"
            label="Имя пользователя"
          ></v-text-field>
        </v-col>

      </div>
      <v-col cols="12" md="6">
        <v-textarea
          name="message"
          filled
          dark
          no-resize
          label="Сообщение"
          v-model="message"
        ></v-textarea>
      </v-col>
      <button
        @click="sendComment"
        class="btnc"
        v-show="(username.length > 0) && (message.length > 0)"
      >
          Отправить
      </button>
    </div>
    <div>
      <div v-for="item in comments" :key="item.id" class="comment">
        <h4 class="name">
          {{ item.username }}:
          <span class="comment-datetime">{{ item.datetime }}</span>
        </h4>
        <p class="comment-text">{{ item.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { v4 as uuid } from 'uuid'
export default {
  name: 'Comment',
  data () {
    return {
      username: '',
      message: '',
      comments: [],
      testComments: [
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
    }
  },
  props: {
    film: String
  },
  methods: {
    /* async sendComment () {
      console.log(this.film, this.username, this.message)
      const result = await axios.post('http://localhost:8080/', {
        filmId: this.film,
        username: this.username,
        comment: this.message
      })
      console.log(result)
    }, */
    textReplacer (text) {
      return text
        .replace(/\.\.\./g, '…')
        .replace(/(^)\x22(\s)/g, '$1»$2')
        .replace(/(^|\s|\()"/g, '$1«')
        .replace(/"(;|!|\?|:|\.|…|,|$|\)|\{|\s)/g, '»$1')
        .replace(/(?<!»,) - /g, ' — ')
        .replace(/(«[^»]*)«([^»]*)»/g, '$1„$2“')
    },
    getCommentList() {
      return JSON.parse(window.sessionStorage.getItem('comments'))
    },
    setCommentList(payload) {
      window.sessionStorage.setItem('comments', JSON.stringify(payload))
    },
    addComment(comment) {
      const currentState = this.getCommentList()
      const newState = [...currentState, comment]
      this.setCommentList(newState)
    },
    commentOutput () {
      this.comments = this.getCommentList().filter(item => item.filmRoute === this.film)
    },
    sendComment () {
      const dtStr = new Intl
        .DateTimeFormat('ru', { dateStyle: 'short', timeStyle: 'short' })
        .format(new Date())
      const comment = {
        filmRoute: this.film,
        username: this.username,
        comment: this.textReplacer(this.message),
        datetime: dtStr,
        id: uuid()
      }
      this.addComment(comment)
      this.username = ''
      this.message = ''
      this.commentOutput()
    }
  },
  created () {
    this.setCommentList(this.testComments)
    this.commentOutput()
  }
}
</script>

<style>
.comment-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.btnc {
  border: 1px solid #EB5804;
  padding: 5px 30px;
  margin: 10px 10px;
  color: #EB5804;
}
.btnc:hover {
  background: #EB5804;
  color: black;
}
.h-block {
  margin-bottom: 10px;
}
.comment {
  margin: 20px 0;
}
.name {
  color: #EB5804;
  position: relative;
  margin: 5px 0;
}
.comment-datetime {
  color: gray;
  position: absolute;
  right: 0;
  top: 0;
}
.comment-text {
  text-align: justify;
  color: lightgray;
  line-height: 150%;
}
</style>
