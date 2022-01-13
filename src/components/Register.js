/**
 * 注册框
 * created by 李永晖 on 2022/01/10
 */

export default function Register(){
    return(
        <div>
            <input placeholder="输入用户名..." type={'text'} style={styles.input}></input><br/>
            <input placeholder="输入密码..." type={'password'} style={styles.input}></input><br/>
            <input placeholder="确认密码" type={'password'} style={styles.input}></input>
            <button style={styles.button}>注册</button>
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