<template>
  <KNav/>
  <div class="home">
    <div class="project1">
      <div class="powders">
        <h1>Bourjois</h1>
        <img src="../assets/puder1.jpeg">
        <star-rating />
      </div>
        </div>
    <div class="project1">
      <div class="powders">
        <h1>FITme</h1>
        <img src="../assets/puder2.jpg">
        <star-rating />
      </div>
    </div>
    <div class="project1">
      <div class="powders">
        <h1>Catrice</h1>
        <img src="../assets/puder3.jpg">
        <star-rating />
      </div>
    </div>
  </div>
</template>

<script>
import KNav from "../components/KNav";
import StarRating from 'vue-star-rating'
export default {
  name: "TopLista",
  components: {KNav, StarRating},

}
</script>

<style scoped>
.project1 {
  margin-top: 5%;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
  border-left: 4px solid #e90074;
  width: 2%;
  margin-left: 10%;
}
.powders {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img{
  width: 800%;
}
</style>
