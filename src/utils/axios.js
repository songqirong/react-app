import axios from 'axios';
import {message} from "antd";
let baseURL = "http://localhost:9200/api/v1";
const instance = axios.create({
    baseURL,
    timeout:7000,
    headers:{
        "Content-Type":"application/json;charset=UTF-8"
    }
});
instance.interceptors.request.use((config)=>{
    // token 的作用，是用户鉴权
    config.headers.Authorization = localStorage.getItem('token') || '';
    return config;
},(err)=>{
    return Promise.reject(err);
});
instance.interceptors.response.use((response)=>{
    if(response.status===200){
        if(response.data&&response.data.success){
            return response.data.data;
        }else{
            message.warning(response.data.msg);
        }
    }
},(err)=>{
    return Promise.reject(err);
});
export default instance;