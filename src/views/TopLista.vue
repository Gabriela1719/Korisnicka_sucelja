<template>
  <KNav/>
  <div v-for="powder in powders" :key="powder.title">
    <div class="home">
      <div class="project1">
        <div class="powders">
          <span>{{ powder.title }}</span>
          <img class="img" :src="powder.icon">
          <div class="dots" style="text-align:center">
            <star-rating />
          </div>
        </div>
      </div>
    </div>
  </div>
  <label>Comments</label>
</template>
<Comments/>
<script>
import KNav from "../components/KNav";
import StarRating from 'vue-star-rating'
export default {
  name: "TopLista",
  components: { KNav, StarRating},
  data(){
    return{
      comment: '',
      powders:[
        { title: 'Bourjois', icon: require('../assets/puder1.jpeg')},
        { title: 'FITme', icon: require('../assets/puder2.jpg')},
        { title: 'Catrice', icon: require('../assets/puder3.jpg')},
        { title: 'MAC', icon: require('../assets/puder6.jpg')}
      ],
    }
  },
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
