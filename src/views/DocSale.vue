<template>
  <div class='DocSale'>
    <div class='Selling_water'>
    <div class="d-flex"><h3>文档出售流水</h3><span class="font-12 text-999 mb-3">只记录一年内的出售记录</span></div>
    <div>
      <el-row align="middle"> 
        <el-col :span="10" >
          <div class="text-left">
            出售时间：
            <el-button :class="saledocdate=='1'?'active':''" itemDate="1" size:large type="primary" @click="choosedate" plain>全部</el-button>
            <el-button :class="saledocdate=='2'?'active':''" itemDate="2" size:large type="primary" @click="choosedate" plain>一周内</el-button>
            <el-button :class="saledocdate=='3'?'active':''" itemDate="3" size:large type="primary" @click="choosedate" plain>一月内</el-button>
            <el-button :class="saledocdate=='4'?'active':''" itemDate="4" size:large type="primary" @click="choosedate" plain>半年内</el-button>
          </div>
        </el-col>
        <el-col :span="9">
            <div class="block">
              <el-date-picker
                v-model="value2"
                type="datetimerange"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                :shortcuts="shortcuts"
                range-separator="-"
                start-placeholder="请选择开始时间"
                end-placeholder="请选择结束时间"
                @change="pickdate" 
                size="large"
              />
            </div>
        </el-col>
        <el-col :span="5">
            <div>总计收益</div>
            <div class="all-money">{{price}}</div>
        </el-col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      </el-row>                 
    </div>
  </div>                           
  <div class='doc_list'>
      <div class="table-header">
        <el-row>
            <el-col :span="12" style="text-align: start;">文档标题</el-col>
            <el-col :span="3"></el-col>
            <el-col :span="3">文档售价</el-col>
            <el-col :span="3">实际收益</el-col>
            <el-col :span="3">出售时间</el-col>
        </el-row>
      </div>
      
      <div class="doc-list-item" v-loading="loading">
          <el-empty description="" v-if="doc_list_data==''" />
          <div v-if="doc_list_data!=''">
            <el-row v-for="item in doc_list_data" class="el-row dashed-bottom " :key="item" >
                <el-col :span="12" class="tt-box" style="text-align: start;">
                  <!-- <span :class="'icon-file icon-'+item.file_ext"></span> -->
                  <a class="title-hover" target="_blank" :href="'https://www.wenku365.com/p-'+item.modelid+'.html'">{{item.title}}</a>
                </el-col>
                <el-col :span="3"></el-col>
                <el-col :span="3">{{item.price}}</el-col>
                <el-col :span="3" class="text-danger">{{item.money}}</el-col>
                <el-col :span="3">{{item.logtruetime}}</el-col>
            </el-row>
          </div>
      </div>
      <div class="demo-pagination-block" v-if="doc_list_data!=''" v-loading="loading">
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="prev, pager, next, jumper"
          :total="totals"
          @current-change="datechange"
        />
      </div>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from '../axios'

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
    text: '半年内',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 182)
      return [start, end]
    },
  },
]

  export default {
    name :'DocSale',
    components: {
      
    },
    data() {
      return {
        value2,
        shortcuts,
        saledocdate:'1',
        doc_list_data:[],
        currentPage:1,
        pageSize:20,
        small:false,
        background:true,
        disabled:false,
        totals:0,
        loading:false,
      };
    },
    computed: {
      price(){
        if(JSON.parse(window.localStorage.getItem('LOGIN_DATA'))){
          return JSON.parse(window.localStorage.getItem('LOGIN_DATA')).data.benefit_all
        }
        return 0
      }
    },
    watch: {},
    methods: {
      GMTToStr(time){
        let date = new Date(time)
        let Str=date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' + 
            date.getDate() + ' ' + 
            date.getHours() + ':' + 
            date.getMinutes() + ':' + 
            date.getSeconds()
        return Str
      },
      pickdate(){
        this.currentPage=1
        this.getdoclist(true)
      },
      choosedate(e){
        this.saledocdate=e.currentTarget.getAttribute('itemDate')
        this.currentPage=1
        this.getdoclist(false)
      },
      datechange(){
        this.getdoclist(false)
      },
      getdoclist(hasdate){
        let _this=this
        let start_time='';
        let end_time='';
        if(hasdate){  
          start_time=_this.GMTToStr(_this.value2[0])
          end_time=_this.GMTToStr(_this.value2[1])
        }
        _this.loading=true
        let listdata = {
          page:_this.currentPage,
          pagesize:'20',
          date_type:_this.saledocdate,
          start_time,
          end_time,
          access_token:_this.$cookies.get('ttwk-login-access-token') ?_this.$cookies.get('ttwk-login-access-token'): ''
        }
        const formData = new FormData();
        Object.keys(listdata).forEach((key) => {
          formData.append(key, listdata[key]);
        });
        axios.post('/api/user/Usercenter/my_sell_list_1',formData).then(function(res){
          _this.loading=false
          _this.doc_list_data=res.data.data.list
          _this.doc_list_data.forEach(function(value){
            let date= new Date(value.logtruetime*1000)
            value.logtruetime=date.getFullYear()+'-'+(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+date.getDate() + ' ';
          })
          _this.totals=res.data.data.total/1
        }).catch(error=>{
          _this.loading=false
        
        })
      },
      handleCurrentChange(){
        this.getdoclist();
      },
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
     
     this.getdoclist(false)
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
    .d-flex{
      display: flex;
      align-items: flex-end;
    }
    .el-empty{
      min-height:540px;
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
        margin-right: 1rem;
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
    .title-hover{
      color:#2c3e50;
    }
    .title-hover:hover{
      color:#2975DC;
      text-decoration: underline;
    }
    .text-danger{
      color: #FF0000;
    }
    .tt-box{
      display: flex;
      align-items: center;
    }
    .text-yellow{
      color:#ff9900;
    }
    .doc_list{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 1.5rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 14px;
    }
    .dashed-bottom{
      border-bottom: 1px dashed #999;
      border-top:1px solid transparent;
    }
    .table-header{
      background: #EBEEF6;
      padding: 0.5rem 1rem;
      color: #999;
    }
    .doc-list-item{
      min-height: 540px;
      padding:1rem 0;
    }
    .doc-list-item .el-row{
      padding: .8rem 1rem;
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
    .icon-file{
      background: url(../assets/img/all.svg) no-repeat;
      width: 20px;
      height: 20px;
      background-position:center;
      background-size: cover;
      margin-right:.5rem;
    }
    .icon-ppt,.icon-pptx{
      background: url(../assets/img/ppt.svg) no-repeat; 
      background-position:center;
      background-size: cover;
    }
    .icon-doc,.icon-docx,.icon-dot{
      background: url(../assets/img/doc.svg) no-repeat;
      background-position:center;
      background-size: cover;
    }
    .icon-pdf{
      background: url(../assets/img/pdf.svg) no-repeat;
      background-position:center;
      background-size: cover;
    }
    .icon-zip,icon-rar{
      background: url(../assets/img/zip.svg) no-repeat;
      background-position:center;
      background-size: cover;
    }
    .active{
        background: #2780E3;
        color:#fff;
    }
</style>