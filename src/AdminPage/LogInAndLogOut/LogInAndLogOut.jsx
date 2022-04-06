import React from 'react';
import styles from "../LogInAndLogOut/LogInAndLogOut.module.css"

const LogInAndLogOut = () => {
    return (
        <div className={styles.body}>
        <div style={{ maxWidth: "500px" }} className={styles.container}>
            <h2> Пожалуйста, войдите в систему</h2>
            <input type="mail" placeholder='Имя пользователя'/>
            <input type="text" placeholder='Пароль'/>
            <div className={styles.button}><button>Log in</button></div>
            
        </div>
        </div>
    );
};

export default LogInAndLogOut;