<template>
    <v-container bg fill-height grid-list-md text-xs-center justify-center>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="4">

                <v-card xs12 md12 fill-height style="width: 500px">
                    <v-card-title>
                        Add symptoms
                    </v-card-title>
                    <v-card-text>
                        <v-container fluid>
                            <form @submit.prevent="addSymptom">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Loss of smell"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Loss of taste"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Dry cough"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs8>
                                        <v-checkbox label="Fever"></v-checkbox>
                                    </v-flex>
                                    <v-flex xs4>
                                        <v-text-field outlined
                                                      suffix="°C"
                                                      mask="###"
                                                      placeholder="38.5"
                                                      label="Value"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Pain in extremity"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Fatigue, depression"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-checkbox label="Breathing difficulties"></v-checkbox>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">
                            Add symptomps
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
