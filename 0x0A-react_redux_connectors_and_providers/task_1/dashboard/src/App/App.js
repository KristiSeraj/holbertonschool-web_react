import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notification from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/util';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';
import { user } from './AppContext';
import { hideNotificationDrawer, displayNotificationDrawer } from '../actions/uiActionCreators';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.logOut = this.logOut.bind(this);
    this.login = this.login.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      user,
      logOut: this.logOut,
      listNotifications: listNotifications
    }
  }

  
  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notification) => notification.id !== id)
    }));
  }

  login(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    })
  }

  logOut() {
    this.setState({ user });
  }
  
  handleKeyDown(event) {
    if (event.key === 'h' && event.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { user, logOut, listNotifications } = this.state;
    const infos = { user, logOut};
    const { displayDrawer, hideNotificationDrawer, displayNotificationDrawer, isLoggedIn } = this.props;
    return (
      <AppContext.Provider value={infos}>
      <Notification listNotifications={listNotifications}
                    handleDisplayDrawer={displayNotificationDrawer}
                    handleHideDrawer={hideNotificationDrawer}
                    displayDrawer={displayDrawer} 
                    markNotificationAsRead={this.markNotificationAsRead} />
      <div className={css(styles.body)}>
        <Header />
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses}/>
          </BodySectionWithMarginBottom>
        ) : (
          <div className={css(styles.login)}>
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.login} />
            </BodySectionWithMarginBottom>
          </div>
        )}
        <div className={css(styles.news)}>
          <BodySection title="News from the School">
            <p>Lorem ipsum hello world</p>
          </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </div>
      </AppContext.Provider>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggeIn'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  }
}

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  footer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 0,
    borderTop: '5px #E0354B solid',
    fontStyle: 'italic',
    backgroundColor: '#fff'
  },
  news: {
    marginLeft: 30
  },
  login: {
    '@media only screen and (max-width: 600px)': {
      margin: 30
    }
  }
})

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
  logIn: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  displayNotificationDrawer: PropTypes.func,
  displayDrawer: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
  logIn: () => {},
  hideNotificationDrawer: () => {},
  displayNotificationDrawer: () => {},
  displayDrawer: false
}

const listCourses = [
  {
    id: 1,
    name:  'ES6',
    credit: 60
  },
  {
    id: 2,
    name:  'Webpack',
    credit: 20
  },
  {
    id: 3,
    name:  'React',
    credit: 40
  }
]

const listNotifications = [
  {
    id: 1,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    type: "urgent",
    html: getLatestNotification(),
  }
]

export default connect(mapStateToProps)(App);
