<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
  /*@import "../static/font/iconfont.css";*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
  ul{
    -webkit-padding-start: 0;
    -webkit-margin-before:0em;
    -webkit-margin-after: 0em;
  }
</style>
