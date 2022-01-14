<template>
  <nav>
    <ul class="menuItems">
      <li id="li"><a data-item='PUDER'><router-link to="/puderi">PUDERI</router-link></a></li>
      <li id="li"><a data-item='TOP LISTA'><router-link to="/toplista">TOP LISTA</router-link></a></li>
      <button @click="onClick" class="btn-logout">
        <img class="logout" src="../assets/check-out.png">
      </button>
    </ul>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    onClick(){
      this.$router.push({path:"/"})
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
p {
  margin: 10px;
  font-size: 96px;
  color: #ccc;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 1s ease-in-out;
  position: relative;

  &::before {
    content: attr(data-item);
    transition: all 1s ease-in-out;
    color: #727272;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0;
    overflow: hidden;
  }

  &:hover {
    &::before {
      width: 10%;
    }
  }
}

nav {
  background: #f9f9f9;
  .menuItems {
    list-style: none;
    display: flex;

    #li {
      margin: 20px;

      a {
        text-decoration: none;
        color: #8f8f8f;
        font-size: 24px;
        font-weight: 400;
        transition: all 0.5s ease-in-out;
        position: relative;
        text-transform: uppercase;

        &::before {
          content: attr(data-item);
          transition: 0.5s;
          color: #727272;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 0;
          overflow: hidden;
        }

        &:hover {
          &::before {
            width: 100%;
            transition: all 0.5s ease-in-out;
          }
        }
      }
    }
  }
}
.logout{
  width: 100%;
}
.btn-logout{
  margin-top: 0.6%;
  margin-left: 82%;
  width: 6%;
  height: 1%;
  background: linear-gradient(#561562, #f1ecec, #500e50);
  opacity: 0.7;
  float: right;
}
</style>
