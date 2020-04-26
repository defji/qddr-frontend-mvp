<template>

    <v-container bg fill-height grid-list-md text-xs-center justify-center>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="4">


                <v-card xs12 md12 fill-height style="width: 500px">
                    <v-card-title>
                        Login
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <form @submit.prevent="login">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field label="E-mail"
                                                      prepend-icon="person_outline"
                                                      type="text" name="email"
                                                      v-model="email"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field label="Password"
                                                      prepend-icon="lock_outline"
                                                      type="password"
                                                      name="password" v-model="password"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" type="submit">Login</v-btn>
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
      email: '',
      password: ''
    }),
    methods: {
      login () {
        // this.$validator.validateAll().then((result) => {
        //   if (result) {
        this.$store.dispatch('login', {
          email: 'dfj@dfj.hu',
          password: 'qddrrulez'
        })
          .then(() => {
            this.$router.push({ name: 'Home' })
          })
          .catch(error => {
            //this.$setLaravelValidationErrorsFromResponse(error.response.data)
          })
        //   }
        // }).catch(err => {
        //   console.log(err)
        // })

      }
    }
  }
</script>
