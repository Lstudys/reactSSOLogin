/**
 * 登录框
 * created by 李永晖 on 2022/01/10
 */
import react from "react"
import {useSelector, useDispatch} from 'react-redux';
import { useState ,useCallback} from "react";
import {userLogin} from '../reducers/index';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const getUsername = useCallback(
        (e) => {
            setUsername(e.target.value);
        },
        [username],
    )
    
    const getPassword = useCallback(
        (e) => {
            setPassword(e.target.value);
        },
        [password],
    )

    return(
        <>
            <div>
                <input placeholder="用户名..." type={'text'} style={styles.input} onChange={(e)=>{getUsername(e)}}></input><br />
                <input placeholder="密码..." type={'password'} style={styles.input} onChange={(e)=>{getPassword(e)}}></input>
                <button style={styles.button} onClick={()=>{dispatch(userLogin({payload:{username, password}}))}}>登录</button>
            </div>
        </>
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