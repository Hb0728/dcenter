<template>
  <div id="nav">
    <router-link to="/">首页</router-link> |
    <router-link to="/about">数据概况</router-link>|
    <router-link to="/ActivityCenter">活动中心</router-link>|
    <router-link to="/DocManage">文档管理</router-link>|
    <router-link to="/DocSale">文档出售明细</router-link>|
    <router-link to="/UserMoney">收益体现</router-link>

  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
