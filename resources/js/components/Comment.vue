<template>
  <div>
    <div class="comment-box">
      <div class="h-block rel-block">
          <v-text-field
            dark
            v-model="username"
            name="username"
            autocomplete="off"
            label="Имя пользователя"
          ></v-text-field>
          <p class="errorbox errorbox__login" v-if="errorUsername">
            {{ errorUsername[0] }}
          </p>
      </div>
      <div class="h-block rel-block">
        <v-textarea
          name="message"
          filled
          dark
          no-resize
          label="Сообщение"
          v-model="text"
          class="comment-message-textarea"
        ></v-textarea>
        <p class="errorbox errorbox__text" v-if="errorText">{{ errorText[0] }}</p>
      </div>
      <button
        @click="sendComment"
        class="btnc"
        v-show="(username.length > 0) && (text.length > 0)"
      >
          Отправить
      </button>
    </div>
    <div>
      <p class="errorpar" v-if="errored">
        Ошибка сервера. Мы уже работаем над решением проблемы.
      </p>
      <div v-for="item in comments" :key="item.id" class="comment">
        <h4 class="name">
          {{ item.username }}:
          <span class="comment-datetime">{{ item.datetime }}</span>
        </h4>
        <p class="comment-text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid'
import axios from 'axios'
export default {
  name: 'Comment',
  data () {
    return {
      username: '',
      text: '',
      comments: [],
      errored: false,
      errorUsername: null,
      errorText: null,
    }
  },
  props: {
    filmId: Number
  },
  methods: {
    getData() {
        axios.get('/api/account')
        .then(result => {
            this.username = result.data
        })
    },
    getFeedbacks () {
      axios.get('/api/filmFeedbacks/' + this.filmId)
      .then(response => {
        this.comments = response.data.data
        this.comments = this.comments.map(comment => {
          const dt = new Date(comment.created_at)
          const datetime = new Intl
            .DateTimeFormat('ru', { dateStyle: 'short', timeStyle: 'short' })
            .format(dt)
          return {...comment, datetime}
        })
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
    },
    textReplacer(text) {
      return text
        .replace(/\.\.\./g, '…')
        .replace(/(^)\x22(\s)/g, '$1»$2')
        .replace(/(^|\s|\()"/g, '$1«')
        .replace(/"(;|!|\?|:|\.|…|,|$|\)|\{|\s)/g, '»$1')
        .replace(/(?<!»,) - /g, ' — ')
        .replace(/(«[^»]*)«([^»]*)»/g, '$1„$2“')
    },
    sendComment () {
      axios
        .post('/api/feedbacks', {
          film_id: this.filmId,
          username: this.username,
          text: this.textReplacer(this.text),
        })
        .then(response => {
          this.username = ''
          this.text = ''
          this.errorUsername = null
          this.errorText = null
          this.getFeedbacks()
        })
        .catch(error => {
          if (error.response.data.errors.username) {
            this.errorUsername = error.response.data.errors.username
          } else {
            this.errorUsername = null
          }
          if (error.response.data.errors.text) {
            this.errorText = error.response.data.errors.text
          }  else {
            this.errorText = null
          }
        })
    }
  },
  created () {
    this.getFeedbacks()
    if(localStorage.getItem('x_xsrf_token')){
    this.getData()
    }
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
.rel-block {
  position: relative;
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

.errorbox {
  color: firebrick;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 10px 10px 10px 0;
  padding: 10px;
  position: absolute;
  left: 160px;
  white-space: nowrap;
  background-color: #1A1A1A;
}
.errorbox__login {
  top: -20px;
}
.errorbox__text {
  top: -40px;
}

.comment-message-textarea {
  width: 500px;
}

.errorpar {
  color: firebrick;
  font-weight: bold;
}
</style>
