<template>
  <div class='pointLine' v-loading="loading">
      <div class="d-flex mb-4">
        <h3>指标看板</h3>
        <el-button type="primary" round plain :class="{'active':selectedNum=='1'}" @click="dataloading">最近7日指标</el-button> 
        <el-button round type="primary" plain :class="{'active':selectedNum=='2'}"  @click="dataloading2">最近30日指标</el-button>
      </div>
      <div class="tips">
        <el-row>
            <el-col :span="5">
              <div class="data-box">
                <div class="data-box-top">总收益（金币）</div>
                <div class="data-box-bottom">{{sum}}</div>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="data-box">
                <div class="data-box-top">总支付订单（个）</div>
                <div class="data-box-bottom">{{total}}</div>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="data-box">
                <div class="data-box-top">总上传量（个）</div>
                <div class="data-box-bottom">{{uploadSum}}</div>
              </div>
            </el-col>

        </el-row>
      </div>
      <div id="pointLine-pic" style="width:100%;height:500px">

      </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import axios from '../../axios'

  export default {
    name :'pointLine',
    components: {
      
    },
    data() {
      return {
        selectedNum:'1',
        sum:'0',
        total:'0',
        uploadSum:'',
        datelist:[],
        orderlist:[],
        allmoney:[],
        loading:false,
      };
    },
    computed: {
      
    },
    watch: {},
    methods: {
      initpic(){
        let myChart = echarts.init(document.getElementById('pointLine-pic'));
        // 绘制图表
        let _this=this
        myChart.setOption({
            
            tooltip: {
              trigger: 'axis'
            },
            grid:{
              
            },
            legend: {},
            toolbox: {
              show: false,
              feature: {
                dataZoom: {
                  yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: _this.datelist
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value}'
              }
            },
            series: [
              {
                name: '总支付订单(个)',
                type: 'line',
                data: _this.orderlist,
                lineStyle:{
                  color:'#FAC858',
                },
                itemStyle:{
                  color:'#FAC858',
                },
              },
              {
                name: '总收益(金币)',
                type: 'line',
                lineStyle:{
                  color:'#5470C6',
                },
                itemStyle:{
                  color:'#5470C6',
                },
                data: _this.allmoney
              }
            ]
        })
      },
      dataloading(e){
        this.selectedNum='1'
        this.getdata(false)
      },
      dataloading2(e){
        this.selectedNum='2'
        this.getdata(false)
      },
      
      getdata(first){
        let _this=this
        _this.loading=true
        let params={
          date_type:_this.selectedNum,
          access_token:_this.$cookies.get('ttwk-login-access-token') ?_this.$cookies.get('ttwk-login-access-token'): '' 
        }
        const formData = new FormData();
        Object.keys(params).forEach((key) => {
          formData.append(key, params[key]);
        });
        axios.post('/api/user/Usercenter/my_sell_statistics',formData).then(function(res){
          _this.loading=false
          _this.sum=res.data.data.sum*1;
          _this.total=res.data.data.total*1;
          _this.uploadSum=res.data.data.uploadSum*1
          let xlist =[];
          let y1list=[];
          let y2list=[];
          for(let obj in res.data.data.list){
            xlist.push(obj)
            y1list.push(res.data.data.list[obj].num*1)
            y2list.push(res.data.data.list[obj].sum*1)
          }
          _this.datelist=xlist;
          _this.orderlist=y1list;
          _this.allmoney=y2list;
          // if(first){
          //   _this.initpic();
          // }
          _this.initpic();
        }).catch(error=>{
          _this.loading=false
        })
      }
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      document.getElementById("pointLine-pic").removeAttribute('_echarts_instance_');
      this.getdata(true);
      
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
  .pointLine{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 2rem;
        margin-bottom: 1rem;
        font-size: 14px;
    }
    .pointLine h3{
      text-align: start;
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      margin-right: 2rem;
    }
    .mb-4{
        margin-bottom: 2rem;
    }
    .active{
      background: #2780E3;
      color: #fff;
    }
    .d-flex{
        display: flex;
        align-items:center;
    }
    .tips{
        margin-bottom: 5rem;
    }
    .tips .el-col{
        margin-right: 2rem;
    }
    
    .choose-btn{
        margin-right: 1rem;
    }
    .data-box{
        background: #EAF2FF;
        padding: 1rem;
        text-align: start;
        min-height: 83px;
        border-radius: 0.3rem;
        font-size: 16px;
    }
    .data-box-top{
        color: #999;
        margin-bottom: 1.5rem;
    }
    .data-box-bottom{
        font-size: 20px;
        font-weight: 700;
    }
    
</style>
