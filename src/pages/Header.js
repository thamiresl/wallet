import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  currencyConv = () => {
    const { getExpenses } = this.props;
    let totalValue = 0;
    if (getExpenses.length > 0) {
      getExpenses.forEach((element) => {
        const elementValue = element.exchangeRates[element.currency].ask;
        totalValue += element.value * elementValue;
      });
    }
    return totalValue.toFixed(2);
  }

  render() {
    const { emailUser } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ emailUser }</p>
        <p data-testid="total-field">{this.currencyConv()}</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  emailUser: state.user.email,
  getExpenses: state.wallet.expenses,
});

Header.propTypes = {
  emailUser: PropTypes.string.isRequired,
  getExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);

// https://react-redux.js.org/using-react-redux/connect-mapstate
