<template>
  <div class='my_proceeds'>
      <h3>我的收益</h3>
      <el-row>
        <el-col :span="9">
          <div class="py-3">我的收益（可提现金额）</div>
          <div class="myprice">129.00</div>
          <div class="py-3" >满100元即可申请提现</div>
        </el-col>
        <el-col :span="15">
          <div class="text-left">
            <h5>注意事项</h5>
            <p class="font-12 text-999">1、提现支付宝账号姓名必须与实名认证提交的姓名一致，否则会提现失败</p>
            <p class="font-12 text-999">2、提交提现申请之后，工作人员进行审核，节假日到账时间会有所延长，请耐心等待~</p>
            <p class="font-12 text-999">3、为了安全考虑，请输入与账号绑定相同的手机号进行申请提现</p>
            <p class="font-12 text-999">4、为避免加大工作人员的工作量，每天只能提现一次，谢谢支持!</p>
          </div>
        </el-col>
      </el-row>
      <div class="doshed-line"></div>
      <h3>申请提现</h3>
      <form class="getmoney-form">
        <label for="">
           <span class="boxname">真实姓名：</span><input type="text" placeholder="输入与支付宝认证一致的名字">
        </label>
        <label for="">
           <span class="boxname">支付宝账号：</span><input type="text" placeholder="输入您的收款账号">
        </label>
        <label for="">
           <span class="boxname">手机号：</span><input type="text" placeholder="输入您的收款账号">
           <div class="font-12 text-999" style="padding: 0.3rem 0;"><span class="boxname"></span>如当前手机号无法使用请先换绑可用手机号</div>
        </label>
        <label for="">
           <span class="boxname">验证码：</span><input type="text" placeholder="输入验证码" style="width: 130px;margin-right: 10px;"><el-button type="primary" style="width:90px" plain>获取验证码</el-button>
        </label>
        <label for="">
           <span class="boxname">提现金额：</span><input type="text" placeholder="输入大于100的金额">
        </label>
      </form>
      <div class="pb-4"><el-button type="primary">申请提现</el-button></div>
  </div>
</template>

<script>
//import

  export default {
    name :'my_proceeds',
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
  .my_proceeds{
        background: #fff;
        /* box-shadow: 0 0 10px #999; */
        padding: 1.5rem;
        margin-bottom: 1rem;
        font-size: 14px;
        min-height: 695px;
    }
    .my_proceeds h3{
      text-align: start;
      margin: 0;
      margin-bottom: 1rem;
    }
    .font-12{
      font-size: 12px;
    }
    .text-999{
      color:#999
    }
    .text-left{
      text-align: start;
    }
    .myprice{
      color: #FF0000;
      font-size: 28px;
      padding-top: 1rem;
    }
    .py-3{
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .boxname{
      display: inline-block;
      width: 100px;
      text-align: end;
    }
    .doshed-line{
      border-top: 1px dashed #f1f1f1;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .getmoney-form{
      padding:2rem 0
    }
    .getmoney-form label{
      width: 500px;
      display: inline-block;
      padding: .5rem 0 ;
    }
    .getmoney-form label input{
      height: 30px;
      border: 1px solid #999;
      border-radius: 0.2rem;
      font-size: 12px;
      padding: 0 .8rem;
      width: 230px;
      color: #999;
    }
    .pb-4{
      padding-bottom: 2rem;
    }
</style>