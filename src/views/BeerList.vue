<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>This is a beer list (eventually)</h1>
          <!--<BeerCard></BeerCard>-->
          <BeerCard v-for="beer in beers" :key="beer.id" :beer="beer" :page="page"></BeerCard>

      </v-col>
    </v-row>

    <template v-if="page != 1">
      <router-link
        :to="{ name: 'BeerList', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page</router-link
      >
      <template v-if="hasNextPage"> | </template>
    </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'BeerList', query: { page: page + 1 } }"
      rel="next"
    >
    Next Page</router-link
    >

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
        console.log(parseInt(response.headers['x-total-count']))
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
      },
      hasNextPage() {
        //return this.event.eventCount > this.page * this.perPage
        return true;
      }
  }


};

</script>