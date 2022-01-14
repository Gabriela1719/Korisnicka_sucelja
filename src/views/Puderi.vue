<template>
  <KNav/>
  <div class="powders">
    <img class="p1" src="../assets/poz.jpg">
    <h1 class="h1">Perfect skin powder for you</h1>
    <h3 class="h3">Dream or Reality?</h3>
    <h4 class="h4">Pick your favourite brand!</h4>
  </div>
  <div v-for="powder in powders" :key="powder.title">
  <div class="home">
    <div class="project1">
      <div class="powders">
          <span>{{ powder.title }}</span>
          <img class="img" :src="powder.icon">
        <h4>Colors</h4> <br>
        <div class="dots" style="text-align:center" >
          <span class="dot"></span>
          <span class="dot2"></span>
          <span class="dot3"></span>
          <span class="dot4"></span>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KNav from "../components/KNav";
export default {
  name: "Puderi",
  components: {KNav},
  data(){
    return{
      powders:[
        { title: 'Bourjois', icon: require('../assets/puder1.jpeg'), text: ''},
        { title: 'FITme', icon: require('../assets/puder2.jpg')},
        { title: 'Catrice', icon: require('../assets/puder3.jpg')},
        { title: 'Estee Lauder', icon: require('../assets/puder4.jpg')},
        { title: 'Max Factor', icon: require('../assets/puder5.jpg')},
        { title: 'MAC', icon: require('../assets/puder6.jpg')},
        { title: 'Artdeco', icon: require('../assets/puder7.jpg')}


      ],


    }
  },

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=The+Nautigal&display=swap');
p{
  color: white;
}
.p1{
 width: 100%;
}
.h1{
  color: #691665;
  position: absolute;
  bottom: 60%;
  left: 20%;
}
.h3{
  color: #691665;
  position: absolute;
  bottom: 50%;
  left: 20%
}
.h4{
  color: #691665;
  position: absolute;
  bottom: 40%;
  left: 20%
}
.powders{
  font-family: 'The Nautigal', cursive;
  font-size: 300%;
}
.puder1{
  width: 20%;
  background-color: black;
}
.project1 {
  margin-top: 5%;
  padding: 10px 100px;
  border-radius: 4px;
  border-left: 4px solid #642244;
  width: 2%;
  margin-left: 10%;
}
.powders {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img{
  width: 800%;
}
.dot {
  height: 40px;
  width: 40px;
  background-color: #FFEBCD;
  border-radius: 50%;
  display: inline-block;
}
.dot2 {
  height: 40px;
  width: 40px;
  background-color: #FFDEAD;
  border-radius: 50%;
  display: inline-block;
}
.dot3 {
  height: 40px;
  width: 40px;
  background-color: #b47844;
  border-radius: 50%;
  display: inline-block;
}
.dot4 {
  height: 40px;
  width: 40px;
  background-color: #ad814f;
  border-radius: 50%;
  display: inline-block;
}
.dots{
  margin-left: 70%;
}
.button4{
  background-color: #e7e7e7;
  width: 500%;
  height: 20%;
  margin-left: 50%;
}
.show-more{
  width: 50%;
}
</style>
