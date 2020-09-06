<template>

    <v-container>
        <h1>Did I make it to individual page?</h1>
        <p>Maybe....</p>
        <p>The id is {{ id }} </p>

    </v-container>

</template>

<script>

import BeerService from "@/services/BeerService.js";

export default {
    name: "BeerShow",
    props: ['id'],
    data: () => ({
        beer: {}
    }),
    created() {
        BeerService.getBeer(this.id).then( response => {
            console.log(response)
            this.beer = response.data
        }).catch( error => {
        console.log(error);
        });
    }



}
</script>
