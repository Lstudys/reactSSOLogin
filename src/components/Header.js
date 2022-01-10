/**
 * header组件
 * created by 李永晖 on 2022/01/10
 */

export default function Header(){
    return (
        <div className="wrap" style={styles.wrap}>
            <img src={require('../assert/images/logo.png')} alt="logo" style={styles.img}></img>
        </div>
    )
}

const styles= {
    wrap: {
        // backgroundColor:'blue',
        width:'100%',
        height:'70px',
        borderTop:'3px solid #1E90FF'
    },
    img:{
        height:'50px',
        marginTop:'10px',
        marginLeft:'40px'
    }
}