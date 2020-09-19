<template>

    <v-container>
        <BeerCard :beer="beer"></BeerCard> 
        <!--<p> {{ beer.description  }} </p> test-->
    </v-container>

</template>

<script>

import BeerCard from "@/components/BeerCard.vue";
import BeerService from "@/services/BeerService.js";

export default {
    name: "BeerShow",
    components: { BeerCard },
    props: ['id'],
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
