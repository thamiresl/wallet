import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApi } from '../actions/index';
import Header from './Header';
import Form from './Form';
import Table from './Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { mapCurrencies } = this.props;
    mapCurrencies();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  mapCurrencies: (currencies) => dispatch(getApi(currencies)),
});

Wallet.propTypes = {
  mapCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
