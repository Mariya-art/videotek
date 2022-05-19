<template>
  <div v-if="visibleReg" class="form-registration-block">
    <div class="form-registration">
      <div class="win-name-box">
        <div class="slot"></div>
        <div class="win-name"><h2 v-if="showLog">Вход</h2><h2 v-else>Регистрация</h2></div>
        <button class="but-close" @click="onClose">
          <v-icon dark>mdi-close-thick</v-icon>
        </button>
      </div>

      <div v-if="showLog" class="if-box">
        <v-text-field
          solo
          dark
          v-model="userName"
          name="username"
          autocomplete="off"
          label="Имя пользователя"
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
          hint="Не менее 4 символов"
          counter
          @click:append="showpass = !showpass"
          required
        ></v-text-field>
        <div class="but-box">
          <button class="button" @click="onLog" :disabled=!logConform>Войти</button>
          <button class="button" @click="showLog = !showLog">
            Зарегистрироваться
          </button>
        </div>
      </div>
      <div v-else class="if-box">
        <v-text-field
          solo
          dark
          ref="userName"
          v-model="userName"
          :rules="[() => !!userName || 'Обязательное поле']"
          label="Имя пользователя"
          required
        ></v-text-field>
        <v-text-field
          solo
          dark
          ref="password"
          v-model="newpass"
          :append-icon="showpass1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showpass1 ? 'text' : 'password'"
          :rules="[() => !!newpass || 'Обязательное поле']"
          label="Пароль"
          @click:append="showpass1 = !showpass1"
          required
        ></v-text-field>
        <v-text-field
          solo
          dark
          ref="conformpassword"
          v-model="conformpassword"
          :rules="[() => !!conformpassword || 'Обязательное поле']"
          :append-icon="showpass2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showpass2 ? 'text' : 'password'"
          label="Подтвердите пароль"
          :error-messages="messegeError"
          @click:append="showpass2 = !showpass2"
          required
        ></v-text-field>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions class="space-between">
          <button class="button" text @click="showLog = true">Отмена</button>
          <button class="button" @click="register" :disabled="!formConform">
            Отправить
          </button>
        </v-card-actions>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  props: {
    visibleReg: Boolean,
  },
  data() {
    return {
      showLog: true,
      showpass1: false,
      showpass: false,
      showpass2: false,
      newpass: "",
      conformpassword: "",
      userName: "",
      password: "",
      email: "",
      messegeError: "",
      formConform: false,
      logConform: false,
    };
  },
  computed: {
    form() {
      return {
        name: this.userName,
        email: this.email,
        password: this.newpass,
      };
    },
  },
  methods: {
    onLog() {
      console.log(this.userName, this.password);
      this.onClose();
    },
    onClose() {
      this.$emit("regClose");
    },
    register() {
      console.log(this.form);
    },
  },
  updated() {
    if (this.newpass == this.conformpassword) {
      this.messegeError = "";
      if (this.userName && this.newpass) {
        this.formConform = true;
      } else {
        this.formConform = false;
      }
    } else {
      this.formConform = false;
      this.messegeError = "Пороль не совпадает!";
    }
    if(this.userName && this.password.length >=4 ){
      this.logConform=true;
    } else {
      this.logConform=false;
    }
  },
};
</script>

<style>
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
  background-color: rgba(0, 0, 0, 0.5);
  border: solid 2px #d66c08;
  border-radius: 10px;
  padding: 5px;
}
.if-box {
  width: 100%;
}
.win-name-box{
  width: 100%;
  display: flex;
  justify-content: center;
}
.win-name{
  width: 100%;
    display: flex;
    justify-content: center;
}
.slot{
  width: 50px;
}
.but-close {
  align-self: end;
  border-radius: 50%;
  transition: 0.2s;
  margin-bottom: 5px;
  padding: 7px;
}
.but-close:hover {
  background-color: #d66c08;
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
  border-radius: 10px 0 10px 0;
  height: 30px;
  margin: 5px;
  transition: 0.2s;
}
.button:hover {
  background-color: #d66b0891;
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
