import axios from 'axios';
import { message } from 'antd';

let baseUrl = '';
const request = axios.create({
  // API 请求的默认前缀
  timeout: 300000, // 请求超时时间
  headers: {}
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (!error.response.request) return
  if (error.response) {
    switch (error.response.status) {
      case 401:
        message.warning(`请重新登录`);
        break;
      case 403:
        message.warning(`该接口暂无权限，请联系管理员`);
        return {
          status: 500,
          code: 500,
          message: '接口暂无权限',
          msg: '接口暂无权限'
        }
      default:
        message.error('服务异常');
        break;
    }
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  const { url } = config;
  const  localDataStr = sessionStorage.getItem('graphql-url-data');
  const localData = localDataStr ? JSON.parse(localDataStr) : {};
  baseUrl = localData.baseUrl;
  const serviceId = localData.serviceId;
  const tenant = localData.tenant;
  const token = localData.token;

  let curTime = `time=${new Date().getTime()}`;
  config.headers['x-service-id'] = serviceId || '';
  config.headers['token'] = token || '';
  config.headers['x-tenant-id'] = tenant || '';


  curTime = url.includes('?') ? `&${curTime}` : `?${curTime}`
  config.url = baseUrl + url + curTime //主

  config.headers['Content-Type'] = 'application/json'
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  return response.data
}, errorHandler)

export default request;
