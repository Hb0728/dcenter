<template>
    <div class="dcenterheader">
        <el-row class="mb-3">
            <el-col :span="3" ><a href="https://www.wenku365.com/ucenter/member/index.html" class="a-hover"  v-text="'<&nbsp&nbsp返回个人中心'" >  </a></el-col>
            <el-col :span="2" ><a href="https://www.wenku365.com/" class="a-hover" >网站首页</a></el-col>
            <el-col class="user-box" :span="3" :offset="16"><a class="login-header a-hover" href="https://www.wenku365.com/ucenter/member"><li class="user-pic"><img class=" rounded-circle" :src="user_pic" ></li><div>{{user_name}}</div></a></el-col>
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
        user_pic:'https://static.wenku365.com/wenku365/img/avatar.png',
        user_name:'用户名'
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
        let LOGIN_DATA=JSON.parse(window.localStorage.getItem('LOGIN_DATA'))
        if(LOGIN_DATA!=null&&LOGIN_DATA.data.userpic){
            this.user_pic=LOGIN_DATA.data.userpic
        }
        if(LOGIN_DATA!=null&&LOGIN_DATA.data.nickname){
            this.user_name=LOGIN_DATA.data.nickname
        }
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
      color:#2c3e50;
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
      line-height:24px
  }
  .user-pic img{
      width:100%;
  }
  .user-box{
      display: flex;
      align-items: center;
  }
</style>