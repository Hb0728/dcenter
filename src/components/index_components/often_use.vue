<template>
  <div class='often_use'>
      <h3>常用功能</h3>
      <el-row justify="space-around">
          <router-link to="">
              <div class="text-center"><img class="cicle" src="https://picsum.photos/id/71/60/60" alt=""></div>
              收益提现
          </router-link>
          <router-link to="">
              <div class="text-center"><img class="cicle" src="https://picsum.photos/id/81/60/60" alt=""></div>
              文档出售明细
          </router-link>
          <router-link to="">
              <div class="text-center"><img class="cicle" src="https://picsum.photos/id/68/60/60" alt=""></div>
              待审核
          </router-link>
          <router-link to="">
              <div class="text-center"><img class="cicle" src="https://picsum.photos/id/48/60/60" alt=""></div>
              我的文档
          </router-link>
          <router-link to="">
              <div class="text-center"><img class="cicle" src="https://picsum.photos/id/38/60/60" alt=""></div>
              账号管理
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
        padding: 1.5rem;
        margin-bottom: 1rem;
    }
    .often_use h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
    }
    .justify-content-around{
        justify-content: around;
    }
    .often_use .cicle{
        border-radius: 100%;
        padding: 1.5rem 0;
        text-align: center;
    }
    .text-center{
        text-align: center;
    }
</style>