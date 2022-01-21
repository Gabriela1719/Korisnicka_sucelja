<template>
  <KNav/>
  <div class="powders">
    <img class="p1" src="../assets/poz.jpg">
    <h1 class="h1">Perfect skin powder for you</h1>
    <h3 class="h3">Dream or Reality?</h3>
    <h4 class="h4">Pick your favourite brand!</h4>
  </div>
  <div class="ppp">
   <div><img class="p-1" src="../assets/puder1.jpeg"><h1 id="h1">Bourjois</h1>
     <button @click="showDetails" class="b1">Click for details</button>
   </div>
    <div class="border"><img class="p-2" src="../assets/puder2.jpg"><h1 id="h2">FITme</h1>
      <bourjois class="bourjois" v-if="show"/>
      <button @click="showDetails" class="b2">Click for details</button>
    </div>
    <div><img class="p-3" src="../assets/puder3.jpg"><h1 id="h3">Catrice</h1><button class="b3">Click for details</button></div>
    <div><img class="p-4" src="../assets/puder4.jpg"><h1 id="h4">Estee Lauder</h1>
      <button class="b4">Click for details</button></div>
    <div><img class="p-5" src="../assets/puder5.jpg"><h1 id="h5">Max Factor</h1>
      <button class="b5">Click for details</button></div>
    <div><img class="p-7" src="../assets/puder7.jpg"><h1 id="h7">Artdecoo</h1>
      <button class="b7">Click for details</button></div>
    <div><img class="p-6" src="../assets/puder6.jpg"><h1 id="h6">MAC</h1>
      <button class="b6">Click for details</button></div>
    <div><img class="p-8" src="../assets/puder8.jpg"><h1 id="h8">Dior</h1>
      <button class="b8">Click for details</button></div>
  </div>
</template>
<script>
import KNav from "../components/KNav";
import Bourjois from "../components/Bourjois";
export  default {
  name: "Puderi",
  components: {Bourjois, KNav},
  data() {
    return {
      show: false,
    /*  powders: [
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
      ],*/
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

.b1{
  position: absolute;
  left: 19%;
  top: 190%;
  font-family: 'The Nautigal', cursive;
}
.b2{
  position: absolute;
  left: 35%;
  top: 190%;
  font-family: 'The Nautigal', cursive;
}
.b3{
  position: absolute;
  left: 55%;
  top: 190%;
  font-family: 'The Nautigal', cursive;
}
.b4{
  position: absolute;
  left: 18.5%;
  top: 245%;
  font-family: 'The Nautigal', cursive;
}
.b5{
  position: absolute;
  left: 34.5%;
  top: 245%;
  font-family: 'The Nautigal', cursive;
}
.b7{
  position: absolute;
  left: 75%;
  top: 190%;
  font-family: 'The Nautigal', cursive;
}
.b6{
  position: absolute;
  left: 56%;
  top: 245%;
  font-family: 'The Nautigal', cursive;
}
.b8{
  position: absolute;
  left: 75%;
  top: 245%;
  font-family: 'The Nautigal', cursive;
}
#h1{
  position: absolute;
  left: 34%;
  top: 185%;
  font-family: 'The Nautigal', cursive;
}

#h2{
  position: absolute;
  left: 18%;
  top: 185%;
  font-family: 'The Nautigal', cursive;
}

#h3{
  position: absolute;
  left: 54.5%;
  top: 185%;
  font-family: 'The Nautigal', cursive;
}
#h4{
  position: absolute;
  left: 73%;
  top: 185%;
  font-family: 'The Nautigal', cursive;
}
#h5{
  position: absolute;
  left: 16%;
  top: 240%;
  font-family: 'The Nautigal', cursive;
}
#h7{
  position: absolute;
  left: 34%;
  top: 240%;
  font-family: 'The Nautigal', cursive;
}
#h6{
  position: absolute;
  left: 55%;
  top: 240%;
  font-family: 'The Nautigal', cursive;
}
#h8{
  position: absolute;
  left: 75%;
  top: 240%;
  font-family: 'The Nautigal', cursive;
}
.p-2{
  position: absolute;
  left: 13%;
  width: 15%;
  border: 5px solid #555;
}
.p-1{
  position: absolute;
  left: 29%;
  width: 15%;
  border: 5px solid #555;
}
.p-3{
  position: absolute;
  left: 49%;
  width: 15%;
  border: 5px solid #555;
}
.p-4{
  position: absolute;
  left: 69%;
  width: 15%;
  border: 5px solid #555;
}
.p-6{
  position: absolute;
  left: 50%;
  top: 210%;
  width: 15%;
  border: 5px solid #555;
}
.p-7{
  position: absolute;
  left: 29%;
  top: 210%;
  width: 15%;
  border: 5px solid #555;
}
.p-5{
  position: absolute;
  left: 13%;
  width: 15%;
  top: 210%;
  border: 5px solid #555;
}
.p-8{
  position: absolute;
  left: 69%;
  top: 210%;
  width: 15%;
  border: 5px solid #555;
}
.ppp{
  margin-top: 10%;
}
.naslov{
  font-family: 'The Nautigal', cursive;
  font-size: 200%;
  position: absolute;
  left: 10%;
}
img{
  width: 30%;
}
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
.img{
  width: 800%;
}
.bourjois{
  position: absolute;
  top:192%;
  left: 28%;
}
</style>
