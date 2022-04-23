<template>
  <div>
    <Registration/>
    <MainPage />
  </div>
</template>

<script>
import MainPage from './MainPage.vue'
import Registration from './Registration.vue'

export default {
  name: 'Welcome',

  components: {
    MainPage,
    Registration,
  },
}
</script>
