<template>

    <v-container>

      <v-row class="beer-card -shadow" >
        <v-col class="beer-image" cols="12" sm="6">
          <img :src="beer.image_url" :alt="beer.name" width="50">
        </v-col>
        <v-col cols="12" sm="6">
          <p class="title"> {{ beer.name }} </p>
          <p class="tagline"> {{ beer.tagline }} </p>
          <p> ABV: {{ beer.abv }}% </p>
          <p> {{ beer.description }}</p>
          <p>Ingredients:</p>
          <p>Malt</p>
          <p>Hops</p>
          <p>Yeast</p>
        </v-col>
      </v-row>

    </v-container>

</template>

<script>

import BeerService from "@/services/BeerService.js";

export default {
    name: "BeerShow",
    props: ['id', 'page'],
    data: () => ({
        beer: {}
    }),
    created() {
        BeerService.getBeer(this.id).then( response => {
            console.log(response.data[0])
            this.beer = response.data[0]
            console.log(this.beer)
        }).catch( error => {
        console.log(error);
        });
    }



}
</script>
