<template>
  <div class="about">
    <h1>This is a beer list (eventually)</h1>
    <p>Do we want a beer? {{ beer }} </p>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "BeerList",
    data: () => ({
     beer: "Yes please!"
  })
};
</script>