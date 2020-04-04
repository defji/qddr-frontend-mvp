<template>
    <v-container>
        <v-col>
            <v-data-table
                    :headers="headers"
                    :items="items"
                    :items-per-page="50"
                    class="elevation-1"
            >
                <template v-slot:item.actions="{ item }">
                    <v-row>
                        <v-spacer></v-spacer>
                        <v-btn rounded color="accent">Beállítások</v-btn>
                    </v-row>
                </template>
            </v-data-table>
        </v-col>
    </v-container>
</template>
<style scoped>
</style>
<script>
  export default {
    data () {
      return {
        items: [],
        headers: [
          {
            text: 'Partner neve',
            value: 'name'
          },
          {
            text: 'Cím',
            value: 'address'
          },
          {
            value: 'actions'
          }

        ]
      }
    },
    methods: {},
    created () {
      this.$api.get('/partners').then(resp => {
        this.items = resp.data
      }).catch(err => {

      })

    }
  }
</script>
