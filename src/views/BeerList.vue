<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>This is a beer list (eventually)</h1>
          <!--<BeerCard></BeerCard>-->
          <BeerCard v-for="beer in beers" :key="beer.id" :beer="beer"></BeerCard>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import BeerCard from "@/components/BeerCard.vue";
import BeerService from "@/services/BeerService.js";

export default {
  name: "BeerList",
  components: { BeerCard },
  data: () => ({
     beers: [

     ],
     perPage: 4
  }),
  created() {
    BeerService.getBeers(this.perPage,this.page).then( response => {
        console.log(response)
        this.beers = response.data
    }).catch( error => {
    console.log(error);
    });
  },
  computed: {
      page() {
      // What page we're currently on
      console.log('Page: ' + parseInt(this.$route.query.page))
      return parseInt(this.$route.query.page) || 1
    }
  }


};

</script>