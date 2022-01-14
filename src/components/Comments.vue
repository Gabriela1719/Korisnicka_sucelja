<template>
  <div id="app">
    <h1>Tell Us Your Opinion!</h1>
    <h3>Leave a Comment</h3>
    <hr>
    <ul>
      <li v-for="comment in comments" :key="comment.author">
        <h1>{{ comment.author }}</h1>
        <p style="font-size: 90%">{{ comment.text }}</p>
      </li>
    </ul>
    <input v-model="newComment" @keyup.enter="addComment" placeholder="Add your comment">
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: ['commentpost'],
  data() {
    return {
      newComment: '',
      comments: [
        {
          text: 'Looks great!',
          author: 'Ana',
        },
        {
          text: 'I love your page ! ',
          author: 'Ivana',
        },
        {
          text: 'Looks great!',
          author: 'Matea',
        },
        {
          text: 'I love your page',
          author: 'Gabriela',
        }
      ]
    }
  },
  methods: {
    addComment: function() {
      const newCommentObj = {
        text: this.newComment,
        author: 'Gabriela',
      }
      this.comments.push(newCommentObj)
      this.newComment = ''
    }
  }
}
</script>

<style scoped>
#app {
  background: #ff6666;
  color: whitesmoke;
  opacity: 0.7;
  letter-spacing: 0.04em;
  text-align: center;
  margin:10% auto 10%;
  width: 60%;
  display: table;
  padding: 20px;
  line-height: 1.4em;
  border-radius: 3%;
  font-family: 'The Nautigal', cursive;
  font-size: 100%;
  border-bottom-color: black;



}
li {
  list-style: none outside none;
  text-align: left;
  padding: 10px 0;
  border-bottom: 1px solid #555;
  color:black;
  font-size: 100%;
  border-bottom-color: black;


}
ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 35px;
  color:black;
  border-bottom-color: black;


}
hr {
  margin: 25px 0 0 32px;
  width: 300px;
  border-top: 0;
  border-bottom: 1px solid #555;
  color:black;
  border-bottom-color: black;
  }
input {
  font-family: 'Playfair Display', serif;
  width: 600px;
  margin: 80px 0;
  padding: 8px 20px;
  outline: 0;
  color: black;
  border-bottom-color: black;

}
h1 {
  color: black;
  font-size:250%;
  padding-bottom:10px;

}
h3{
  color: black;
  font-size: 200%;
}

</style>
