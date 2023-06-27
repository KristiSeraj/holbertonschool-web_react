import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';
import { connect } from 'react-redux';
import AppContext from '../App/AppContext';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { user, logout } = this.props;
        return (
            <header className={css(styles.header)}>
                <img src={logo} className={css(styles.logo)} alt="Holberton logo" />
                <h1 className={css(styles.h1)}>School dashboard</h1>

                {user && (
                    <section id="logoutSection">Welcome <strong>{`${user.email}`}</strong> <span onClick={logout}><em>(logout</em>)</span></section>
                )
                }
            </header>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        borderBottom: '5px #E0354B solid'
    },
    h1: {
        color: '#E0354B',
        alignSelf: 'center',
        fontWeight: 'bold',
        '@media only screen and (max-width: 600px)': {
            fontSize: '1.5em'
        }
    },
    logo: {
        width: 300,
        '@media only screen and (max-width: 600px)': {
            width: 200
        }
    }
})

Header.contextType = AppContext;


const mapStateToProps = (state) => {
    return {
        user: state.ui.get('user')
    }
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);