<template>
  <div>
    <Registration/>
    <ListFilms />
  </div>
</template>

<script>
import ListFilms from '../components/ListFilms'
import Registration from '../components/Registrations.vue'

export default {
  name: 'HomeView',

  components: {
    ListFilms,
    Registration
  },
  data: () => ({
  })
}
</script>
