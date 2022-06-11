<template>
  <div class='doc_list'>
      <div class="table-header">
        <el-row>
            <el-col :span="11" style="text-align: start;">文档标题</el-col>
            <el-col :span="4">{{failname}}</el-col>
            <el-col :span="3">售价</el-col>
            <el-col :span="3">大小</el-col>
            <el-col :span="3">发布时间</el-col>
        </el-row>
      </div>
      
      <div class="doc-list-item" v-loading="loading">
          <el-empty description="" v-if="doc_list_data==''" />
          <div v-if="doc_list_data!=''">
            <el-row  v-for="item in doc_list_data" class="el-row dashed-bottom " :key="item" >
                <el-col :span="11" class="tt-box" style="text-align: start;"><span :class="'icon-file icon-'+item.file_ext"></span><a class="title-hover text-ellipsis" target="_blank" :href="item.titleurl">{{item.title}}</a></el-col>
                <el-col class="text-danger" :span="4">{{item.status_check_desc}}</el-col>
                <el-col :span="3" class="text-yellow">{{item.userfen}}元</el-col>
                <el-col :span="3">{{item.file_size}}</el-col>
                <el-col :span="3">{{item.truetime}}</el-col>
            </el-row>
          </div>
      </div>
      <div class="demo-pagination-block" v-if="doc_list_data!=''">
        <el-pagination
          v-model:currentPage="currentPage"
          v-model:page-size="pageSize"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="prev, pager, next, jumper"
          :total="totals"
          @current-change="handleCurrentChange"
        />
      </div>
  </div>
</template>

<script>

import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(20)

const small = ref(false)
const background = ref(true)
const disabled = ref(false)



  export default {
    name :'doc_list',
    components: {

    },
    data() {
      return {
        currentPage,pageSize,small,background,disabled,
        totals:0,
      };
    },
    computed: {
      
    },
    watch: {},
    props:['doc_list_data','itemStatus','total','loading','failname'],
    methods: {
      handleCurrentChange(page){
        this.$emit('updatepagelist',{page:this.currentPage,status:this.itemStatus})
        this.totals=this.total/1
      },
      
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
    updated() {
      this.totals=this.total/1
    }, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
    .text-danger{
      color:#ff0000;
      font-size:12px
    }
    .title-hover{
      color:#2c3e50;
    }
    .title-hover:hover{
      color:#2975DC;
      text-decoration: underline;
    }
    .tt-box{
      display: flex;
      align-items: center;
    }
    .text-yellow{
      color:#ff9900;
    }
    .el-empty{
      min-height:540px;
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
      background: url(../../assets/img/all.svg) no-repeat;
      width: 20px;
      height: 20px;
      background-position:center;
      background-size: cover;
      margin-right:.5rem;
    }
    .icon-ppt,.icon-pptx{
      background: url(../../assets/img/ppt.svg) no-repeat; 
      background-position:center;
      background-size: cover;
    }
    .icon-doc,.icon-docx,.icon-dot{
      background: url(../../assets/img/doc.svg) no-repeat;
      background-position:center;
      background-size: cover;
    }
    .icon-pdf{
      background: url(../../assets/img/pdf.svg) no-repeat;
      background-position:center;
      background-size: cover;
    }
    .icon-zip,icon-rar{
      background: url(../../assets/img/zip.svg) no-repeat;
      background-position:center;
      background-size: cover;
    }
    

</style>