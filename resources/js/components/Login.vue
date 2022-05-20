<template>
  <div v-if="pageVisible" class="form-registration-block">
    <div class="form-registration">
      <input v-if="!token"
        type="email"
        name="email"
        placeholder="Email"
        class="input-login"
        v-model="email"
      />
      <input v-if="!token"
        type="password"
        name="password"
        placeholder="Пароль"
        class="input-login"
        v-model="password"
      />
      <button v-if="!token" value="login" class="button" @click.prevent="onLog">Войти</button>
      <router-link v-if="!token" class="button" :to="{ name: 'Reg' }">Зарегистрироваться</router-link>
      <button v-if="!token" class="button" @click="onClose">
        Продолжить без регистрации
      </button>
      <router-link v-if="token" class="button" :to="{ name: 'Account' }">Account</router-link>
      <a v-if="token" @click.prevent="logout" class="button" href="#">Выход</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      email: null,
      password: null,
      pageVisible: true,
      token: null,
    }
  },
  methods: {
    onLog () {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', { email: this.email, password: this.password})
        .then(result => {
          localStorage.setItem('x_xsrf_token', result.config.headers['X-XSRF-TOKEN'])
          this.$router.push({ name: 'Account'})
        })
        .catch(err => {
          console.log(err.response)
        })
      })
    },
    onClose () {
      this.pageVisible = false;
      this.$router.push('/main')
    },
    logout() {
      axios.post('/logout')
      .then(response => {
        localStorage.removeItem('x_xsrf_token')
        this.$router.push({ name: 'MainPage'})
      })
    },
    getToken() {
      this.token = localStorage.getItem('x_xsrf_token')
    },
  },
  mounted() {
    this.getToken()
  },
  updated() {
    this.getToken()
  },
};
</script>

<style>
.form-registration-block {
  height: auto;
  position: fixed;
  background-color: rgba(44, 44, 44, 0.9);
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
