<template>
  <v-container>
    <v-row class="search-items">
      <v-col sm="3" cols="12">
        <v-text-field v-model="message" label="Search Term"></v-text-field>
      </v-col>
      <v-col sm="2" cols="12">
        <v-select
          :items="items"
          label="Ingredient"
          v-model="selected"
        ></v-select>
      </v-col>
      <v-col sm="1" cols="12">
        <v-btn icon color="primary" @click="searchBeer"><v-icon>mdi-magnify</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row class="search-results">
      <v-col sm="3" cols="12">Search Results</v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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
     perPage: 4,
     message: 'test',
     selected: 'hops',
     items: ['Hops', 'Malt', 'Yeast']
  }),
  created() {
    BeerService.getBeers(this.perPage,this.page, this.searchParams).then( response => {
        console.log(response)
        console.log(parseInt(response.headers['x-total-count']))
        this.beers = response.data
        console.log("Response length: " + this.beers.length)
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
      },
      searchParams(){
        return this.selected.toLowerCase() + '=' + this.message.toLowerCase()
      }
  },
  methods: {
    searchBeer() {

        console.log(this.searchParams)
        BeerService.getBeers(this.perPage,this.page, this.searchParams).then( response => {
          console.log(response)
          console.log(parseInt(response.headers['x-total-count']))
          this.beers = response.data
        }).catch( error => {
            console.log(error);
        });
    }
  }


};

</script>

<style scoped>
.search-items, .search-results {
  justify-content: center;
}
.row {
  align-items: center;
}
</style>