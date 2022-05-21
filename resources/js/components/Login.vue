<template>
  <div  class="form-registration-block">
    <div class="form-registration">
      <div class="win-name-box">
        <div class="slot"></div>
        <div class=" win-name"><h2>Вход</h2></div>
        <button class="btn-close" @click="onClose">
          x
        </button>
      </div>

      <div class="if-box">
       <v-text-field
          solo
          dark
          v-model="email"
          name="email"
          autocomplete="off"
          label="Электр. почта"
          required
        ></v-text-field>
        <v-text-field
          class="cc"
          solo
          dark
          v-model="password"
          :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showpass ? 'text' : 'password'"
          name="password"
          label="Пароль"
          hint="Не менее 8 символов"
          counter
          @click:append="showpass = !showpass"
          required
        ></v-text-field>
        <div class="but-box">
          <button v-if="!token" value="login" class="btn" @click="onLog">Войти</button>
          <router-link v-if="!token" class="btn" :to="{ name: 'Reg' }">Зарегистрироваться</router-link>
          <button v-if="token" @click="logout" class="btn">Выход</button>
        </div>
      </div>
    </div>
  </div>
</template>
<!--<template>
  <div v-if="pageVisible" class="form-registration-block">
    <div class="form-registration">
      <button class="btn-close" @click="onClose">×</button>
      <div class="vuetify-container">
        <v-text-field
          solo
          dark
          v-model="email"
          name="email"
          autocomplete="off"
          label="Электр. почта"
          required
        ></v-text-field>
        <v-text-field
          class="cc"
          solo
          dark
          v-model="password"
          :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showpass ? 'text' : 'password'"
          name="password"
          label="Пароль"
          hint="Не менее 8 символов"
          counter
          @click:append="showpass = !showpass"
          required
        ></v-text-field>
      </div>
      <button v-if="!token" value="login" class="button" @click.prevent="onLog">Войти</button>
      <router-link v-if="!token" class="button" :to="{ name: 'Reg' }">Зарегистрироваться</router-link>
      <button v-if="!token" class="button" @click="onClose">
        Продолжить без регистрации
      </button>
      <router-link v-if="token" class="button" :to="{ name: 'Account' }">Account</router-link>
      <a v-if="token" @click.prevent="logout" class="button" href="#">Выход</a>
    </div>
  </div>
</template>-->

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      pageVisible: true,
      token: null,
      showpass: false
    }
  },
  methods: {
    onLog () {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', { email: this.email, password: this.password})
        .then(result => {
          localStorage.setItem('x_xsrf_token', result.config.headers['X-XSRF-TOKEN'])
          this.$router.push({ name: 'MainPage'})
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
        window.location.reload()
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

<style scoped>
.space-between {
  display: flex;
  justify-content: space-between;
}
.form-registration-block {
  height: auto;
  position: fixed;
  background-color: rgba(44, 44, 44, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
}
.form-registration {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 33%;
  max-width: 355px;
  min-width: 300px;
  background-color: rgba(0, 0, 0, 1);
  border: solid 2px #d66c08;
  border-radius: 10px;
  padding: 5px;
}
.if-box {
  margin-left: 10px;
  width: 100%;
}
.win-name-box{
  width: 100%;
  display: flex;
  justify-content: center;
}
.win-name{
  color:#eb5804;
  width: 100%;
    display: flex;
    justify-content: center;
}
.slot{
  width: 50px;
}
.btn-close {
  align-self: end;
  border-radius: 50%;
  transition: 0.2s;
  margin-bottom: 5px;
  padding: 7px;
  size: 16px;
}
.btn-close:hover {
  background-color: #d66c08;
}
.btn {
    padding: 5px;
    background-color: black;
    border: solid 1px #eb5804;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eb5804;
    font-size: 20px;
    border-radius: 10px 0 10px 0;
    height: 30px;
    margin: 5px;
    transition: 0.2s;
    text-decoration: none;
}
.btn:hover {
  background-color: #eb5804;
  color: black;
}
.button:disabled {
  background-color: #8f7e6e91;
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
.but-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>
