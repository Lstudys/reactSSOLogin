/**
 * 登录框
 * created by 李永晖 on 2022/01/10
 */
import react from "react"

export default function Login(){
    return(
        <>
            <div>
                <input placeholder="用户名..." type={'text'} style={styles.input}></input><br />
                <input placeholder="密码..." type={'password'} style={styles.input}></input>
                <button style={styles.button}>登录</button>
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