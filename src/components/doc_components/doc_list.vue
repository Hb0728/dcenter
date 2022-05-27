<template>
  <div class='doc_list'>
      <div class="table-header">
        <el-row>
            <el-col :span="12" style="text-align: start;">文档标题</el-col>
            <el-col :span="3">{{itemName}}</el-col>
            <el-col :span="3">文档售价</el-col>
            <el-col :span="3">实得收益</el-col>
            <el-col :span="3">出售时间</el-col>
        </el-row>
      </div>
      <div class="doc-list-item">
          <el-row v-for="item in doc_list_data" :key="item">
            <el-col :span="12" style="text-align: start;">{{item.title}}</el-col>
            <el-col :span="3"></el-col>
            <el-col :span="3">{{item.price}}</el-col>
            <el-col :span="3">{{item.sale}}</el-col>
            <el-col :span="3">{{item.time}}</el-col>
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
    name :'doc_list',
    components: {

    },
    data() {
      return {
        doc_list_data:[
            {
                article_type:'doc',
                title:'高二政治学案： 《人民代表大会制度具有强大生命力》（新人教版选修3',
                price:'7.99',
                sale:'7.99',
                time:'2020-10-16',
            }
        ],
        currentPage,pageSize,small,background,disabled
      };
    },
    computed: {
      
    },
    watch: {},
    props:['itemName'],
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
    .doc_list{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 1.5rem;
        margin-bottom: 1rem;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 14px;
    }
    .table-header{
      background: #EBEEF6;
      padding: 0.5rem 2rem;
      color: #999;
    }
    .doc-list-item{
      min-height: 550px;
      padding:1rem 0;
    }
    .doc-list-item .el-row{
      padding: .5rem 2rem;
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