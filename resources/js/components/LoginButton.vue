<template>
    <button class="loginbtn" @click="login()">
      <p v-if="userName" class="username">{{ userName }}</p>
      <v-icon>mdi-account</v-icon>
    </button>
</template>

<script>
export default {
  name: 'LoginButton',
  data: () => ({
    userName: null
  }),
  methods: {
    login() {
      this.$router.push({ name: 'Login'})
    }
  },
  created() {
    const token = localStorage.getItem('x_xsrf_token')
    if (token) {
      axios
        .get('/api/account')
        .then(result => {
          this.userName = result.data
          console.log('Name: ', this.userName)
        })
    }
  }
}
</script>

<style scoped>
.loginbtn {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 50vh;
}
.loginbtn:hover {
  background-color: #363636;
}
.username {
  margin-right: 10px;
}
</style>
