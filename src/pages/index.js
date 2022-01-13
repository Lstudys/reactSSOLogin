/**
 * 登陆注册页面
 * created by 李永晖 on 2022/01/10
 */
import react from 'react';
import Login from '../components/Login.js';
import Register from '../components/Register.js';


import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';

export default function HomePage(){
    return (
        <div style={styles.wrap}>
            <div className="loginBox" style={styles.loginBox}>
                <div className='button' style={styles.button}>
                    <Link to={'/'} style={styles.buttonInner}>登录</Link>
                    <Link to={'/register'} style={styles.buttonInner}>注册</Link>
                </div>
                    <Routes>
                        <Route path='/' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                    </Routes>
            </div>
        </div>
    )
}

const styles = {
    wrap:{
        background:`url(${require("../assert/images/background.jpg")}) no-repeat center`,
        height:'650px',
        width:'100%'
    },
    loginBox:{
        display:'flex',
        flexDirection:'column',
        position: 'absolute',
        backgroundColor:'#fff',
        height:'auto',
        width:'450px',
        right:'50px',
        top:'120px'
    },
    button:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    buttonInner:{
        marginRight:'30px',
        textDecoration: 'none',
        color:'#1E90FF',
        fontSize:'20px',
        marginTop:'12px'
    }
}