import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import './Notification.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notification extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.listNotifications.length > this.props.listNotifications.length
        );
    }
    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    };
    render() {
        const { displayDrawer, listNotifications } = this.props;
        const handledClick = () => {
            console.log('Close button has been clicked')
        };
        return (
            <>
            <div className={css(styles.menuItem)}>
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div className={css(styles.notification)}>
                    <button style={{
                        background: 'transparent',
                        position: 'absolute',
                        right: 20,
                        border: 'none'
                    }} aria-label='Close' onClick={handledClick}><img src={closeIcon} alt='Close icon' className={css(styles.img)}/></button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        {listNotifications === 0 && (
                            <Notification type="default" value="No new notification for now" />
                        )}

                        {listNotifications.map((notification) => (
                            <NotificationItem key={notification.id} type={notification.type}
                                value={notification.value} html={notification.html} id={notification.id} markAsRead={this.markAsRead} />
                        ))}
                    </ul>
                </div>
            )}
        </>
        )
    }
}

const styles = StyleSheet.create({
    notification: {
        border: '2px dashed #E0354B',
        padding: 10,
        width: 400,
        float: 'right'
    },
    img: {
        width: 15,
        height: 15
    },
    menuItem: {
        textAlign: 'right'
    }
})

Notification.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notification.defaultProps = {
    displayDrawer: false
}

export default Notification;