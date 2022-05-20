<template>
  <div>
    <h2>Добро пожаловать, {{ userName }}!</h2>
    <a @click.prevent="logout" class="button" href="#">Выход</a>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
        userName: null,
    }
  },
  methods: {
    getData() {
        axios.get('/api/account')
        .then(result => {
            this.userName = result.data
            console.log(result)
        })
    },
    logout() {
        axios.post('/logout')
        .then(response => {
            localStorage.removeItem('x_xsrf_token')
            this.$router.push({ name: 'home'})
        })
    },
  },

  mounted() {
    this.getData()
  },
}
</script>

<style scoped>
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
  width: 150px;
  margin: 5px;
}
</style>