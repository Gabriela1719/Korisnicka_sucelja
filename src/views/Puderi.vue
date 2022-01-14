<template>
  <KNav/>
  <div class="powders">
    <img class="p1" src="../assets/poz.jpg">
    <h1 class="h1">Perfect skin powder for you</h1>
    <h3 class="h3">Dream or Reality?</h3>
    <h4 class="h4">Pick your favourite brand!</h4>
  </div>
  <button class="button button1" @click="showDetails()">Show Details</button>
  <div v-for="powder in powders" :key="powder.title">
  <div class="home">
    <div class="project1">
      <div class="powders">
          <span>{{ powder.title }}</span>
        <p class="description" v-if="show">  {{ powder.text }} </p>
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
export  default {
  name: "Puderi",
  components: {KNav},
  data() {
    return {
      show: false,
      powders: [
        {id: 1, title: 'Bourjois', icon: require('../assets/puder1.jpeg'), text:"besprijekoran izgled do 16 sati" +
              "srednje prekrivanje, ujednačava ton kože i ne začepljuje pore\n" +
              "kristalni pigmenti reflektiraju svjetlost i daju vašoj koži zdrav sjaj\n" +
              "lagana tekstura se lako nanosi i ne osjeća se teško na koži\n" +
              "slobodni radikali štite kožu od vanjskih čimbenika" },
        {id: 2, title: 'FITme', icon: require('../assets/puder2.jpg'), text:"besprijekoran izgled do 12 sati\n" +
              "srednje prekrivanje, ujednačava ton kože i ne začepljuje pore\n" +
              "kristalni pigmenti reflektiraju svjetlost i daju vašoj koži zdrav sjaj\n" +
              "lagana tekstura se lako nanosi i ne osjeća se teško na koži\n" +
              "slobodni radikali štite kožu od vanjskih čimbenika"},
        {id: 3, title: 'Catrice', icon: require('../assets/puder3.jpg'), text:"24-satni dugotrajni puder s visokim prekrivanjem za gladak, matirani ten\n" +
              "S niacinamidom koji pročišćava kožu, otporan na vodu i znoj\n" +
              "Ultra lagana, nemasna, tekuća tekstura\n" +
              "Vegan"},
        {id: 4, title: 'Estee Lauder', icon: require('../assets/puder4.jpg'),text:"Za svaki ton i podton kože. Dugotrajni puder Estée Lauder Double Wear Stay-in-Place dostupan je u širokom rasponu nijansi među kojima ćete lako odabrati onu pravu, baš po mjeri vaše kože. Na licu je nevjerojatno lagan i ugodan, a ipak se može pohvaliti 24-satnom postojanošću. Savršeno ujednačava ten, prekriva nesavršenosti i otporan je na dodire."},
        {id: 5, title: 'Max Factor', icon: require('../assets/puder5.jpg'), text:"Max Factor Facefinity All Day Flawless 3u1 tekući puder je primer, korektor i puder u jednom proizvodu. Korektor prekriva podočnjake, crvenilo, prištiće i nepravilnosti na koži. Primer priprema kožu za iznimnu dugotrajnost pudera. Puder sa zaštitnim faktorom 20 štiti kožu od UV zraka i osigurava potpuno prekrivanje i mat efekt. Zahvaljujući novoj Flexi-Hold™ tehnologiji puder se pomiče zajedno s kožom, ne puca i ne nakuplja se u pregibima na koži te osigurava ugodan osjećaj tijekom cijelog dana!"},
        {id: 6, title: 'MAC', icon: require('../assets/puder6.jpg'), text:"MAC Studio Fix Fluid, 30 ml, Puder za žene, Make-up MAC Studio Fix Fluid ujednačit će ten vaše kože i prekriti sve njene nepravilnosti.Svojstva:za dugotrajni efektštiti od sunčevih zrakazaglađuje površinu kožeNačin upotrebe:Nježnim potezima nanesite make-up na lice. Prstima, spužvicom ili kistom ravnomjerno i temeljito razmažite."},
        {id: 7, title: 'Artdeco', icon: require('../assets/puder7.jpg'), text:"MAC Studio Fix Fluid, 30 ml, Puder za žene, Make-up MAC Studio Fix Fluid ujednačit će ten vaše kože i prekriti sve njene nepravilnosti.Svojstva:za dugotrajni efektštiti od sunčevih zrakazaglađuje površinu kožeNačin upotrebe:Nježnim potezima nanesite make-up na lice. Prstima, spužvicom ili kistom ravnomjerno i temeljito razmažite."}
      ],
    }
  },
  methods: {
    showDetails() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=The+Nautigal&display=swap');
.description{
  color: black;
  font-size: 20%;
  font-family: 'Luxurious Roman', cursive;
  margin-left: 20%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.puder1{
  width: 20%;
  background-color: red;
}
.project1 {
  margin-top: 5%;
  padding: 10px 100px;
  border-radius: 4px;
  border-left: 4px solid #642244;
  width: 2%;
  margin-left: 5%;
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
  float-displace: auto;
}
.dot2 {
  height: 40px;
  width: 40px;
  background-color: #FFDEAD;
  border-radius: 50%;
  display: inline-block;
  float: left;
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
.details{

}
.button {
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin-top: 5%;
  margin-left: 45%;
}


.button1 {
  background:linear-gradient(#b051b0, #5d235d, #cc6dcc);
}

</style>
