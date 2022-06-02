// 封装公共方法 

// 获取文档列表
import axios from 'axios'
import { ref } from 'vue'
import dayjs from 'dayjs'
import { ElMessage } from 'element-plus'

export function getdoclist(dt){
    // let haslist = dt.haslist ? dt.haslist:false;
    let page = dt.page ? dt.page:1;
    let pagesize = dt.pagesize ? dt.pagesize:20
    let file_ext = dt.file_ext ? dt.file_ext:'all'
    let status_vip =dt.status_vip ? dt.status_vip:'all'
    let status=dt.status ? dt.status:''
    let keyword =dt.key_word ? dt.key_word:''
    dt.ele.loading=ref(true)
    axios.post('/api/user/Filescenter/my_upload',{
      page,
      pagesize,
      status,
      file_ext,
      status_vip,
      keyword,
    })
    .then(function(res){
        dt.ele.loading=ref(false)
        dt.ele.doc_list_data=res.data.data.list
        dt.ele.total=res.data.data.total/1
    })
    .catch(function(error){
        ElMessage({
            showClose: true,
            message: error.data.msg,
            type:'error'
        })
        dt.ele.loading=ref(false)
    })
};
export function parseDate(date, format = 'YYYY-MM-DD') {
    return dayjs(date).format(format)
}