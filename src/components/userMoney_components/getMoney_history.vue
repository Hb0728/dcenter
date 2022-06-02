<template>
  <div class='getMoney_history' v-loading="loading">
      <h3>提现记录</h3> 
      <div class="table-header">
        <el-row>
            <el-col :span="6">提现时间</el-col>
            <el-col :span="6">提现金额</el-col>
            <el-col :span="6">收款账号</el-col>
            <el-col :span="6">状态</el-col>
        </el-row>
      </div>
      <el-empty description=""  v-if="getMoney_history==''"/>
      <div class="getMoney-list" v-if="getMoney_history!=''">
          
          <el-row v-for="item in getMoney_history" :key="item">
            <el-col :span="6">{{item.truetime}}</el-col>
            <el-col :span="6">{{item.money}}</el-col>
            <el-col :span="6">{{item.bank_account}}</el-col>
            <el-col :span="6"><div v-html="item.status"></div></el-col>
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
          :total="total"
          @current-change="handleCurrentChange"
          @prev-click="prevpage" 
          @next-click="nextpage"
        />
    </div>
  </div>
</template>

<script>
import axios from '../../axios'

  export default {
    name :'getMoney_history',
    components: {
      
    },
    data() {
      return {
        getMoney_history:[],
        currentPage:1,
        pageSize:20,
        small:false,
        background:true,
        disabled:false,
        total:1,
        loading:false
      };
    },
    computed: {
      gettime(){
        
      }
    },
    watch: {},
    methods: {
      getusermoney(){
        let _this=this
        _this.loading=true
        axios.post('/api/user/Usercenter/my_withdraw',{
          page:_this.currentPage,
          pagesize:_this.pageSize,
          status:'12'
        }).then(res=>{
          _this.loading=false
          _this.getMoney_history=res.data.data.list
          _this.getMoney_history.forEach(function(value){
          if(value.status==1){
            value.status='<span style="color:#0000FF">审核通过</span>'
          }else if(value.status==2){
            value.status='<span style="color:#999">待审核</span>'
          }else if(value.status==3){
            value.status='<span style="color:#D9001B">审核未通过</span>'
          }else{
            value.status='<span style="color:#999">待审核</span>'
          }
          let date= new Date(value.truetime*1000)
          value.truetime=date.getFullYear()+'-'+(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+date.getDate() + ' ';
        })
          _this.total=res.data.data.total[0].total/1
        }).catch(error=>{
          _this.loading=false
          _this.$message({
                message: error.data.code,
                showClose:true,
                type: 'error',
            })
        })
      },
      prevpage(){

      },
      nextpage(){

      },
      handleCurrentChange(){

      },
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getusermoney();
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
        padding: 1.5rem;
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
      min-height: 624px;
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
        justify-content:flex-end;
    }
</style>