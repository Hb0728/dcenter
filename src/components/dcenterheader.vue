<template>
    <div class="dcenterheader">
        <el-row class="mb-3">
            <el-col :span="3" ><a href="" v-text="'<&nbsp&nbsp返回个人中心'" >  </a></el-col>
            <el-col :span="2" ><a href="">网站首页</a></el-col>
            <el-col class="user-box" :span="3" :offset="16"><a class="login-header" href=""><img class="user-pic rounded-circle" src="https://picsum.photos/id/58/50/50" ><div>用户昵称</div></a></el-col>
        </el-row>
    </div>
</template>

<script>

  export default {
    name :'dcenterheader',
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
      console.log(this.$store);
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
  .dcenterheader{
      margin-bottom:1rem;
      background:#fff;
      box-shadow: 0 0 10px #999;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 14px;
  }
  .login-header{
      display: flex;
      align-items: center;
  }
  .mb-3{
      margin-bottom: 1rem;
  }
  .rounded-circle{
      border-radius: 100%;
  }
  .user-pic{
      width: 24px;
      height: 24px;
      margin-right: .5rem;
  }
  .user-box{
      display: flex;
      align-items: center;
  }
</style>