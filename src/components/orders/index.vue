<template>
    <v-container>
        <v-col>
            <v-data-table
                    :headers="headers"
                    :items="items"
                    :items-per-page="50"
                    class="elevation-1"
            ></v-data-table>

        </v-col>


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
