/**
 * store的slice，包括了state、reducer和action
 * created by 李永晖 on 2022/01/14
 */

import {createSlice } from '@reduxjs/toolkit';

import cookie from '../utils/cookie';
import {key} from '../utils/cookie';
import {login} from '../api/auth';

const authSlice = createSlice ({
    name:'auth',
    initialState:{
        // state
        userInfo:cookie.get(key.userInfoKey) || '',
        token:cookie.get(key.tokenKey) || '',
        refreshToken:cookie.get(key.refreshTokenKey) || ''
    },
    reducers:{
        // 实际上是action
        // 调用时只传action即可，不会被当作第一个参数
        userLogin(state = authSlice.initialState, action){
            console.log('action',action.payload);
            login(action.payload).then(function(response){
                console.log('response',response);
                const {data} = response;
                const {access_token, userInfo, refresh_token} = data;
                
                cookie.set(key.tokenKey, access_token);
                cookie.set(key.refreshTokenKey, refresh_token);
                cookie.set(key.userInfoKey, userInfo);
            })
        }
    }
});

// action
export const {userLogin} = authSlice.actions;

// reducer
export default authSlice.reducer;