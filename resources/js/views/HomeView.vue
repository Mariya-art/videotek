<template>
  <div>
    <Registration/>
    <MainPage />
  </div>
</template>

<script>
import MainPage from '../components/MainPage.vue'
import Registration from '../components/Registrations.vue'

export default {
  name: 'HomeView',

  components: {
    MainPage,
    Registration,
  },
}
</script>
