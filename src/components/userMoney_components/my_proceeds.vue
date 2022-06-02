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
            <p class="font-12 text-999 p-height">1、提现支付宝账号姓名必须与实名认证提交的姓名一致，否则会提现失败</p>
            <p class="font-12 text-999 p-height">2、提交提现申请之后，工作人员进行审核，节假日到账时间会有所延长，请耐心等待~</p>
            <p class="font-12 text-999 p-height">3、为了安全考虑，请输入与账号绑定相同的手机号进行申请提现</p>
            <p class="font-12 text-999 p-height">4、为避免加大工作人员的工作量，每天只能提现一次，谢谢支持!</p>
          </div>
        </el-col>
      </el-row>
      <div class="doshed-line"></div>
      <h3>申请提现</h3>
      <form class="getmoney-form">
        <label for="">
           <span class="boxname">真实姓名：</span><input type="text" @blur="blurtruename" v-model="truename" placeholder="输入与支付宝认证一致的名字">
           <div :class="[notruename ? 'write-false':'','false-tips']">请输入真实姓名</div>
        </label>
        <label for="">
           <span class="boxname">支付宝账号：</span><input type="text" @blur="bluraliid" v-model="aliid" placeholder="输入您的收款账号">
           <div :class="[noaliid ? 'write-false':'','false-tips']">请输入支付宝账号</div>
        </label>
        <label  for="">
           <div class="verifica_code-box">
              <span class="boxname">图文验证码：</span><input type="text" @blur="blurverifica_code" v-model="verifica_code" placeholder="输入验证码">
              <el-button class="verifica_code-img" @click="getvercode"><img :src="vercodeurl"  alt=""></el-button>
              <div :class="[noverifica_code ? 'write-false':'','false-tips']">请输入验证码</div>
           </div>
        </label>
        <input type="hidden" class="hiddenkey" v-model="hiddenkey">
        <label for="">
           <span class="boxname">手机号：</span><input type="text" @blur="blurphonenum" v-model="phonenum" placeholder="输入您的收款账号">
           <div class="font-12 text-999 tips">如当前手机号无法使用请先换绑可用手机号</div>
           <div :class="[nophonenum ? 'write-false':'','false-tips']">请输入手机号</div>
        </label>

        <label for="">
           <span class="boxname">验证码：</span><input type="text" placeholder="输入验证码" @blur="blurvcode" v-model="vcode" style="width: 130px;margin-right: 10px;"><el-button type="primary" style="width:90px;height: 37px;" @click="getphonecode" plain>{{btntext}}</el-button>
           <div :class="[novcode ? 'write-false':'','false-tips']">请输入验证码</div>
        </label>
        <label for="">
           <span class="boxname">提现金额：</span><input type="number" @blur="blurtakemoney" v-model="takemoney" placeholder="输入大于100的金额">
           <div :class="[notakemoney ? 'write-false':'','false-tips']">请输入大于100的金额</div>
        </label>
      </form>
      <div class="pb-4"><el-button type="primary">申请提现</el-button></div>
  </div>
</template>

<script>
import axios from '../../axios'
import { ElMessage } from 'element-plus'

  export default {
    name :'my_proceeds',
    components: {
      
    },
    data() {
      return {
        truename:'',
        notruename:false,
        aliid:'',
        noaliid:false,
        phonenum:'',
        nophonenum:false,
        vcode:'',
        novcode:false,
        verifica_code:'',
        noverifica_code:false,
        takemoney:'',
        notakemoney:false,
        hiddenkey:'',
        vercodeurl:'https://picsum.photos/id/66/200/150',
        btntext:'获取验证码',
      };
    },
    computed: {
      
    },
    watch: {},
    methods: {
      getvercode(){
        let _this=this
        axios.post('/api/oauth/base/get_captcha').then(
          res=>{
            _this.vercodeurl=res.data.data.image
            _this.hiddenkey=res.data.data.key
          }
        ).catch(error=>console.log(error))
      },
      blurtruename(){
        if(this.truename==''){
          this.notruename=true
        }else{
          this.notruename=false
        }
      },
      bluraliid(){
        if(this.aliid==''){
          this.noaliid=true
        }else{
          this.noaliid=false
        }
      },
      blurphonenum(){
        if(this.phonenum==''){
          this.nophonenum=true
        }else{
          this.nophonenum=false
        }
      },
      blurvcode(){
        if(this.vcode==''){
          this.novcode=true
        }else{
          this.novcode=false
        }
      },
      blurverifica_code(){
        if(this.verifica_code==''){
          this.noverifica_code=true
        }else{
          this.noverifica_code=false
        }
      },
      blurtakemoney(){
        if(this.takemoney<=0){
          this.notakemoney=true
        }else{
          this.notakemoney=false
        }
      },
      // 获取手机验证码
      getphonecode(){
        this.blurverifica_code()
        this.blurphonenum()
        if(!this.nophonenum&&!this.noverifica_code){
          let _this=this
          axios.post('/api/oauth/app_sms/get_sms_code',{
            mobile:_this.phonenum,
            code:_this.verifica_code,
            key:_this.hiddenkey,
          }).then(res=>{
            ElMessage({
            showClose: true,
            message: res.data.msg,
            type:'success'
            })
          }).catch(error=>{
            _this.getvercode();
            _this.$message({
                message: error.data.code,
                showClose:true,
                type: 'error',
            })
        })
        }
      }
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getvercode()
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
    .p-height{
      min-height: 31px;
      margin: 0;
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
    .tips{
      padding-left: 100px;
      text-align: start;
    }
    .getmoney-form label{
      max-width: 360px;
      display: block;
      margin: 0 auto;
    }
    .getmoney-form label input{
      height: 35px;
      border: 1px solid #999;
      font-size: 12px;
      padding: 0 .8rem;
      width: 230px;
      color: #999;
    }
    .pb-4{
      padding-bottom: 2rem;
    }
    .verifica_code-box{
      position: relative;
    }
    .verifica_code-img{
      height: 30px;
      position: absolute;
      right: 5px;
      top:3.5px;
      padding: 0;
    }
    .verifica_code-img img{
      height: 30px;
    }
    .false-tips{
      font-size: 12px;
      padding: 0.1rem 0;
      padding-left: 108px;
      text-align: start;
      color: #FF0000;
      visibility: hidden;
    }
    .write-false{
      visibility: visible;
    }
</style>