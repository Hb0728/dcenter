
<template>
  <!-- <el-row class="meau"> -->
    <div  class="meau-left">
      <h3 class="meau-title">文档管理中心</h3>
      <div class="uploadbox"><a href="https://www.wenku365.com/ucenter/upload/#/uploading/index"><el-button type="warning" size="large" class="uploaddoc" round>上传文档</el-button></a></div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#2780E3"
        class="el-menu-vertical-demo"
        :default-active="navIndex"
        text-color="#fff"
        style="border-right:none"
      >
        <el-menu-item index="/">
          <template #title>
            <router-link to="/">
            <span>首页</span>
            </router-link>
          </template>
          
        </el-menu-item>
        <el-menu-item index="/DataProfiling">
            <router-link to="/DataProfiling">
              <span>数据概况</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="/ActivityCenter">
            <router-link to="/ActivityCenter">
              <span>活动中心</span>
            </router-link>
        </el-menu-item>
        <el-sub-menu index="4">
          <template #title>
            <span>文档管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/sendsuccess"><router-link to="/sendsuccess">发布成功<span v-if="$store.state.sendSuccessTotal!=''">{{'（'+$store.state.sendSuccessTotal+'）'}}</span></router-link></el-menu-item>
            <el-menu-item index="/waitSend"><router-link to="/waitSend">待发布<span v-if="$store.state.waitSendTotal!=''">{{'（'+$store.state.waitSendTotal+'）'}}</span></router-link></el-menu-item>
            <el-menu-item index="/waitPending"><router-link to="/waitPending">待审核<span v-if="$store.state.waitPendingTotal!=''">{{'（'+$store.state.waitPendingTotal+'）'}}</span></router-link></el-menu-item>
            <el-menu-item index="/failPending"><router-link to="/failPending">审核失败<span v-if="$store.state.failPendingTotal!=''">{{'（'+$store.state.failPendingTotal+'）'}}</span></router-link></el-menu-item>
            <el-menu-item index="/failchange"><router-link to="/failchange">转换失败<span v-if="$store.state.failchangeTotal!=''">{{'（'+$store.state.failchangeTotal+'）'}}</span></router-link></el-menu-item>
            <el-menu-item index="/recycleStation"><router-link to="/recycleStation">回收站<span v-if="$store.state.recycleStationTotal!=''">{{'（'+$store.state.recycleStationTotal+'）'}}</span></router-link></el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="5">
            <router-link to="/DocSale">
              <span>文档出售明细</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="6">
            <router-link to="/UserMoney">
                <span>收益提现</span>
            </router-link>
        </el-menu-item>
      </el-menu>
    </div>
    
<!-- </el-row> -->
</template>


<script>
import router from '../router';



  export default {
    name :'meau',
    components: {

    },
    data() {
      return {
        navIndex: 1,
      };
    },
    computed: {
    },
    watch: {},
    methods: {
      go(path, index) {
        this.navIndex = index;
        router.push({
          
        })
      }
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    }, 
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      setTimeout(()=>{
        this.navIndex = this.$route.path;
      }, 0)
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
  .el-menu-item{
    padding-left: 0!important;
    padding-right: 0!important;
  }
  .el-menu-item a{
    width: 100%;
    text-align: start;
    padding-left: 20px;
  }
  .el-sub-menu .el-menu-item{
    min-width: auto;
  }
  .meau-left{
      position:fixed;
      top:0;
      width:12.5%;
      bottom:0;
      height: 100%;
      max-width: 12.5%;
      flex: 0 0 12.5%;
      background-color: #2780E3;
  }
  .meau-left a{
    color:#fff
  }
  .meau-title{
      color:#fff;
      margin:2rem auto;
  }
  .uploadbox{
      display: block;
      margin-bottom: 2rem;
  }
  .uploaddoc{
      width: 80%;
      margin: 0 auto;
  }
  
</style>