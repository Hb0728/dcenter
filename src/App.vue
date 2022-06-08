<template>
  <div id="dcenter">
    <el-row> 
      <el-col :span="3" class="meau-left">
        <meau></meau>
      </el-col>
       <el-col :span="21" class="meau-right">
          <dcenterheader></dcenterheader>
          <router-view/>
       </el-col> 
    </el-row>   
  </div>
  
</template>
<script>
import meau from './components/meau'
import dcenterheader from './components/dcenterheader'

export default {
  components:{
    meau,
    dcenterheader,
  },
  mounted(){
    if(!this.$cookies.get('ttwk-login-access-token')){
      window.location.href="https://www.wenku365.com/ucenter/member/login.html"
    }
  }
}
</script>
<style>
.mx-3{
  margin-left: 1rem;
  margin-right: 1rem;
}
a{
  color: #2975DC;
  text-decoration: none;
}
  .a-hover{
      color:#2c3e50
  }
  .a-hover:hover{
      color:#2975DC
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
      min-height: 852px;
}


#dcenter a.router-link-exact-active {
  background-color: #1F66B6;
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
