<template>
  <Navbar/>
  <img class="pic5" src="../assets/cosmetics.jpg">
  <div class="footer-position">
    <Footer/>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
export default {
  name: 'Home',
  components: {Footer, Navbar}
}
</script>
<style>
.footer-position{
  position: fixed;
  top: 70%;
  width: 100%;
}
.pic5{
  width: 100%;
}
</style>
