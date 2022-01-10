/**
 * 登陆注册页面
 * created by 李永晖 on 2022/01/10
 */
import {BrowserRouter, Route} from 'react-router-dom';

export default function HomePage(){
    return (
        <div style={styles.wrap}>
            <div className="loginBox" style={styles.loginBox}>
                <div>两个按钮</div>
                <BrowserRouter>
                    <Route path='/'>1</Route>
                    <Route path='register'>2</Route>
                </BrowserRouter>
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

    }
}