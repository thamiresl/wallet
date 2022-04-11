import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WalletApi from '../services/WalletApi';
import { EXPENSES_ACTION } from '../actions';

const alimentacao = 'Alimentação';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      id: 0,
      expenses: {},
    };
  }

  inputVerify = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

addExpenses = async () => {
  const { value, description, currency, method, tag, id } = this.state;
  const { mapExpenses } = this.props;
  const fetchApi = await WalletApi();
  this.setState({
    expenses: { value, description, currency, method, tag, id, exchangeRates: fetchApi },
  }, () => {
    const { expenses } = this.state;
    mapExpenses(expenses);
    this.setState((preview) => ({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentacao,
      id: preview.id + 1,
    }));
  });
}

render() {
  const { value, description, currency, method, tag } = this.state;
  const { currenciesMap } = this.props;
  return (
    <div>
      <form>
        <label htmlFor="valueInput">
          Valor:
          <input
            data-testid="value-input"
            type="text"
            name="value"
            id="valueInput"
            value={ value }
            onChange={ this.inputVerify }
          />
        </label>

        <label htmlFor="descriptionInput">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description"
            id="descriptionInput"
            value={ description }
            onChange={ this.inputVerify }
          />
        </label>

        <label htmlFor="currencyInput">
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            id="currencyInput"
            value={ currency }
            onChange={ this.inputVerify }
          >
            { currenciesMap
              .map((element, index) => (
                <option
                  key={ index }
                  value={ element }
                >
                  {element}
                </option>
              )) }
          </select>
        </label>

        <label htmlFor="payMethodInput">
          Pagamento:
          <select
            data-testid="method-input"
            name="method"
            id="payMethodInput"
            value={ method }
            onChange={ this.inputVerify }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="costInput">
          Despesa:
          <select
            data-testid="tag-input"
            name="tag"
            id="costInput"
            value={ tag }
            onChange={ this.inputVerify }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.addExpenses }
        >
          Adicionar despesa
        </button>
      </form>
    </div>
  );
}
}
const mapStateToProps = (state) => ({
  currenciesMap: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  mapExpenses: (value) => dispatch(EXPENSES_ACTION(value)),
});

Form.propTypes = {
  currenciesMap: PropTypes.string.isRequired,
  mapExpenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
