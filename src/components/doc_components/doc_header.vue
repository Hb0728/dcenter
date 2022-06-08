<template>
  <div class='doc_header'>
      <h3>{{headerName}}<span class="headerTips">{{headerTips}}</span></h3>
      <el-row>
          <el-col :span="14">
            <div class="text-left choose-item mb-3">
                <span>文档类型：</span>
                <el-button type="primary" :class="status_vip=='all'?'active':''" itemNum="all"  @click="reloadpage" plain>全部</el-button>
                <el-button type="primary" :class="status_vip=='0'?'active':''" itemNum="0" @click="reloadpage" plain>普通</el-button>
                <el-button type="primary" :class="status_vip=='1'?'active':''" itemNum="1" @click="reloadpage" plain>原创</el-button>
                <el-button type="primary" :class="status_vip=='2'?'active':''" itemNum="2" @click="reloadpage" plain>独家</el-button>
            </div>
            <div class="text-left choose-item mb-3">
                <span>文档格式：</span>
                <el-button type="primary" :class="file_ext=='all'?'active':''" itemName="all" @click="reloadpage2" plain>全部</el-button>
                <el-button type="primary" :class="file_ext=='doc'?'active':''" itemName="doc" @click="reloadpage2" plain>doc</el-button>
                <el-button type="primary" :class="file_ext=='ppt'?'active':''" itemName="ppt" @click="reloadpage2" plain>ppt</el-button>
                <el-button type="primary" :class="file_ext=='xls'?'active':''" itemName="xls" @click="reloadpage2" plain>xls</el-button>
                <el-button type="primary" :class="file_ext=='pdf'?'active':''" itemName="pdf" @click="reloadpage2" plain>pdf</el-button>
                <el-button type="primary" :class="file_ext=='other'?'active':''" itemName="other" @click="reloadpage2" plain>其他</el-button>
            </div>
          </el-col>
          <el-col :span="10">
          <div class="mb-3">搜索我的文档</div>
          <div class="searchbox">
            <input class="searchinput" v-model="keywords" type="text" placeholder="请输入关键词进行搜索" @keyup.enter="searchlist"><el-button @click="searchlist"><el-icon><Search /></el-icon></el-button>
          </div>
          </el-col>
            
    </el-row>
  </div>
</template>

<script>
//import

  export default {
    name :'doc_header',
    components: {
      
    },
    data() {
      return {
        status_vip:'all',
        file_ext:'all',
        keywords:'',
      };
    },
    computed: {
      
    },
    watch: {},
    methods: {
      reloadpage(e){
          this.status_vip=e.currentTarget.getAttribute('itemNum')
          this.$emit("updatepage",{file_ext:this.file_ext,status_vip:this.status_vip})
      },
      reloadpage2(e){
         this.file_ext=e.currentTarget.getAttribute('itemName')
         this.$emit("updatepage",{file_ext:this.file_ext,status_vip:this.status_vip})
      },
      searchlist(){
        this.$emit("updatepage",{file_ext:this.file_ext,status_vip:this.status_vip,key_word:this.keywords})
      }
    },
    props:['headerName','headerTips'],
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
  .doc_header{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 1.5rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 14px;
    }
    .doc_header h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
      margin-right: 0.5rem;
    }
    .text-left{
        text-align:left;
    }
    .mb-3{
        margin-bottom:1rem;
    }
    .active{
        background: #2780E3;
        color:#fff;
    }
    .el-col-14{
        border-right: 1px solid #f2f2f2;
        padding-left: 2rem;
        padding-top: 1rem;
    }
    .searchbox{
        overflow: hidden;
        display: flex;
        width: 70%;
        height: 40px;
        border:1px solid #2780E3;
        margin:0 auto;
        border-radius: 0.3rem;
    }
    .searchinput{
        flex: 1;
        border: none;
        padding: 0 1rem;
    }
    .searchinput:focus{
        outline:none;
    }
    .searchbox .el-button{
        height: 40px;
        border: none;
    }
    .choose-item .el-button{
        height: 25px;
        margin-left: 1rem;
    }
    .headerTips{
      color:#999;
      font-size:12px;
      padding: 0 1rem;
      font-weight: 400;
    }
</style>