import axios from 'axios'

export function request(config) {
  // 1.创建axios实例
  const instence = axios.create({
    // baseURL: 'https://music.163.com/api',
    baseURL: 'http://123.207.32.32:9001',
    timeout: 5000
  });

  // 2.axios的拦截器
  instence.interceptors.request.use(config => {
    // 2.1.1 比如config中的一些信息不符合服务器的要求

    // 2.1.2 比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 2.1.3 某些网络请求(比如登录(token))，必须携带一些特殊的信息

    // console.log(config);
    return config;

  }, err => {
    console.log(err);
  });

  // 2.2 响应拦截
  instence.interceptors.response.use(res => {
    // console.log(res);
    return res.data;
  }, err => {
    console.log(err);
  });

  // 3.发送真正的网络请求
  return instence(config)
}
