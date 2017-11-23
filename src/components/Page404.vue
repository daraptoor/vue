<template>
  <div class="msg">
    <h1>{{ name }}</h1>
    <h2>Page Not Found</h2>
    <ul>
    <li><router-link to="/">Quick home</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: '404 Page',
      // all titles will be injected into this template
      titleTemplate: '%s | My Awesome view'
    },
  data () {
    return {
      msg: 'Page Not Found'
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
