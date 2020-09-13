<template>
  <v-container>
    <router-link :to="{ name: 'BeerShow', params: { id: beer.id }}">
      <v-row class="beer-card -shadow" >
        <v-col class="beer-image" cols="12" sm="6">
          <img :src="beer.image_url" :alt="beer.name" width="50">
        </v-col>
        <v-col cols="12" sm="6">
          <p class="title"> {{ beer.name }} </p>
          <p class="tagline"> {{ beer.tagline }} </p>
          <p> {{ beer.abv }}% </p>
          <p> {{ beer.description }}</p>
        </v-col>
      </v-row>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "BeerCard",
  props: { beer: Object },

};
</script>

<style scoped>

.beer-card{
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.beer-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.beer-card > .title {
  margin: 0;
}
.beer-card > .tagline {
  font-style: italic;
}
.beer-image {
  text-align:center;
}
</style>
