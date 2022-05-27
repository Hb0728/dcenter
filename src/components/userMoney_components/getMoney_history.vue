<template>
  <div class='getMoney_history'>
      <h3>提现记录</h3> 
      <div class="table-header">
        <el-row>
            <el-col :span="6">提现时间</el-col>
            <el-col :span="6">提现金额</el-col>
            <el-col :span="6">收款账号</el-col>
            <el-col :span="6">状态</el-col>
        </el-row>
      </div>
      <div class="getMoney-list">
          <el-row v-for="item in getMoney_history" :key="item">
            <el-col :span="6">{{item.time}}</el-col>
            <el-col :span="6">{{item.price}}</el-col>
            <el-col :span="6">{{item.name}}</el-col>
            <el-col :span="6">{{item.reson}}</el-col>
          </el-row>
      </div>
      <div class="demo-pagination-block">
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="prev, pager, next, jumper"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const currentPage = ref(5)
const pageSize = ref(100)

const small = ref(false)
const background = ref(true)
const disabled = ref(false)



  export default {
    name :'getMoney_history',
    components: {
      
    },
    data() {
      return {
        getMoney_history:[
          {
            time:'2022-01-02',
            price:'222.00',
            name:'250165862',
            status:1,
            reson:'已打款'
          },
          {
            time:'2022-01-02',
            price:'222.00',
            name:'250165862',
            status:0,
            reson:'审核未通过'
          },
          {
            time:'2022-01-02',
            price:'222.00',
            name:'250165862',
            status:2,
            reson:'待审核'
          },
        ],
        currentPage,pageSize,small,background,disabled
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

.getMoney_history{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 1.5rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
        font-size: 14px;
    }
    .getMoney_history h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
    }
    .table-header{
      background: #EBEEF6;
      padding: 0.5rem 0;
      color: #999;
    }
    .getMoney-list{
      min-height: 550px;
      padding:1rem 0;
    }
    .getMoney-list .el-row{
      padding: .5rem 0;
    }
    .demo-pagination-block + .demo-pagination-block {
      margin-top: 10px;
    }
    .demo-pagination-block .demonstration {
      margin-bottom: 16px;
    }
    .demo-pagination-block .el-pagination{
        justify-content: end;
    }
</style>