import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/util';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Footer({ user }) {
    return (
        <footer>
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            {user && <p><a>Contact Us</a></p>}
        </footer>
    );
}

Footer.defaultProps = {
    user: null
}

Footer.propTypes = {
    user: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        user: state.ui.get('user')
    }
}

export default connect(mapStateToProps, null)(Footer);