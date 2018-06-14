<template>
  <div class="hello">
    hi
    <h1>{{ msg }}</h1>
    <router-link to="/HelloWorld">HelloWorld</router-link>
  </div>
</template>

<script>
export default {
  name: 'HiWorld',
  data () {
    return {
      msg: 'HiWorld'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    font-size: 24px;
    a {
      color: #42b983;
    }
  }
}
</style>
