<template>

    <v-container>

      <v-row>
          <router-link :to="{ name: 'BeerList', query: { page: page } }">
            <v-icon>mdi-chevron-left</v-icon>
          </router-link>
      </v-row>
      <v-row class="beer-card -shadow" >
        <v-col class="beer-image" cols="12" sm="6">
          <img :src="beer.image_url" :alt="beer.name" width="50">
        </v-col>
        <v-col cols="12" sm="6">
          <p class="title"> {{ beer.name }} </p>
          <p class="tagline"> {{ beer.tagline }} </p>
          <p> ABV: {{ beer.abv }}% </p>
          <p> {{ beer.description }}</p>

          <div class="ingredients" v-if="beer.ingredients">
            <p class="title">Ingredients:</p>
            <template v-if="beer.ingredients.malt">
                <p>Malt:</p>
                <ul>
                    <li v-for="malt in beer.ingredients.malt" :key="malt.id">
                        {{ malt.name }}
                    </li>
                </ul>
            </template>



            <template v-if="beer.ingredients.hops">
                <p>Hops:</p>
                <ul>
                    <li v-for="hops in beer.ingredients.hops" :key="hops.id">
                        {{ hops.name }}
                    </li>
                </ul>
            </template>

            <template v-if="beer.ingredients.yeast">
                <p>Yeast:</p>
                <p> {{ beer.ingredients.yeast }} </p>
            </template>

          </div>


        </v-col>

        {{ this.page }}
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

<style scoped>
.ingredients p {
    margin-bottom: 10px;
}
.ingredients ul {
    margin-bottom: 20px;
}
.ingredients p:last-child {
    margin-bottom: 16px;
}

</style>
