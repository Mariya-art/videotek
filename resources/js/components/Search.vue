<template>
  <div class="search-container">
    <transition name="moveleft">
      <v-text-field
        v-show="show"
        v-model="search"
        @keyup.enter="searchFilm"
        placeholder="Название фильма"
        class="search-input"
        regular
        dense
        single-line
      />
    </transition>
    <v-btn icon @click="onSearchClick">
      <v-icon v-if="show">mdi-close</v-icon>
      <v-icon v-else>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    show: false,
    search: '',
    jumpCounter: 0
  }),
  methods: {
    onSearchClick() {
      this.show = ! this.show
      if (this.show) this.updateData()
      this.search = ''
    },
    searchFilm() {
      let found = this.allVideoItems.find(
        item => item.title.toLocaleLowerCase() == this.search.toLocaleLowerCase()
      )
      if (!found) {
        found = this.allVideoItems.find(
          item => item.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())
        )
      }
      if (found) {
        this.jumpCounter++
        this.$router.push('/films/' + found.route)
        if (this.jumpCounter > 0) this.$router.go()
      }
    },
    updateData() {
      axios
          .get("/api/main")
          .then((result) => {
            this.allVideoItems = result.data.data
          })
    }
  },
  created () {
    this.updateData()
  }
}
</script>

<style>
.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  width: 200px;
}

.moveleft-enter-active, .moveleft-leave-active {
  width: 200px;
  transition: width .5s ease;
}
.moveleft-enter, .moveleft-leave-to {
  width: 0;
}
</style>
