<template>

  <h1 class="user">Lista korisnika</h1>
  <div class="home">
    <div v-if="users.length">
      <div v-for="user in users" :key="user.id">
        <div class="project">
          <div class="actions">
            <span class="user-name">{{ user.id }}</span>
            <span class="user-name">{{ user.name }}</span>
            <span class="user-email">{{ user.email }}</span>
            <span class="material-icons"><img src="../assets/delete.png"></span>
            <span class="material-icons"><img src="../assets/edit.png"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  props: ['user'],
  data(){
    return{
      users: [],
    }
  },
  mounted() {
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => this.users = data)
        .catch(err => console.log(err.message))
  },
  methods:{

  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=The+Nautigal&display=swap');
.project {
  margin-top: 5%;
  margin-left: 40% ;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
  border-left: 4px solid #e90074;
  width: 20%;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
.user {
  margin-top: 5%;
  margin-left: 45%;
  font-family: 'The Nautigal', cursive;
  font-size: 300%;
}
</style>
