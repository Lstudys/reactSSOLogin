/**
 * 用户认证相关请求方法
 * created by 李永晖 on 2022/01/13
 */

import {request} from '../utils/request';

const header = {
    'Content-Type':'application/x-www-form-urlencoded'
}

export function login(data){
    return request({
        url:'/login',
        data:data,
        method:'POST',
        header
    })
}