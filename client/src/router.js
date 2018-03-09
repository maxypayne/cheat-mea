import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import CreateRecipe from "./views/CreateRecipe.vue";
import RecipeInfo from "./views/RecipeInfo.vue";
import Comments from "./views/Comments.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/profile",
      component: Profile
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/recipe",

      component: CreateRecipe
    },
    {
      path: "/recipe/:id",
      component: RecipeInfo,
      name: "recipeInfo"
    },
    {
      path: "/comments",
      component: Comments
    }
  ]
});
