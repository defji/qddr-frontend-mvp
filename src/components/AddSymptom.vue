<template>
    <v-container bg fill-height grid-list-md text-xs-center justify-center>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="4">

                <v-card xs12 md12 fill-height style="width: 500px">
                    <v-card-title>
                        Tünetek rögzítése
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <form @submit.prevent="addSymptom">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Szaglás romlás"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Ízlelés romlás"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Száraz köhögés"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs8>
                                        <v-checkbox label="Láz"></v-checkbox>
                                    </v-flex>
                                    <v-flex xs4>
                                        <v-text-field outlined
                                                      suffix="°C"
                                                      mask="###"
                                                      placeholder="38.5"
                                                      label="Mértéke"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Végtag fájdalom"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Fáradtság, levertség"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Nehézlégzés"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">
                            Tünetek rögzítése
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
</style>
<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    created () {

    }
  }
</script>
