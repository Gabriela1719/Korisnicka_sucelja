<template>
    <Navbar/>
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form @submit.prevent="handleSubmit">
      <h3>Login Here</h3>

      <label>UserName</label>
      <input
          v-model="username"
          type="text"
          required
      >

      <label>Email</label>
      <input
          v-model="email"
          type="email"
          required
      >
      <button class="btn-login">Log In</button>
    </form>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "AddUser",
  components: {Navbar},
  data() {
    return {
      username: '',
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      let project = {
        email: this.email,
        username: this.username,
        complete: false,
        id: Math.floor(Math.random() * 10000)
      }
      this.$router.push({path:"/puderi"})
      console.log(project)
    }
  }
}
</script>

<style scoped>
*:before,
*:after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.background{
  width: 480px;
  height: 520px;
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
  color: white;
}
.background .shape{
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}

form{
  height: 420px;
  width: 400px;
  background-color: rgba(255,255,255,0.13);
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;
}
form *{
  font-family: 'Poppins',sans-serif;
  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3{
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label{
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
}
input{
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(3, 3, 3, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder{
  color: #e5e5e5;
}
.btn-login{
  margin-top: 70px;
  width: 100%;
  background: linear-gradient(white, #989894, white);
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.social{
  margin-top: 30px;
  display: flex;
}
.social div{
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  color: #eaf0fb;
  text-align: center;
}
.social div:hover{
  background-color: rgba(255,255,255,0.47);
}
.social .fb{
  margin-left: 25px;
}
.social i{
  margin-right: 4px;
}
</style>
