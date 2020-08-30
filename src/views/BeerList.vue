<template>
  <div class="about">
    <h1>This is a beer list (eventually)</h1>
    <!--<BeerCard></BeerCard>-->
    <BeerCard v-for="beer in beers" :key="beer.id" :beer="beer"></BeerCard>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

import BeerCard from "@/components/BeerCard.vue";

export default {
  name: "BeerList",
  components: { BeerCard },
  data: () => ({
     beers: [
         {
             beerName: 'beer1'
         },
         {
             beerName: 'beer2'
         }
     ]
  })


};

</script>