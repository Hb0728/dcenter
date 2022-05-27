<template>
  <div class='pointLine' >
      <div class="d-flex mb-4"><h3>指标看板</h3><el-button type="primary" round plain autofocus="true">最近7日指标</el-button> <el-button round type="primary" plain>最近30日指标</el-button></div>
      <div class="tips">
        <el-row>
            <el-col :span="4">
              <div class="data-box">
                <div class="data-box-top">总收益（金币）</div>
                <div class="data-box-bottom">0</div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="data-box">
                <div class="data-box-top">总支付订单（个）</div>
                <div class="data-box-bottom">0</div>
              </div>
            </el-col>
            <el-col :span="4" >
              <div class="data-box" >
                <div class="data-box-top">总浏览量（次）</div>
                <div class="data-box-bottom">0</div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="data-box">
                <div class="data-box-top">总上传量（个）</div>
                <div class="data-box-bottom">0</div>
              </div>
            </el-col>

        </el-row>
      </div>
      <div id="pointLine-pic" style="width:100%;height:500px">

      </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

  export default {
    name :'pointLine',
    components: {
      
    },
    data() {
      return {
        
      };
    },
    computed: {
      
    },
    watch: {},
    methods: {
      initpic(){
        let myChart = echarts.init(document.getElementById('pointLine-pic'));
        // 绘制图表
        myChart.setOption({
            
            tooltip: {
              trigger: 'axis'
            },
            grid:{
                left:0
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
              data: ['2022-04-20', '2022-04-21', '2022-04-22', '2022-04-23', '2022-04-24', '2022-04-25','2022-04-26']
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value}'
              }
            },
            series: [
              {
                name: '总浏览量(次)',
                type: 'line',
                data: [5, 20, 60, 10, 10, 20,58],
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
                data: [0, 1, 2, 3, 4, 5,6]
              }
            ]
        })
      }
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.initpic();
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
        margin-left: 1rem;
        margin-right: 1rem;
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
