<template>
    <v-container bg fill-height grid-list-md text-xs-center justify-center>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="4" class="text-center">
                <v-alert
                        class="mb-6 text-left"
                        border="top"
                        colored-border
                        type="info"
                        elevation="2"
                >
                    Assign your phone camera, and press <em>Start test</em> button.
                </v-alert>
                <v-btn x-large rounded color="accent">
                    <v-icon>camera_alt</v-icon>
                    Start test
                </v-btn>
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
