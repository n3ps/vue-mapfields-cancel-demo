<template>
  <div id="app">
    <sample-page />
  </div>
</template>

<script>
import SamplePage from './pages/SamplePage'

export default {
  name: 'app',
  components: {
    SamplePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
