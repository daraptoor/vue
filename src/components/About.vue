<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Amit Essential Links</h2>
    <ul>
      <li><a href="/" target="">home</a></li>
      <li><router-link to="/">Quick home</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Amit',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'About Page',
    // all titles will be injected into this template
    titleTemplate: '%s | My Awesome view'
  },
  data () {
    return {
      msg: 'Welcome to About PAge'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
