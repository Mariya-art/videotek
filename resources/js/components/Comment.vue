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
      <strong style="color:red;" v-if="errorUsername">
        {{ errorUsername[0] }}<br><br>
      </strong>

      <v-col cols="12" md="6">
        <v-textarea
          name="message"
          filled
          dark
          no-resize
          label="Сообщение"
          v-model="text"
        ></v-textarea>
      </v-col>
      <strong style="color:red;" v-if="errorText">
        {{ errorText[0] }}<br><br>
      </strong>

      <button
        @click="sendComment"
        class="btnc"
        v-show="(username.length > 0) && (text.length > 0)"
      >
          Отправить
      </button>
    </div>

    <div>
      <strong style="color:red;" v-if="errored">
        Ошибка загрузки отзывов
      </strong>
      <div v-for="item in comments" :key="item.id" class="comment">
        <h4 class="name">
          {{ item.username }}:
          <span class="comment-datetime">{{ item.created_at }}</span>
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
      errorUsername: [],
      errorText: [],
    }
  },
  props: {
    filmId: Number
  },
  methods: {
    getFeedbacks () {
      axios.get('/api/filmFeedbacks/' + this.filmId)
      .then(response => {
        this.comments = response.data.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
    },
    async sendComment () {
      await axios.post('/api/feedbacks', {
        film_id: this.filmId,
        username: this.username,
        text: this.text,
      })
      .then(response => {
        this.username = ''
        this.text = ''
        this.comments = []
        this.errorUsername = []
        this.errorText = []
        this.getFeedbacks()
      })
      .catch(error => {
        this.errorUsername = []
        this.errorText = []
        if(error.response.data.errors.username) {
          this.errorUsername.push(error.response.data.errors.username[0])
        }
        if(error.response.data.errors.text) {
          this.errorText.push(error.response.data.errors.text[0])
        }
      })
    },
  },
  mounted() {
    this.getFeedbacks()
  },
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
