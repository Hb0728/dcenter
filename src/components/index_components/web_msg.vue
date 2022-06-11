<template>
  <div class='web_msg' v-loading="loading">
      <h3>网站公告</h3>
      <ul class="msg-list">
        <li class="text-left text-ellipsis" v-for="item in msgarr" :key="item">
            <span>公告</span><span>丨</span> <a class="text-dark a-hover" :href="item.titleurl">{{item.title}}</a>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from '../../axios'

  export default {
    name :'web_msg',
    components: {


    },
    data() {
      return {
          msgarr:[],
          loading:false,
      };
    },
    computed: {
    //   
    },
    watch: {

    },
    methods: {
      update_web_msg(){
          let _this=this
          _this.loading=true
          axios.post('/api/user/Usercenter/get_site_notice')
          .then(function(res){
              _this.loading=false
              _this.msgarr=res.data.data.list
          }).catch(function(error){
              _this.loading=false
          })
      }
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.update_web_msg()
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
        padding: 1.25rem 1.5rem;
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
        min-height: 155px;
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