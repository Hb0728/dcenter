<template>
  <div class='index_dataSituation'>
      <h3>数据概况</h3>
      <el-row class="font-14">
        <el-col :span="6">
           <div class="text-999">我的资产（可提现）</div>
           <p class="font-28">129.00</p>
           <el-button type="warning">提现</el-button>
        </el-col>
        <el-col :span="6">
          <div class="text-999"> 昨日收益（分成）</div>
          <p class="font-28">129.00</p>
          <a href="">查看明细</a>
        </el-col>
        <el-col :span="6">
         <div class="text-999"> 今日可上传</div>
         <p class="font-28">15000</p>
         <a href="">去上传</a>
        </el-col>
        <el-col :span="6">
         <div class="text-999"> 待审核文档</div>
         <p class="font-28">9329</p>
         <div>审核系统正在快速处理审核您的文档资料</div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
//import

  export default {
    name :'index_dataSituation',
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
    .index_dataSituation{
      background: #fff;
      /* box-shadow: 0 0 10px #999; */
      padding: 1.5rem;
      margin-bottom: 1rem;
    }
    .index_dataSituation h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
    }
    .text-999{
      color: #999;
    }
    .font-14{
      font-size: 0.875rem;
    }
    .font-28{
      font-size: 1.875rem;
    }
</style>