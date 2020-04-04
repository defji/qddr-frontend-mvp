<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="d-flex align-center" to="/">
                QDDR
            </div>

            <v-spacer></v-spacer>

            <span v-if="isLogged">
                <v-btn text to="/add_symptom">Tünetek rögzítése</v-btn>
                <v-btn text to="/start_test">Teszt indítása</v-btn>
                <v-btn icon @click="logout">
                    <v-icon>logout</v-icon>
                </v-btn>

            </span>
            <span v-else>
                <v-btn to="/registration" text>Regisztráció</v-btn>
            </span>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapGetters([
        'isLogged'
      ])
    },

    methods: {
      logout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
