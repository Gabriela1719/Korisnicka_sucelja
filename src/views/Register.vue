<template>
  <Navbar/>
  <div class="background">
    <div class="shape"></div>
    <div class="shape"></div>
  </div>
  <form @submit.prevent="handleSubmit">
    <label>UserName</label>
    <input type="text" required>
    <label>Email</label>
    <input type="email" required>
    <div>
      <label>password</label>
      <input name="password" type="password" required>
    </div>
    <div>
      <label>first name</label>
      <input name="firstName" required>
    </div>
    <div>
      <label>last name</label>
      <input name="lastName" required>
    </div><div>
    <label>age</label>
    <input name="age" type="number" required>
  </div>
    <button class="btn-register">Register</button>
  </form>
</template><script>
import Navbar from "../components/Navbar";
export default {
  name: "App",
  components: { Navbar},
}
</script>

<style>
*:before,
*:after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.background{
  width: 480px;
  height: 730px;
  position: absolute;
  transform: translate(-50%,-50%);
  left: 50%;
  top: 50%;
  color: pink;
}
.background .shape{
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}/*
.shape:first-child{
  background: linear-gradient(
      #ad4018,
      #f68d23
  );
  left: -80px;
  top: -80px;
}
.shape:last-child{
  background: linear-gradient(
      to right,
      #5d1780,
      #a119f0
  );
  right: -30px;
  bottom: -80px;
}*/
form{
  height: 90%;
  width: 400px;
  background-color: pink;
  position: absolute;
  transform: translate(-50%,-50%);
  top: 58%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid palevioletred;
  box-shadow: 0 0 40px white;
  padding: 13px 25px;

}
form *{
  font-family: 'Poppins',sans-serif;
  color: white;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3{
  font-size: 2px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label{
  display: block;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 400;
  color: white;
}
input{
  display: block;
  height: 50px;
  width: 100%;
  background-color: lightpink;
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder{
  color: #e5e5e5;
}
.btn-register{
  margin-top: 50px;
  width: 100%;
  background: linear-gradient(pink, palevioletred, pink);
  color: white;
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
