<template>
  <div class='Activitycenter mx-4'>
    <h3>活动中心</h3>
    <el-row>
      <el-col v-for="item in activelist" :key="item" data-type="w20">
          <a class="active-item" :href="item.href">
            <p :class="item.isactive ? 'active':''">
              <img :src="item.picurl" alt="" style="display:block">
            </p>
          </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>


  export default {
    name :'Activitycenter',
    components: {
      
    },
    data() {
      return {
        activelist:[
          { 
            href:'/2131',
            picurl:'https://picsum.photos/id/38/300/167',
            isactive:true
        },{
             href:'/2131',
            picurl:'https://picsum.photos/id/18/300/167',
            isactive:false
        },{ 
            href:'/2131',
            picurl:'https://picsum.photos/id/98/300/167',
            isactive:true
        },{
            href:'/2131',
            picurl:'https://picsum.photos/id/88/300/167',
            isactive:false
        },{
            href:'/2131',
            picurl:'https://picsum.photos/id/51/300/167',
            isactive:true
        },
        {
            href:'/2131',
            picurl:'https://picsum.photos/id/51/300/167',
            isactive:true
        },
        ]
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
  .Activitycenter{
        background: #fff;
        box-shadow: 0 0 10px #999;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        margin-left: 1.5rem;
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