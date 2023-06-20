import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
    this.login = this.login.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      displayDrawer: false,
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

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
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
    const { displayDrawer, user, logOut, user: { isLoggedIn }, listNotifications } = this.state;
    const infos = { user, logOut};
    return (
      <AppContext.Provider value={infos}>
      <Notification listNotifications={listNotifications}
                    handleDisplayDrawer={this.handleDisplayDrawer}
                    handleHideDrawer={this.handleHideDrawer}
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
  logIn: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
  logIn: () => {}
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

export default App;
