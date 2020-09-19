import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BeerShow from "../views/BeerShow.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/beer-list",
    name: "BeerList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BeerList.vue")
  },
  {
    path: "/beer/:id",
    name: "BeerShow",
    component: BeerShow,
    props: true
  // component: () =>
  //    import(/* webpackChunkName: "about" */ "../views/BeerShow.vue")
  // testing something
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
