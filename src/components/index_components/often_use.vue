<template>
  <div class='often_use' v-loading="loading">
      <h3>常用功能</h3>
      <el-row justify="space-around">
          <router-link to="/22">
              <div class="text-center"><img class="cicle" src="../../assets/img/index_1.png" alt=""></div>
              <span class="text-tit">收益提现</span>
          </router-link>
          <router-link to="/22">
              <div class="text-center"><img class="cicle" src="../../assets/img/index_2.png" alt=""></div>
              <span class="text-tit">文档出售明细</span>
          </router-link>
          <router-link to="/22">
              <div class="text-center"><img class="cicle" src="../../assets/img/index_3.png" alt=""></div>
              <span class="text-tit">待审核</span>
          </router-link>
          <router-link to="/121">
              <div class="text-center"><img class="cicle" src="../../assets/img/index_4.png" alt=""></div>
              <span class="text-tit">我的文档</span>
          </router-link>
          <router-link to="/12">
              <div class="text-center"><img class="cicle" src="../../assets/img/index_5.png" alt=""></div>
              <span class="text-tit">账号管理</span>
          </router-link>
      </el-row>
  </div>
</template>

<script>


  export default {
    name :'often_use',
    components: {
      
    },
    data() {
      return {
        loading:false
      };
    },
    computed: {
      
    },
    watch: {
        
    },
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
    .often_use{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding:1.5rem;
        margin-bottom: 1rem;
    }
    .often_use h3{
      text-align: start;
      margin: 1rem;
    }
    .justify-content-around{
        justify-content: around;
    }
    .often_use .cicle{
        border-radius: 100%;
        padding: 1rem 0;
        text-align: center;
    }
    .text-center{
        text-align: center;
    }
    .text-tit{
        color:#2c3e50;
        font-size: 14px;
    }
</style>