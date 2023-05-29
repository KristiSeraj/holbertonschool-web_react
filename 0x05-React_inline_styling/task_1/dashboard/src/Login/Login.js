import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
    <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" className={css(styles.input)}/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" className={css(styles.input)}/>
        <button type="button">OK</button>
    </div>
    );
}

const styles = StyleSheet.create({
    body: {
        margin: 50
    },
    input: {
        marginLeft: 20,
        marginRight: 20
    }
})

export default Login;