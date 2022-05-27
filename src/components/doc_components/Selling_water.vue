<template>
  <div class='Selling_water'>
    <div class="d-flex"><h3>文档出售流水</h3><span class="font-12 text-999 mb-3">只记录一年内的出售记录</span></div>
    <div>
      <el-row align="middle"> 
        <el-col :span="10" >
          <div class="text-left">
            出售时间：
            <el-button type="primary" autofocus="true" plain>全部</el-button>
            <el-button type="primary" plain>一周内</el-button>
            <el-button type="primary" plain>一月内</el-button>
            <el-button type="primary" plain>一年内</el-button>
          </div>
        </el-col>
        <el-col :span="7">
            <div class="block">
              <el-date-picker
                v-model="value2"
                type="datetimerange"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                :shortcuts="shortcuts"
                range-separator="-"
                start-placeholder="请选择开始时间"
                end-placeholder="请选择结束时间"
              />
            </div>
            <el-button type="primary">搜索</el-button>
        </el-col>
        <el-col :span="7">
            <div>总计收益</div>
            <div class="all-money">{{price}}</div>
        </el-col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      </el-row>                 
    </div>
  </div>                                
</template>              

<script>
import { ref } from 'vue'

const value2 = ref('')
                                                 
const shortcuts = [
  {
    text: '一周内',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '一月内',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '一年内',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 360)
      console.log(111)
      return [start, end]
    },
  },
]

  export default {
    name :'Selling_water',
    components: {
      
    },
    data() {
      return {
        value2,
        shortcuts,
        price:2998.96
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
};

</script>
<style scoped>
    .d-flex{
      display: flex;
      align-items: flex-end;
    }
    .text-left{
      text-align: start;
    }
    .font-12{
      font-size: 12px;
    }
    .all-money{
      font-size: 24px;
      padding: 1rem 0;
    }
    .text-999{
      color: #999;
    }
    .mb-3{
      margin-bottom: 1rem;
    }
    .Selling_water{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 1.5rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
        font-size: 14px;
    }
    .Selling_water h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
      margin-right: 0.5rem;
    }
    /* elm样式 */
    .block {
      padding: 30px 0;
      text-align: center;
      border-right: solid 1px var(--el-border-color);
      flex: 1;
    }
    .block:last-child {
      border-right: none;
    }
    .block .demonstration {
      display: block;
      color: var(--el-text-color-secondary);
      font-size: 14px;
      margin-bottom: 20px;
    }
    .block .el-input__inner, .block .el-input__inner{
      border: 1px solid #333;
    }
</style>