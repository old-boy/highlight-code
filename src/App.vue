<template>
  <div id="app">
     <!-- main -->
       <div class="main">
           <!-- sliderbar -->
           <sidebar></sidebar>
           <mainContent></mainContent>
       </div>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
import mainContent from '@/components/MainContent'
export default {
  name: 'App',
  components:{
    sidebar,
    mainContent
  }
}
</script>

<style lang="scss" scoped>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  .main{
    width: 100%;
    height: 100%;
  }
}
</style>
