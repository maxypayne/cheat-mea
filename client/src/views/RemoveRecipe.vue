 <template>
   
 <button v-on:click="removeElement(i)">remove</button>
 </template>
 <script>
export default {
  removeElement(index) {
    api.removeElement(this.recipes[index]._id).then(() => {
      this.recipes.splice(index, 1);
    });
  }
};
</script>
 