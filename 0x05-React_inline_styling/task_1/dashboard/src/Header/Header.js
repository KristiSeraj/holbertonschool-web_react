import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return (
        <header className={css(styles.header)}>
            <img src={logo} className={css(styles.logo)} alt="Holberton logo" />
            <h1 className={css(styles.h1)}>School dashboard</h1>
        </header>
    );
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        borderBottom: '5px #E0354B solid'
    },
    h1: {
        color: '#E0354B',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    logo: {
        width: 300
    }
})

export default Header;