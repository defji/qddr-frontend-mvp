<template>
    <v-container>
        <v-col>

            <h1>My previous tests/h1>
                <v-data-table
                        :headers="headers"
                        :items="items"
                        :items-per-page="50"
                        class="elevation-1"
                        disable-sort
                >
                    <template v-slot:item.actions="{ item }">
                        <v-row class="mb-2">
                            <v-spacer></v-spacer>
                            <v-btn rounded color="accent">RDetails</v-btn>
                        </v-row>
                    </template>
                    <template v-slot:item.result="{ item }">
                        <div v-if="item.result === 'positive' || item.result===   'negative' || item.result === 'pending'">

                        <span v-if="item.result==='positive'">
                          <v-chip color="red" class="white--text">positive</v-chip>
                        </span>
                            <span v-if="item.result==='negative'">
                          <v-chip color="green" class="white--text">negative</v-chip>
                        </span>

                            <span v-if="item.result==='pending'">
                          <v-chip class="white--text">pending</v-chip>
                        </span>

                        </div>
                        <span v-else>
                        {{ item.result }}
                    </span>
                    </template>
                </v-data-table>
        </v-col>

    </v-container>
</template>

<script>
  // @ is an alias to /src

  import { mapGetters } from 'vuex'

  export default {
    name: 'Home',
    data () {
      return {
        items: [
          {
            'created_at': '2020.04.01',
            'type': 'teszt',
            'result': 'pending'
          },
          {
            'created_at': '2020.04.01',
            'type': 'teszt',
            'result': 'pending'
          },
          {
            'created_at': '2020.03.31',
            'type': 'teszt',
            'result': 'negative'
          },
          {
            'created_at': '2020.03.30',
            'type': 'Tünetek',
            'result': 'Száraz köhögés, Láz - 38.8 °C'
          },
          {
            'created_at': '2020.03.28',
            'type': 'teszt',
            'result': 'positive'
          },
          {
            'created_at': '2020.03.27',
            'type': 'teszt',
            'result': 'negative'
          },
          {
            'created_at': '2020.03.25',
            'type': 'teszt',
            'result': 'positive'
          },
          {
            'created_at': '2020.03.24',
            'type': 'teszt',
            'result': 'negative'
          },

        ],
        headers: [
          {
            text: 'Dátum',
            value: 'created_at'
          },
          {
            text: 'Mérés típusa',
            value: 'type'
          },
          {
            text: 'Eredmény',
            value: 'result'
          },
          {
            value: 'actions'
          }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'isLogged'
      ])
    },
    methods: {

      getUser () {
        this.$api.get('/user').then(response => {
          console.log(response.data)
        })
      },
      logout () {
        this.$store.dispatch('logout')
      }
    },
    components: {}
  }
</script>
