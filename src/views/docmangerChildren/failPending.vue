<template>
  <div class='failPending'>
      <doc_header :headerName="'审核失败文档（'+firstTotals+'）'" headerTips="审核失败表示文档中含有违规内容或其他原因" @updatepage="updatepage"></doc_header>
      <doc_list itemStatus="-10" @updatepagelist="updatepagelist" failname="失败原因" :doc_list_data="doc_list_data" :total="total" :loading="faloading"></doc_list>
  </div>
</template>

<script>
import doc_list from '../../components/doc_components/doc_list'
import doc_header from '../../components/doc_components/doc_header'
import axios from '../../axios'

  export default {
    name :'failPending',
    components: {
      doc_list,
      doc_header,
    },
    data() {
       return {
        haslist:false,
        param1: {},
        param2:{

        },
        total:'0',
        doc_list_data:[],
        faloading:false,
        itemstatus:'-10',
        firstTotal:'0'
      };
    },
    computed: {
      firstTotals(){
        if(JSON.parse(window.localStorage.getItem('failPendingTotal'))){
           return JSON.parse(window.localStorage.getItem('failPendingTotal'))
        }
        return this.firstTotal
      }
    },
    watch: {},
    methods: {
      updatepage(data){
        this.param1 = data
        this.getitemlist(this.param1,this.param2)
      },
      updatepagelist(data){
        this.param2=data
        this.getitemlist(this.param1,this.param2)
      },
      getitemlist(dh,db,isfirst){
        // let haslist = dt.haslist ? dt.haslist:false;
        let page = db.page ? db.page:1;
        let pagesize = db.pagesize ? db.pagesize:20
        let file_ext = dh.file_ext ? dh.file_ext:'all'
        let status_vip =dh.status_vip ? dh.status_vip:'all'
        let status=this.itemstatus
        let keyword =dh.key_word ? dh.key_word:''
        let _this=this
        _this.faloading=true
        let params={
          page,
          pagesize,
          status,
          file_ext,
          status_vip,
          keyword,
          access_token:_this.$cookies.get('ttwk-login-access-token') ?_this.$cookies.get('ttwk-login-access-token'): ''
        }
        const formData = new FormData();
        Object.keys(params).forEach((key) => {
          formData.append(key, params[key]);
        });
        axios.post('/api/user/Filescenter/my_upload',formData)
        .then(function(res){
            // _this.loading=ref(false)
            _this.doc_list_data=res.data.data.list
            _this.total=res.data.data.total/1
            _this.faloading=false
            if(isfirst){
              window.localStorage.setItem('failPendingTotal', JSON.stringify(res.data.data.total/1))
              _this.firstTotal=res.data.data.total/1
              _this.$store.commit('setfailPendingTotal', res.data.data.total/1)
            }
        })
        .catch(function(error){
            
            _this.faloading=false
        })
      }
    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {
      this.getitemlist('','',true);
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
  
</style>