<template>
  <div>
    <p>Do we want a beer? {{ beer.beerName }}</p>
  </div>
</template>

<script>
export default {
  name: "BeerCard",
  props: { beer: Object },

};
</script>
