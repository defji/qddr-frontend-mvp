<template>
    <div class="home">

        <v-btn v-if="isLogged" @click="logout">logout</v-btn>
        <v-btn @click="getUser">getUser</v-btn>
    </div>
</template>

<script>
  // @ is an alias to /src

  import { mapGetters } from 'vuex'

  export default {
    name: 'Home',
    computed: {
      ...mapGetters([
        'isLogged'
      ])
    },
    methods: {

      getUser () {
        this.$api.get('/user').then(response => {
          console.log(response.data)
        })
      },
      logout () {
        this.$store.dispatch('logout')
      }
    },
    components: {}
  }
</script>
