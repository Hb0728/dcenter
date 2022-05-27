<template>
  <div class='web_msg'>
      <h3>网站公告</h3>
      <ul class="msg-list">
        <li class="text-left text-ellipsis" v-for="item in msgarr" :key="item">
            <span>公告</span><span>丨</span> <a class="text-dark" href="">{{item.news}}</a>
        </li>
      </ul>
  </div>
</template>

<script>
//import

  export default {
    name :'web_msg',
    components: {
      
    },
    data() {
      return {
          msgarr:[
              {
                  id:'001',news:'关于整治“乌有之乡、炎黄春秋”文档的通知'
              },{
                  id:'002',news:'文档优化说明：上传的文档怎么优化，能带来更多访问量和下载量？'
              },{
                  id:'003',news:'关于整治“乌有之乡、炎黄春秋”文档的通知'
              }, {
                  id:'004',news:'文档优化说明：上传的文档怎么优化，能带来更多访问量和下载量？'
              },{
                  id:'005',news:'文档优化说明：上传的文档怎么优化，能带来更多访问量和下载量？'
              },
              ]
      };
    },
    computed: {
      
    },
    watch: {

    },
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
    .web_msg{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 1.5rem;
    }
    .web_msg h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
    }
    .text-left{
        text-align:start
    }
    .msg-list{
        padding: 0.5rem;
        margin: 0;
        margin-bottom: 0.5rem;
    }
    .msg-list li{
        font-size: 14px;
        margin-bottom: 1rem;
    }
    .msg-list li:last-child{
        margin-bottom: 0;
    }
    .text-dark{
        color: #2c3e50;
    }
    
</style>