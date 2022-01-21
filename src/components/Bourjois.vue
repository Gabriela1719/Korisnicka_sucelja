<template>
  <div class="text"><p>Besprijekoran izgled do 16 sati</p>
    <p>Srednje prekrivanje, ujednačava ton kože i ne začepljuje pore</p>
    <p>Kristalni pigmenti reflektiraju svjetlost i daju vašoj koži zdrav sjaj</p>
    <p>Lagana tekstura se lako nanosi i ne osjeća se teško na koži</p>
    <div class="dots" style="text-align:center" >
      <span class="dot"></span>
      <span class="dot2"></span>
      <span class="dot3"></span>
      <span class="dot4"></span>
    </div>
  </div>

</template>

<script>
export default {
  name: "Bourjois"
}
</script>

<style scoped>
div p{
  color: black;
  font-size: 50%;
}
.dot {
  height: 40px;
  width: 40px;
  background-color: #FFEBCD;
  border-radius: 50%;
  display: inline-block;
  float-displace: auto;
  position: absolute;
  left: 10%;
}
.dot2 {
  height: 40px;
  width: 40px;
  background-color: #FFDEAD;
  border-radius: 50%;
  display: inline-block;
  float: left;
  position: absolute;
  left: 20%;
}
.dot3 {
  height: 40px;
  width: 40px;
  background-color: #b47844;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 30%;
}
.dot4 {
  height: 40px;
  width: 40px;
  background-color: #ad814f;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 40%;
}
.dots{
  margin-left: 70%;
}
</style>
