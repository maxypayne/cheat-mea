<template>
  <b-container>
     
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://lorempixel.com/1024/480/technics/2/"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/8/">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel>

    <p class="mt-4">
      Slide : {{ slide }}<br>

    </p>
    
      <input type="text" v-model="search"/>
    <b-card-group columns>
      
      <ul> 
         <li v-for="recipe in filteredRecipes" :key="recipe">
         
        
   
          
        <b-card title="Title"
                :img-src=recipe.picture
                img-fluid
                img-alt="image"
                img-top>
            <p class="card-text">
              <img src="recipe.picture" alt="">
              {{recipe.title}}

              
              {{recipe.type}}
              {{recipe.dificulty}}
            </p>
            <small class="text-muted">Last updated 3 mins ago</small>
            <router-link :to="`recipe/${recipe._id}`">More info</router-link> <br>
           
        </b-card>
         </li>
        
          </ul>
         </b-card-group>
     
</b-container>


</template>

<script>
import api from "../api";
import { Carousel, Slide } from "vue-carousel";
export default {
  data() {
    return {
      recipes: [],
      slide: 0,
      sliding: null,
      search: ""
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },

  created() {
    api.getRecipe().then(recipes => {
      this.recipes = recipes;
    });
    api.showComments().then(comments => {
      this.comments = comments;
    });
  },

  computed: {
    filteredRecipes() {
      var self = this;
      return this.recipes.filter(function(cust) {
        return cust.title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      });
      return this.customers;
    }
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
}
</style>
