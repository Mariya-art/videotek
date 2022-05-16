<template>
<div>
  <div class="person-page" v-if="personData">
    <div class="person-page-content">
      <div class="person-data-block">
        <div class="left-column" >
          <img :src="getImgUrl(personData.img)" alt="person image"/>
          <button class="backbtn" @click="$router.go(-1)">➔</button>
        </div>
        <div class="person-data">
          <h1>{{ personData.name }}</h1>
          <hr class="line" />
          <div v-if="personData.description" class="biography">
            {{personData.description}}
          </div>
          <div v-if="(personData.slug === 1)">
            <em class="parameter">Должность:</em> Режиссёр
          </div>
          <div v-if="(personData.slug === 2)">
            <em class="parameter">Должность:</em> Актёр
          </div>
          <div v-if="personData.birthday">
            <em class="parameter">Дата рождения:</em> {{ birthdayString }}
          </div>
          <div v-if="personData.birthplace">
            <em class="parameter">Место рождения:</em> {{ personData.birthplace }}
          </div>
          <div v-if="personData.height" class="last-parameter">
            <em class="parameter">Рост:</em> {{ personData.height }} см
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else> <h2>Информация отсутствует</h2> </div>
</div>
</template>

<script>
export default {
  name: 'PersonPage',
  data () {
    return {
      person: null,
      birthdayString: ''
    };
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img).default;
    },
    searchPersonData() {
      const personRoute = this.$route.params.route
      const persona = JSON.parse(window.sessionStorage.getItem('persona'))
      if (persona) {
        this.person = persona.find( item => item.route === personRoute )
      }
    },
    flatenPersona(videoDataArray) {
      const persona = []
      videoDataArray.forEach(video => {
          video.directors.forEach(director => persona.push(director))
          video.actors.forEach(actor => persona.push(actor))
      })
      return persona
    },
    addPersonaToStorage(persona) {
      window.sessionStorage.setItem('persona',
        JSON.stringify([
          ...JSON.parse(window.sessionStorage.getItem('persona')),
          ...persona
        ])
      )
    },
    finalPreparePerson() {
      window.sessionStorage.setItem('personData', JSON.stringify(this.person))
      document.title = 'VIDEOTEK - ' + this.person.name
      const birthdate = new Date(this.person.birthday)
      this.birthdayString = new Intl
          .DateTimeFormat('ru', { dateStyle: 'long' })
          .format(birthdate)
    },
    refreshFilmsAndPersona() {
      axios
        .get('/api/main')
        .then((result) => {
          const video = result.data.data
          window.sessionStorage.setItem('video', JSON.stringify(video))
          window.sessionStorage.setItem('persona', JSON.stringify([]))
          this.addPersonaToStorage(this.flatenPersona(video))
          this.searchPersonData()
          this.finalPreparePerson()
        })
    }
  },
  created () {
    this.searchPersonData()
    if (! this.person) {
      this.refreshFilmsAndPersona()
      this.searchPersonData()
    }
    if (this.person) {
      this.finalPreparePerson()
    } else {
      const personCandidate = JSON.parse(window.sessionStorage.getItem('personData'))
      if (this.$route.params.route === personCandidate.route) {
        this.person = personCandidate
      } else {
        this.$router.push('/404')
      }
    }
  },
  computed: {
    personData() {
      return this.person
    }
  }
}
</script>

<style>
.liName {
  list-style-type: none;
  display: inline;
  margin-top: 10px;
  margin-bottom: 10px;
}
.liName:not(:last-of-type)::after {
  content: ', ';
}

.inline-ul {
  display: inline;
}
.inline-ul::before {
  content: ' ';
}

.line {
  width: 100%;
  height: 3px;
  color: #eb5804;
  background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
  margin-bottom: 35px;
  border: none;
}
.listButton {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.person-data {
  margin: 15px 0;
  position: relative;
}

.person-data h1 {
  font-size: 25pt;
  padding-bottom: 6pt;
}
.person-data .parameter {
  font-size: 15pt;
  font-style: normal;
  font-weight: bold;
  line-height: 150%;
}
.last-parameter {
  margin-bottom: 10px;
}
.person-data p {
  font-size: 12pt;
  line-height: 1.5;
}
.person-page-description {
  margin-top: 12pt;
  margin-bottom: 12pt;
  text-align: justify;
  line-height: 1.5;
}

.data-block {
  display: flex;
  align-items: flex-end;
}

.data-block p {
  margin-left: 5px;
}

.left-column {
  margin-top: 30px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  width: 250px;
}

.person-page-content {
  margin: 20px auto;
  padding: 10px 15px;
  width: 1140px;
}

.person-data-block {
  display: flex;
}

.age-boundary {
  width: 50px;
  text-align: center;
  font-weight: 900;
  color: white;
  background-color: #eb5804;
  padding: 8px 8px;
  font-size: 10pt;
  border-radius: 2px;
  margin-bottom: 10px;
}

.player-text {
  display: flex;
  justify-content: center;
  margin: 15px 5px;
  font-size: 18pt;
}

.player {
  display: flex;
  justify-content: center;
}

.routerLink {
  text-decoration: none;
  color: white;
}
.routerLink:hover {
  color: #eb5804;
}

.buttonContainer {
  margin: 50px auto 50px 270px;
}

.score-block {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 18pt;
}

.biography {
  margin-bottom: 20px;
  text-align: justify;
}
</style>
