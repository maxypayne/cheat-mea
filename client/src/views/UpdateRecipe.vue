<template>
  <div class="update" v-if="solo">
<form v-if="f" @submit.prevent="update">

    



     

    
   
   

    <div align="center">
          <h1 class="h1">Submit your recipe !</h1>
        </div>
        <label for="title">Recipe title:</label>
          <input v-model="solo.title" type="text" name="title" class="input is-medium">
 <b-container fluid>
            <b-row>
              <b-col>
                <label for="type" class="label">Type</label>
                <select name="type" form="type" v-model="solo.type" placeholder="Type" class="custom-select">
                  <option value="starter">starter</option>
                  <option value="main">main</option>
                  <option value="dessert">dessert</option>
                </select>
              </b-col>
              <b-col>
                <label for="difficulty" class="label">Difficulty</label>
                <select name="difficulty" form="difficulty" v-model="solo.difficulty" class="custom-select">
                  <option value="easy">easy</option>
                  <option value="medium">medium</option>
                  <option value="hard">hard</option>
                </select>
              </b-col>
              <b-col>
                <label for="budget" class="label">Budget</label>
                <select name="budget" form="budget" v-model="solo.budget" class="custom-select">
                  <option value="cheap">cheap</option>
                  <option value="medium">medium</option>
                  <option value="expensive">expensive</option>
                </select>
              </b-col>
            </b-row>
          </b-container>
          <div id="ingredients-wrapper">
            <br>
            <span >🧀 <span style="text-decoration:underline">Ingredients needed:</span></span>
            <br>
            <label v-for="(ingredient, i) in ingredients" :key="i+1">
              <b-row>
                <b-col>
                  <label>Ingredient {{ i + 1}}</label>
                  <input v-model="solo.ingredients[i].name" type="text" class="input">
                </b-col>
                <b-col>
                  <label >Quantity</label>
                  <input v-model="solo.ingredients[i].quantity" type="text" class="input">
                </b-col>
                <b-col>
                  <label >Unit</label>
                  <select name="unit" form="unit" v-model="solo.ingredients[i].unit" class="custom-select">
                    <option value="grams">grams</option>
                    <option value="centiliters">centiliters</option>
                    <option value="units">units</option>
                  </select>
                </b-col>
              </b-row>
            </label>
          </div>
             <a background="red" @click="addIngredient" value="Add More">Add another ingredient...</a>
     <!-- <button id="more_fields" @click="addStep" value="Add More">Add another step</button> -->
  <div id="step-wrapper">
            <br>
            <br>
            <span class="label">👨🏽‍🍳
              <span style="text-decoration:underline">Preparation:</span>
            </span>
            <br>
            <label v-for="(step, i) in steps" :key="i" class="label">Step {{ i + 1}}:
              <br>
              <input v-model="solo.steps[i]" type="text" class="input">
              <br>
            </label>
          </div>
          <a id="more_fields" @click="addStep" value="Add More">Add another step...</a>
  <label for="advisedDrink" class="label">Recommended drink:</label>
          <input v-model="advisedDrink" type="text" name="advisedDrink" class="input">
    <!-- <div id="step-wrapper">
    
    <span>Preparation:</span>
 
  <label v-for="(step, i) in steps" :key="i" >Step {{ i + 1}}:
      <input  v-model="solo.steps[i]" type="text">
      <br>
    </label>


    </div> -->

    <br><br>

    <label for="advisedDrink">Advised drink:</label>
    <input  v-model="solo.advisedDrink" type="text" name="advisedDrink">

    <br><br>

    <button class="button is-primary">Submit recipe</button>









    </form>
  <button v-if="!f" @click="handleClick">Update Recipe</button>

  </div>



  <p v-else>Loading</p>


</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      solo: [],
      f: false,
      steps: ["", ""],
      title: "",
      type: "",
      difficulty: "",
      budget: "",

      ingredients: [{ name: "", quantity: "", unit: "" }],
      files: [],
      error: null,
      advisedDrink: ""
    };
  },

  methods: {
    handleClick() {
      this.f = !this.f;
      this.$emit("hideRecipe");
    },
    update() {
      this.error = null;
      api
        .updateItem(this.$route.params.id, this.solo)
        .then(solo => {
          this.solo = solo;
          this.$router.push("/");
        })
        .catch(err => {
          this.error = err;
        });
    },
    addStep() {
      this.steps.push("");
    },
    addIngredient() {
      this.ingredients.push({ name: "", quantity: "", unit: "" });
    }
  },
  created() {
    api.getSolo(this.$route.params.id).then(solo => {
      this.solo = solo;
    });
  }
};
</script>
<style scoped>
.update {
  text-align: center;
  margin-top: 86px;
}
button {
  background: darkblue;
  padding: 7px 20px;
  color: White;
}
</style>
