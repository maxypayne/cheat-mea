<template>

  <b-container v-if="recipe">

    
    <b-row class="justify-content-md-center">
      <b-col col lg="8">
        <b-img class="addBorder" src="https://assets.marthastewart.com/styles/wmax-750/d33/macaroonsopener101d-098-mld110756/macaroonsopener101d-098-mld110756_horiz.jpg?itok=-6hODeVV"
          center width="900" height="400" blank-color="#bbb" alt="img" />
        <div class="recipeinfo">
          <h1>{{recipe.title}}</h1>
          <br>
        </div>
        <div class="type">
          <div v-if="recipe.type == 'dessert'">
            Type :
            <img width="50px" height="50px" :src="dessert" alt="">
          </div>
          <div v-if="recipe.type == 'starter'">
            Type :
            <img width="50px" height="50px" src="../assets/starter2.png" alt="">
          </div>
          <div v-if="recipe.type == 'main'">
            Type :
            <img width="50px" height="50px" src="../assets/burger.png" alt="">
          </div>
        </div>
        <div class="difficulty">
          <span v-if="recipe.difficulty == 'easy'">
            Difficulty :
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/food.png" alt="">
            <img class="food" src="../assets/food.png" alt="">

          </span>
          <div v-else-if="recipe.difficulty == 'medium'">
            Difficulty :
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/food.png" alt="">

          </div>
          <div v-else-if="recipe.difficulty == 'hard'">
            Difficulty :
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/plat1.png" alt="">
            <img class="food" src="../assets/plat1.png" alt="">

          </div>
        </div>
        <div class="budget">
          <span v-if="recipe.budget == 'cheap'">
            Budget :
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget1.png" alt="">
            <img class="food" src="../assets/budget1.png" alt="">

          </span>

          <span v-else-if="recipe.budget == 'medium'">
            Budget :
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget1.png" alt="">

          </span>
          <span v-else-if="recipe.budget == 'expensive'">
            Budget :
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget.png" alt="">
            <img class="food" src="../assets/budget.png" alt="">

          </span>
        </div> <!-- budget-->

        <div class="ingredient-steps">
          <div class="steps">
            <h1 class="stepsheader">Steps</h1>
          <div v-for="(step,i) in recipe.steps" class="stepsbody" :key="i">
             {{i + 1}} : {{ step }}<hr>
          </div>
          </div>
          <div class="ingredients">
            <h1 class="ingredientsheader">Ingredients</h1>
                <div v-for="(step,i) in recipe.steps" class="stepsbody" :key="i">
             {{i + 1}} : {{ step }}
          </div>
          </div>
        </div>






    <star-rating></star-rating>
    <div class="recipeinfo">
          <h1>Add you comment here</h1>
          <br>
    </div>
    <comments :recipeId="recipe._id"></comments>
      </b-col>
        
    </b-row>
  </b-container>






</template>



<script>
import api from "../api";
import Comments from "./Comments";
import StarRating from "./StarRating";

export default {
  data() {
    return {
      recipe: null,
      f: false,
      counte: 0,
      dessert:
        "http://icons.iconarchive.com/icons/mohsenfakharian/christmas/512/piece-of-cake-icon.png"
    };
  },
  components: { Comments, StarRating },

  methods: {
    addStep() {
      this.steps.push("");
    },
    removeElement(index) {
      api.removeElement(this._id).then(() => {
        this.recipes.splice(index, 1);
      });
    }
  },
  created() {
    api.getSolo(this.$route.params.id).then(recipe => {
      this.recipe = recipe;
    });
  }
};
</script>
<style scoped>
.addBorder {
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
}

h1 {
  font-size: 42px;
}

.recipeinfo {
  text-align: center;
  padding-top: 35px;
}

.food {
  width: 50px;
  height: 40px;
}
.type {
  border: 2px solid rgb(3, 97, 121);
  display: inline-block;
  padding: 10px 20px;
  border-radius: 35px 0 35px;
}
.difficulty {
  border: 2px solid rgb(107, 3, 121);
  display: inline-block;
  padding: 10px 20px;
  margin: 0 12px;
}
.budget {
  border: 2px solid rgb(167, 66, 7);
  display: inline-block;
  padding: 10px 20px;
  border-radius: 0 35px 0 35px;
}
.ingredient-steps {
  width: 100%;
  padding-top: 30px;
  height: 400px;
}
.steps {
  float: left;
  width: 70%;
  border: 3px solid gray;
  box-sizing: border-box;
  padding: 30px;
}
.ingredients {
  width: 28%;
  float: left;
  box-sizing: border-box;
  padding: 30px;
}
</style>