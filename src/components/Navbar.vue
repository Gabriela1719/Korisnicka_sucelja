<template>
  <nav>
    <ul class="menuItems">
      <li id="li"><a data-item='HOME'><router-link to="/">HOME</router-link></a></li>
      <li id="li"><a data-item='LOGIN'><router-link to="/login">LOGIN</router-link></a></li>
      <li id="li"><a data-item='REGISTER'><router-link to="/register">REGISTER</router-link></a></li>
    </ul>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: "Navbar",
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

</style>
