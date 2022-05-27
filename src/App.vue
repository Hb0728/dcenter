<template>
  <div id="nav" >
    <el-row> 
       <meau></meau>
       <el-col :span="21" class="meau-right">
          <dcenterheader></dcenterheader>
          <advertisement></advertisement>
          <router-view/>
       </el-col> 
    </el-row>   
  </div>
  
</template>
<script>
import meau from './components/meau'
import dcenterheader from './components/dcenterheader'
import advertisement from './components/advertisement'

export default {
  components:{
    meau,
    dcenterheader,
    advertisement,
  }
}
</script>
<style>
a{
  color: #2975DC;
}
body{
  background: #EBEEF6;
}
li{
  list-style: none;
}
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
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.mx-4{
  margin-left: 1rem;
  margin-right: 1rem;
}
.text-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
}

</style>
