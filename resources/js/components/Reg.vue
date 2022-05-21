<template>
  <div class="form-registration-block">
    <div class="form-registration">
      <div class="win-name-box">
        <div class="slot"></div>
        <div class="win-name"><h2>Вход</h2></div>
        <button class=" btn-close" @click="onClose">
          x
        </button>
      </div>
        
       <div class="if-box">
        <v-text-field
        class="marg"
          solo
          dark
          ref="name"
          v-model="name"
          :rules="[() => !!name || 'Обязательное поле']"
          label="Имя пользователя"
          required
        ></v-text-field>
        <v-text-field
          solo
          dark
          ref="email"
          v-model="email"
          :rules="[() => !!email || 'Обязательное поле']"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          solo
          dark
          ref="password"
          v-model="password"
          :append-icon="showpass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showpass ? 'text' : 'password'"
          :rules="[() => !!password || 'Обязательное поле']"
          label="Пароль"
          @click:append="showpass = !showpass"
          required
        ></v-text-field>
        <v-text-field
          solo
          dark
          type="password"
          ref="conformpassword"
          v-model="password_confirmation"
          :rules="[() => !!password_confirmation || 'Обязательное поле']"
          label="Подтвердите пароль"
          required
        ></v-text-field>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions class="space-between">
          <button class="btn" text @click="login">Отмена</button>
          <button value="register" class="btn" @click.prevent="onReg">
            Зарегистрироваться
          </button>
        </v-card-actions>
    </div> <!--
      <input
        type="text"
        name="name"
        placeholder="Имя"
        class="input-login"
        v-model="name"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        class="input-login"
        v-model="email"
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        class="input-login"
        v-model="password"
      />
      <input
        type="password"
        name="password_confirmation"
        placeholder="Подтвердите пароль"
        class="input-login"
        v-model="password_confirmation"
      />
      <button value="register" class="button" @click.prevent="onReg">Зарегистрироваться</button>
      <button class="button" @click="onClose">
        Продолжить без регистрации
      </button>
      <router-link class="button" :to="{ name: 'Account' }">Account</router-link>
    </div>
  </div>-->
  </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      pageVisible: true,
      showpass: false,
    }
  },
  methods: {
    onReg () {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
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
    login() {
      this.$router.push({ name: 'Login'})
    }
  }
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
