<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container>
        <v-row class="align-center">
          <v-col cols="10">
            <h1>Beer App</h1>
          </v-col>
          <v-col cols="2">
            <span>Menu placeholder</span>
          </v-col>
        </v-row>
      </v-container>
      
    </v-app-bar>

    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-container>
        <v-row>
          <v-col cols="12">
            <span>test something</span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  //components: {
  //  HelloWorld
  //},

  data: () => ({
    //
  })
};
</script>
