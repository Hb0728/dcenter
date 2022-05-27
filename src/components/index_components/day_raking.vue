<template>
  <div class='day_raking'>
      <h3>7天收益排行榜TOP10</h3>
      <div class="bg-secondary">
          <el-row >
              <el-col :span="6">排名</el-col>
              <el-col :span="9">用户昵称</el-col>
              <el-col :span="9">总收益</el-col>
          </el-row>
      </div>
      <el-row v-for="(item,index) in raking" key="item" data-type="raking">
          <el-col :span="6" ><div data-type="raking-num">{{index+1}}</div></el-col>
          <el-col :span="9">{{item.name}}</el-col>
          <el-col :span="9" data-type="raking-price">￥{{item.price}}</el-col>
      </el-row>
  </div>
</template>

<script>
//import

  export default {
    name :'day_raking',
    components: {
      
    },
    data() {
      return {
          raking:[
              {
                  name:111,
                  price:8923.29,
              },{
                  name:111,
                  price:8923.29,
              },{
                  name:111,
                  price:8923.29,
              },{
                  name:111,
                  price:8923.29,
              },{
                  name:111,
                  price:8923.29,
              },{
                  name:111,
                  price:8923.29,
              },{
                  name:111,
                  price:8923.29,
              },{
                  name:111,
                  price:8923.29,                  
              },{
                  name:111,
                  price:8923.29,           
              },{
                  name:111,
                  price:8923.29,
              }
          ]
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
    .day_raking{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 1.5rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
    }
    .day_raking h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
    }
    .bg-secondary{
        color: #999;
        font-size: 14px;
        padding:.5rem 0;
        background: #EBEEF6;
        margin-bottom: 1rem;
    }
    .el-row[data-type="raking"]{
        padding: 0.5rem 0;
        text-align: center;
    }
    .el-row[data-type="raking"] div[data-type="raking-num"]{
        display: inline-block;
        background: #FF9900;
        color: #fff;
        width: 20px;
        font-size: 14px;
        padding: 0.1rem 0;   
    }
    .el-row[data-type="raking"] .el-col[data-type="raking-price"]{
        color: #FF9900;
    }
</style>