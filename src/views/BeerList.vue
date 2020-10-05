<template>
  <v-container>
    <v-row class="search-items">
      <v-col sm="3" cols="12">
        <v-text-field v-model="searchText" label="Search Term"></v-text-field>
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
    <v-row v-if="this.displaySearchResults" class="search-results">
      <v-col class="col-sm-6 col-12">
        <v-card>
          <v-card-title>Search Results</v-card-title>
          <v-card-text>
            Showing result for "{{ this.calcSearchTerm }}" in "{{ this.calcSearchSelected }}" 
            <router-link :to="{ name: 'BeerList', params: {searchProp: '', itemProp: '' } }" >Clear results?</router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
          <!--<BeerCard></BeerCard>-->
        <template v-if="beers.length">
          <BeerCard v-for="beer in beers" :key="beer.id" :beer="beer" :page="page"></BeerCard>
        </template>
        <div class="results" v-else>
          <p>There are no beers that match your search.</p>
        </div>

      </v-col>
    </v-row>

    <template v-if="page != 1">
      <router-link
        :to="{ name: 'BeerList', query: { page: page - 1 }, params: {searchProp: this.calcSearchTerm, itemProp: this.calcSearchSelected } }"
        rel="prev"
      >
        Prev Page</router-link
      >
      <template v-if="hasNextPage"> | </template>
    </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'BeerList', query: { page: page + 1 }, params: {searchProp: this.calcSearchTerm, itemProp: this.calcSearchSelected } }"
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
  props: {
    searchProp: String,
    itemProp: String
  },
  data: () => ({
     beers: [

     ],
     perPage: 4,
     searchText: '',
     selected: '',
     displaySearchResults: false,
     items: ['Hops', 'Malt', 'Yeast']
  }),
  created() {
    this.displaySearchResults = this.searchParams
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
      calcSearchSelected() {
        return ((this.itemProp && this.itemProp.length) ? this.itemProp : this.selected)
      },
      calcSearchTerm() {
        return ((this.searchProp && this.itemProp.length) ? this.searchProp : this.searchText)
      },
      searchParams(){
        if(this.calcSearchSelected.length && this.calcSearchTerm.length) {
          return this.calcSearchSelected.toLowerCase() + '=' + this.calcSearchTerm.toLowerCase()
        }
        else {
          return null
        }
      }
  },
  methods: {
    searchBeer() {
      if(this.searchParams) {
        console.log(this.searchParams)
        BeerService.getBeers(this.perPage,this.page, this.searchParams).then( response => {
          console.log(response)
          console.log(parseInt(response.headers['x-total-count']))
          this.beers = response.data
          this.displaySearchResults = true
        }).catch( error => {
            console.log(error);
        });
      }
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
.results {
  text-align: center;
}
</style>