/**
 * 封装请求对象
 * created by 李永晖 on 2022/01/13
 */

import axios from "axios";

const request = axios.create({
    baseURL:' https://mock.mengxuegu.com/mock/61dfe4df17249f68847fbf8b/henuBlog',
    timeout:5000
});

request.interceptors.request.use(function(config){
    return config
},function(error){
    console.log(error);
    // 如果出错，返回rejected状态的promise对象，在发送前进行处理
    Promise.reject(error);
});

request.interceptors.response.use((response)=>{
    const {data} = response;
    return data;
},(error)=>{
    return Promise.reject(error);
})


export {request};