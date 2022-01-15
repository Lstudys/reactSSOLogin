/**
 * 注册框
 * created by 李永晖 on 2022/01/10
 */
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../reducers";

export default function Register(){
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');

    const getUsername = useCallback((e)=>{
        setUsername(e.target.value);
    },[username]);

    const getPassword = useCallback((e)=>{
        setPassword(e.target.value);
    },[password]);

    const getRepassword = useCallback((e)=>{
        setRepassword(e.target.value);
    },[repassword]);

    return(
        <div>
            <input placeholder="输入用户名..." type={'text'} style={styles.input} onChange={(e)=>{getUsername(e)}}></input><br/>
            <input placeholder="输入密码..." type={'password'} style={styles.input} onChange={(e)=>{getPassword(e)}}></input><br/>
            <input placeholder="确认密码" type={'password'} style={styles.input} onChange={(e)=>{getRepassword(e)}}></input>
            <button style={styles.button} onClick={()=>{dispatch(userRegister({payload:{}}))}}>注册</button>
        </div>
    )
}

const styles = {
    input:{
        width: '300px',
        padding: '12px 20px',
        margin: '8px 60px',
        // display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
      },
      button:{
        width:"300px",
        padding:'12px 20px',
        margin:'8px 80px',
        borderRadius:'4px',
        color:'#fff',
        backgroundColor:'#1E90FF',
        borderWidth:'0',
        marginBottom:'30px'
    }
}