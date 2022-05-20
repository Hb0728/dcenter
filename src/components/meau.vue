
<template>
  <!-- <el-row class="meau"> -->
    <el-col :span="4" class="meau-left">
      <h3 class="meau-title">文档管理中心</h3>
      <div class="uploadbox"><el-button type="warning" size="large" class="uploaddoc" round>上传文档</el-button></div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#2780E3"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <template #title>
            <router-link to="/">
            <span>首页</span>
            </router-link>
          </template>
          
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/DataProfiling">
              <span>数据概况</span>
            </router-link>
        </el-menu-item>
        <el-menu-item index="3">
            <router-link to="/ActivityCenter">
              <span>活动中心</span>
            </router-link>
        </el-menu-item>
        <el-sub-menu index="4">
          <template #title>
            <span>文档管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1"><router-link to="/sendsuccess">发布成功</router-link></el-menu-item>
            <el-menu-item index="4-2"><router-link to="/waitSend">待发布</router-link></el-menu-item>
            <el-menu-item index="4-3"><router-link to="/waitPending">待审核</router-link></el-menu-item>
            <el-menu-item index="4-4"><router-link to="/failPending">审核失败</router-link></el-menu-item>
            <el-menu-item index="4-5"><router-link to="/failchange">转换失败</router-link></el-menu-item>
            <el-menu-item index="4-6"><router-link to="/recycleStation">回收站</router-link></el-menu-item>
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
    </el-col>
    
<!-- </el-row> -->
</template>


<script>


  export default {
    name :'meau',
    components: {

    },
    data() {
      return {
        
      };
    },
    computed: {
      
    },
    watch: {},
    methods: {
      
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      
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
  .meau-left{
      background-color: #2780E3;
  }
  .meau-title{
      color:#fff;
      margin:2rem auto;
  }
  .uploadbox{
      margin-bottom: 2rem;
  }
  .uploaddoc{
      width: 80%;
      margin: 0 auto;
  }
  
</style>