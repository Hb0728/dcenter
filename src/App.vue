<template>
  <div id="nav" >
    <el-row> 
       <meau></meau>
       <el-col :span="20" class="meau-right">
       
          <router-view/>
       </el-col> 
    </el-row>   
  </div>
  
</template>
<script>
import meau from './components/meau'
export default {
  components:{
    meau
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
.meau-right{
      min-height: 935px;
}
#nav a {
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
