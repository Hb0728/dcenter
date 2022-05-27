<template>
  <div class='UserMoney mx-3'>
      <el-row type="flex" justify="" >
          <el-col :span="13">
            <myproceeds></myproceeds>
          </el-col>
          <el-col :span="11">
            <getMoneyhistory></getMoneyhistory>
          </el-col>
      </el-row>
      
    
  </div>
</template>

<script>
import myproceeds from '../components/userMoney_components/my_proceeds'
import getMoneyhistory from '../components/userMoney_components/getMoney_history'

  export default {
    name :'UserMoney',
    components: {
      myproceeds,
      getMoneyhistory
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
  .mx-3{
  margin-left:1rem;
  margin-right: 1rem;
}
</style>