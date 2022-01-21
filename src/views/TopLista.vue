<template>
  <KNav/>
  <div v-for="powder in powders" :key="powder.title">
    <div class="home">
      <div class>
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
  <Comments/>
</template>
<script>
import KNav from "../components/KNav";
import StarRating from 'vue-star-rating'
import Comments from "../components/Comments";
export default {
  name: "TopLista",
  components: {Comments, KNav, StarRating},
  data(){
    return{
      comment: '',
      powders:[
        { title: '1.'+ ''+'Bourjois', icon: require('../assets/puder1.jpeg')},
        { title: '2.' + ''+'FITme', icon: require('../assets/puder2.jpg')},
        { title: '3.'+ ''+'Catrice', icon: require('../assets/puder3.jpg')},
        { title: '4.' + ''+ 'MAC', icon: require('../assets/puder6.jpg')},
        { title: '5.' + ''+ 'Estee Lauder', icon: require('../assets/puder4.jpg')},

      ],
    }
  },
}
</script>

<style scoped>

.powders {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-top: 5%;
  width: 2%;
  margin-left: 25%;
}
img{
  width: 800%;
}
</style>
