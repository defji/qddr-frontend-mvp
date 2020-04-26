<template>

    <v-container bg fill-height grid-list-md text-xs-center justify-center>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="4">

                <v-card xs12 md12 fill-height style="width: 500px">
                    <v-card-title>
                        Registration
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <form @submit.prevent="register">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field label="E-mail cím"
                                                      prepend-icon="person_outline"
                                                      type="text" name="email"
                                                      v-model="person.email"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field label="Password"
                                                      prepend-icon="lock_outline"
                                                      type="password"
                                                      name="password"
                                                      v-model="person.password"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field label="Password confirmation"
                                                      prepend-icon="lock_outline"
                                                      type="password"
                                                      name="password_conf"
                                                      v-model="person.password_conf"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-menu
                                                ref="menu"
                                                v-model="menu"
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                        v-model="person.birthdate"
                                                        label="Date of birth"
                                                        prepend-icon="event"
                                                        readonly
                                                        v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                    ref="picker"
                                                    v-model="person.birthdate"
                                                    :max="new Date().toISOString().substr(0, 10)"
                                                    min="1950-01-01"
                                                    @change="save"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-flex>
                                    index.
                                </v-layout>
                                <v-layout>
                                    <v-container fluid>
                                        <v-checkbox label="I have read and accept the privacy policy"
                                                    v-model="readed"></v-checkbox>

                                    </v-container>

                                </v-layout>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn :disabled="!readed" color="primary" type="submit">Registration</v-btn>
                                </v-card-actions>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
    .v-content {
        background: bisque;
    }
</style>
<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },

    components: {},
    data: () => ({
      readed: false,
      menu: false,
      person: {},
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(this.person.birthdate)
      },
      register () {
        // this.$validator.validateAll().then((result) => {
        //   if (result) {
        this.$store.dispatch('login', {
          email: 'dfj@dfj.hu',
          password: 'qddrrulez'
        })
          .then(() => {
            this.$router.push({ name: 'About' })
          })
          .catch(error => {
            //this.$setLaravelValidationErrorsFromResponse(error.response.data)
          })
      }
    }
  }
</script>
