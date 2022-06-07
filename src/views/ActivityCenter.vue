<template>
  <div class="mx-3">
    <advertisement></advertisement>
    <div class='Activitycenter' v-loading="loading">
      <h3>活动中心</h3>
      <el-empty description="" v-if="activelist==''"/>
      <el-row>
        <el-col v-for="item in activelist" :key="item" data-type="w20">
            <a class="active-item" :href="item.url">
              <p :class="item.isactive ? 'active':''">
                <img :src="'https://www.wenku365.com'+item.picurl" alt="" style="display:block;">
              </p>
            </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from '../axios'
import advertisement from '../components/advertisement'

  export default {
    name :'Activitycenter',
    components: {
      advertisement,
    },
    data() {
      return {
        activelist:[
        ],
        loading:false,
      };
    },
    computed: {
      
    },
    watch: {},
    methods: {
      reloadactiveitem(){
        let _this=this
        _this.loading=true
        let params ={
          access_token:_this.$cookies.get('ttwk-login-access-token') ?_this.$cookies.get('ttwk-login-access-token'): ''
        }
        const formData = new FormData();
          Object.keys(params).forEach((key) => {
            formData.append(key, params[key]);
        });
        axios.post('/api/user/Usercenter/activity_list',formData)
        .then(function(res){
          _this.loading=false
          _this.activelist=res.data.data.list
          for(let i of _this.activelist){
            let enddate=new Date(i.endtime).valueOf();
            let nowdate=new Date().valueOf();
            if(enddate>nowdate){
              i.isactive=true
            }else{
              i.isactive=false
            }
          }
        })
        .catch(error=>{
          _this.loading=false;
        })
      }
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
         this.reloadactiveitem()
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
    .Activitycenter{
        background: #fff;
        padding: 1.5rem;
        min-height:630px
    }
    .el-empty{
      min-height:670px
    }
    .Activitycenter h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
    }
    .el-col[data-type="w20"]{
      max-width: 20%;
      flex:0 0 20%
    }
    .active-item{
      display: block;
      padding: 0 1rem;
      margin: 1rem 0;
      overflow: hidden;
    }
    .active-item p{
      margin: 0;
    }
    .active-item img{
      width: 100%;
      border-radius: 0.3rem;
    }
    .active{
      position: relative;
    }
    .active::after{
      content:'活动已结束';
      font-size: 18px;
      font-weight: 700;
      color:#fff;
      line-height: 130px;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 0.3rem;
      top:0;
      left: 0;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0.7);
    }
</style>