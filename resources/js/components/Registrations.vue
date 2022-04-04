<template>
  <div v-if="isVisible" class="form-registration-block">
    <div class="form-registration">
      <input
        type="text"
        name="name"
        placeholder="Логин"
        class="input-login"
        v-model="userName"
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        class="input-login"
        v-model="password"
      />

      <button class="button" @click="onLog">Войти</button>
      <button class="button" @click="onClose">
        Продолжить без регистрации
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Registration',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['toggleIsVisible']),
    async onLog () {
      const result = await axios.post('http://localhost:8080/', {
        login: this.userName,
        password: this.password
      })
      console.log(result)
      this.$emit('VisibleCheng', false)
    },
    onClose () {
      this.toggleIsVisible(false)
      this.$router.push({ name: 'ListFilm' })
    }
  },
  computed: {
    ...mapGetters(['getIsVisible']),
    isVisible () {
      return this.getIsVisible
    }
  }
}
</script>

<style lang="scss">
.form-registration-block {
  height: auto;
  position: fixed;
  background-color: rgba(44, 44, 44, 0.6);
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
}
.form-registration {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-direction: column;
}
.button {
  padding: 5px;
  background-color: #d66c08;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  border-radius: 0 10px 0 10px;
  height: 30px;
  margin: 5px;
}
.open:hover {
  transform: scale(1.02);
  box-shadow: 0 14px 28px rgba(235, 225, 225, 0.25),
  0 10px 10px rgba(248, 244, 244, 0.22);
}
.input-login {
  background-color: white;
  padding: 2px;
  margin: 5px;
  width: 285px;
  height: 25px;
  font-size: 20px;
  font-family: cursive;
}
</style>
