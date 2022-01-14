/**
 * 封装cookie类
 * created by 李永晖 on 2022/01/14
 */

import Cookies from "js-cookie";

export const key = {
    tokenKey:'token',
    refreshTokenKey:'refreshToken',
    userInfoKey:'userInfo'
};

class Cookie{
    constructor(){
        this.domain = 'localhost';
        this.expireTime = 30;
    }

    static checkCookie(key){
        if(!key){
            throw new Error('没有找到key!');
        }
        if(key === Object){
            throw new Error('key不能是一个对象!')
        }
    }

    set(key, value, expireTime, path = '/'){
        Cookie.checkCookie(key);
        Cookies.set(key, value, {expires: expireTime || this.expireTime, path: path, domain: this.domain});
    }

    get(key){
        Cookie.checkCookie(key);
        return Cookies.get(key);
    }

    remove(key, path = '/'){
        Cookie.checkCookie(key);
        Cookies.remove(key, {path:path, domain:this.domain});
    }
}

export default new Cookie();