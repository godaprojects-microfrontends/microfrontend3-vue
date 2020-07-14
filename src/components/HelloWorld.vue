<template>
  <div class="hello">
    Goda's Vue Component <br/> Data obtained: <br/> Message from App.vue: {{msg}} | Message from main.js: {{example}} | Data from micro frontend container: {{data}} | JSON data from main.js: {{jsonData}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    example: String,
    data: String,
    jsonData: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  font-family: 'Courier New', Courier, monospace;
}
</style>
