<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="d-flex align-center">
                Aroma frontend
            </div>

            <v-spacer></v-spacer>

            <span v-if="isLogged">
                <v-btn text to="/add_order">Rendelés feladása</v-btn>
                <v-btn text to="/partners">Partnerek</v-btn>
            </span>
            <span v-else>
                <v-btn text>Regisztráció</v-btn>
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
