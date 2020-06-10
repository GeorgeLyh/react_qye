import axios from "axios";

//#region
//参考文档 https://www.kancloud.cn/yunye/axios/234845

// 为方便起见，为所有支持的请求方法提供了别名
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
// NOTE
// 在使用别名方法时， url、method、data 这些属性都不必在配置中指定。

//#endregion

const baseURL = "https://jsonplaceholder.typicode.com/";
let ajax = axios.create({
  withCredentials: false, // 默认的  `withCredentials` 表示跨域请求时是否需要使用凭证
  baseURL: baseURL,
  timeout: 10000, //如果请求话费了超过 `timeout` 的时间，请求将被中断
});

// 在请求或响应被 then 或 catch 处理前拦截它们。

// 添加请求拦截器
ajax.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    if (config) {
      config.headers["X-Auth-Token"] = "test";
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
ajax.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    if (response.status === 200) {
      return response;
    } else {
      Promise.reject("后台请求异常");
    }
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default ajax;
