import config from "./config";

//#region
// `data` 是作为请求主体被发送的数据
// 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
// 在没有设置 `transformRequest` 时，必须是以下类型之一：
// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
// - 浏览器专属：FormData, File, Blob
// - Node 专属： Stream

// `params` 是即将与请求一起发送的 URL 参数,必须是一个无格式对象(plain object)或 URLSearchParams 对象
//#endregion

export const getTodos = (params) => {
  return config({
    url: "todos",
    method: "get",
    params: params,
  });
};

export const getUsers = (params) => {
  return config({
    url: "users",
    method: "get",
  });
};

export const getPhotos = (params) => {
  return config({
    url: "photos",
    method: "get",
  });
};

//获取中国天气网数据
export const getWeather = (params) => {
  return config({
    url: "/api/101320101.html",
    method: "get",
  });
};
