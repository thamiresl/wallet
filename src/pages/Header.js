import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';

class Header extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <div>
        <Table />
        <p data-testid="email-field">{ emailUser }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

// https://react-redux.js.org/using-react-redux/connect-mapstate
