
<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container>
        <v-row class="align-center">
          <v-col cols="10">
            <router-link :to="{ name: 'BeerList'}"><h1>Beer App</h1></router-link>
            <!-- need to have a look at vuetify colors -->
          </v-col>
          <v-col cols="2" style="text-align: right;">
            <span class="px-4">
              <v-btn
                 icon
                @click.stop="dialog = true"
               >
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </span>
            <span class="px-4">
              <router-link :to="{ name: 'BeerList'}">
                <v-icon>mdi-menu</v-icon>
              </router-link>
            </span>
          </v-col>


          <v-dialog
            v-model="dialog"
            max-width="400"
          >
            <v-card>
              <v-card-title class="headline">Favourite Beers</v-card-title>

              <v-card-text>
                <v-container>
                  
                    <v-data-table v-if="this.$store.state.beers.length > 0"
                      :headers="headers"
                      :items="this.$store.state.beers"
                      :items-per-page="5"
                    ></v-data-table>
                  
                    <p v-else>You haven't selected any favourite beers yet.</p>

                </v-container>
              </v-card-text>

            <!--  <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
                >
                  Disagree
                </v-btn>

                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
                >
                  Agree
                </v-btn>
              </v-card-actions> -->
            </v-card>
          </v-dialog>

        </v-row>
      </v-container>
      
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-container>
        <v-row>
          <v-col cols="12">
            <span>test something</span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  //components: {
  //  HelloWorld
  //},

  data: () => ({
    //
    dialog: false,
    headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' }
    ]
  })
};
</script>

<style scoped>

h1 {
  color: white;
}

</style>