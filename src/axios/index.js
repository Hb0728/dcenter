import axios from 'axios'
import { ElMessage  } from 'element-plus'
import NProgress from 'nprogress';
let accessToken = '7331RU5XItj4Th6PB537pHbTjosrHvRTEmXfuLlhAHzkLyn9agUK-_yhbfgg72bK1JCKjD5XMHPUhvVq2SDUzVC_2zx-Iya8D9g0_oTdhifreqq-b9ZgScVaVZuZJdwrfmnfTmi1-uU2c5GxzUmeuouZUR3GepNeEgsJBizX_R7PChF03S1QuqnJ9g';

// 配置默认地址
axios.defaults.baseURL='https://api.wenku365.com/'

//默认超时时间
axios.defaults.timeout = 60000;
//返回其他状态码
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500;
};
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;
NProgress.configure({
    showSpinner: false
  });
  
//http request拦截
axios.interceptors.request.use(config => {
  //开启 progress bar
  config.withCredentials = false;
  NProgress.start();
  const meta = (config.meta || {});
  //设置默认hender
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  //headers中配置text请求
  if (config.text === true) {
    config.headers["Content-Type"] = "text/plain";
  }
  // headers中配置serialize为true开启序列化
  if (config.method === 'post' && meta.isSerialize === true) {
    config.data = serialize(config.data);
  }
  if (config.data) {
    config.data.access_token = accessToken;
  } else if (config.params) {
    config.params.access_token = accessToken;
  } else {
    config.params = {};
    config.params.access_token = accessToken;
  }
  return config
}, error => {
  return Promise.reject(error)
});
//http response 拦截
axios.interceptors.response.use(res => {
  //关闭 progress bar
  NProgress.done();
  //获取状态码
  let  status =res.data.code || res.status;
  if(res.data.code!=401){
     status =res.data.code || res.status;
  }else{
     status =res.status;
  }
  const message = res.data.msg || res.data.error_description || '未知错误';
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
    ElMessage ({
      message: message,
      type: 'error'
    });
    return Promise.reject(new Error(message))
  }
  return res;
}, error => {
  NProgress.done();
  return Promise.reject(new Error(error));
});
  
  export default axios;