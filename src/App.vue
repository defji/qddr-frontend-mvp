<template>
    <v-app>


        <v-navigation-drawer
                v-model="drawer"
                absolute
                left
                temporary
        >
            <v-list
                    nav
            >
                <v-list-item-group
                        v-model="drawer"
                >
                    <v-list-item to="/">
                        <v-list-item-action>
                            <v-icon>home</v-icon>
                        </v-list-item-action>
                        <v-list-item-title>Kezdőoldal</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/add_symptom">
                        <v-list-item-action>
                            <v-icon>ballot</v-icon>
                        </v-list-item-action>
                        <v-list-item-title>Tünetek hozzáadása</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/start_test">
                        <v-list-item-action>
                            <v-icon>camera_alt</v-icon>
                        </v-list-item-action>
                        <v-list-item-title>Új teszt</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="d-flex align-center">

                <strong class="mr-1">QDDR</strong>
                <span class="hidden-sm-and-down">| Quick Digital Diagnostic Response</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <span v-if="isLogged">
<!--                <v-btn text to="/add_symptom">Tünetek rögzítése</v-btn>-->
                <!--                <v-btn text to="/start_test">Teszt indítása</v-btn>-->
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
            <v-footer absolute fixed>
                HackTheCrisis 2020 entry by InnoTechSol
                <v-spacer>

                </v-spacer>
                &copy 2020
            </v-footer>

        </v-content>
    </v-app>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import { mapGetters } from 'vuex'

  export default {
    components: {},
    data () {
      return {
        drawer: false
      }
    },
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
